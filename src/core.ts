import { ILine, ICountCharacters, ISection } from './interfaces'

export const countEachLines = (result: ICountCharacters ): void => {
  result.lines.forEach((line: ILine) => {
    console.log(
        '%s\t"%s"',
        ['(', line.length, ')'].join('').green,
        line.text
    )
  })
}

export const countEachSections = (result: ICountCharacters): void => {
  result.sections.forEach((section: ISection) => {
    console.log([
        (new Array(section.floor + 1)).join('  '),
        '-'.grey,
        (section.name || 'root'.grey),
        ['(', section.length, ')'].join('').green
    ].join(' '))
  })
}
