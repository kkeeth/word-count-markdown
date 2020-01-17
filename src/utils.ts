import * as fs from 'fs'
import * as path from 'path'
import { CLIError } from '@oclif/errors'
import { ISection, ICountCharacters, ILine } from './interfaces'

const ERRORS = {
  NO_SPECIFY: 'No specified any file or directory',
  WRONG_SPECIFY: `A markdown file cannot be specified for the -m option`,
  NOT_FOUND_DIR: 'The specified directory does not exist',
  NOT_FOUND_FILE: 'The specified file does not exist',
  NOT_MARKDOWN: 'The specified file does not .md',
  NOT_FOUND_MARKDOWN: 'There is no markdown file in specifying directory'
}

class Section {
  opts: any
  name: string
  header: string
  length = 0
  floor: number

  constructor(opts: any = {}) {
    this.opts = opts || {}
    this.name = opts.name || ''
    this.header = opts.header || ''

    this.length = 0
    this.floor = this.header.length
  }
}

const showError = (message: string): void => {
  throw new CLIError(`${message}\nSee more help with --help`.red)
}

export const checkTarget = (target: string): void => {
  if (target === undefined) showError(ERRORS.NO_SPECIFY)
}

export const getFiles = (dirpath: string): any => {
  // -m option and markdown file
  if (/.md/.test(dirpath)) showError(ERRORS.WRONG_SPECIFY)

  try {
    const filteredFiles: fs.Dirent[] = fs.readdirSync(dirpath, { withFileTypes: true }).filter(item => /.md/.test(item.name))

    // null or undefined
    if (!filteredFiles) throw(ERRORS.NOT_FOUND_DIR)
    // empty array
    if (filteredFiles.length === 0) throw(ERRORS.NOT_FOUND_MARKDOWN)

    return filteredFiles!
  } catch (error) {
    if (/no such file or directory/.test(error)) showError(ERRORS.NOT_FOUND_DIR)
    showError(error)
  }
}

export const checkExpansion = (filename: string): string => {
  // specified file is not found
  if (!fs.existsSync(filename)) showError(ERRORS.NOT_FOUND_FILE)

  // wrong expansion specified
  if (path.extname(filename) !== '.md') showError(ERRORS.NOT_MARKDOWN)

  return filename
}

export const countCharacters = (filename: string): ICountCharacters => {
  const text = fs.readFileSync(filename, 'utf8')

  let currentSection = new Section()
  const lines: ILine[] = []
  const sections: ISection[] = [currentSection]
  const sectionFloors: ISection[] = [currentSection]

  const countUpAncestor = (section: ISection) => {
    for (let i = 0; i < section.floor; i++) {
      sectionFloors[i].length += section.length
    }
  }

  text.split(/\n/).forEach((text: string) => {
    const stripedText = text
      .replace(/\n+/g, '')
      .replace(/[\s\b ]/g, '')
      .replace(/^#+.+$/g, '')
      .replace(/^>+.+$/g, '')
      .replace(/^-/g, '')
      .replace(/^>/g, '')
      .replace(/`/g, '')
    const length = stripedText.length
    const headerMatch = text.match(/^ *(#+) *(.+)$/)

    if (headerMatch) {
      countUpAncestor(currentSection)

      currentSection = new Section({
        name: headerMatch[2],
        header: headerMatch[1]
      })
      sections.push(currentSection)
      sectionFloors[currentSection.floor] = currentSection
    }

    currentSection.length += length

    lines.push({
      length: length,
      text: text,
      stripedText: stripedText
    })
  })

  countUpAncestor(currentSection)

  return {
    lines: lines,
    sections: sections
  }
}
