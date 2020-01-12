import { ILine, ICountCharacters, ISection } from './interfaces'

export const countEachLines = (result: ICountCharacters, log: any): void => {
  result.lines.forEach((line: ILine) => {
    log(
      '%s\t"%s"',
      ['(', line.length, ')'].join('').green,
      line.text
    )
  })
}

export const countEachSections = (result: ICountCharacters, log: any): void => {
  result.sections.forEach((section: ISection) => {
    log([
      (new Array(section.floor + 1)).join('  '),
      '-'.grey,
      (section.name || 'total'.grey),
      ['(', section.length, ')'].join('').green
    ].join(' '))
  })
  log('\n')
}
