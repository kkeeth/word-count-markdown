import * as fs from 'fs'
import * as path from 'path'
import { CLIError } from '@oclif/errors'
import { ISection, ICountCharacters } from './interfaces'

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

export const checkTarget = (target: string) => {
  if (target === undefined)
  throw new CLIError('No specified any file or directory\nSee more help with --help'.red)
}

export const getFiles = (dirpath: string): fs.Dirent[] => {
  try {
    return fs.readdirSync(dirpath, { withFileTypes: true })
  } catch (error) {
    throw new CLIError('The specified directory does not exist'.red)
  }
}

export const checkExpansion = (filename: string): any => {
  // specified file is not found
  if (!fs.existsSync(filename))
    throw new CLIError('A file you specified is not found\nSee more help with --help'.red)

  // wrong expantion specified
  if (path.extname(filename) !== '.md')
    throw new CLIError('A file other than .md is specified\nSee more help with --help'.red)

  return filename
}

export const countCharacters = (filename: string): ICountCharacters => {
  const text = fs.readFileSync(filename, 'utf8')

  let currentSection = new Section()
  const lines: any[] = []
  const sections = [currentSection]
  const sectionFloors = [currentSection]

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
