import { Command, flags } from '@oclif/command'
import 'colors'
import myFlags from './flags'
import { countCharacters, checkExpansion } from './utils'
import { ILine, ISection } from './interfaces'

class Wcmd extends Command {
  static description = 'describe the command here'

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    simpleVersion: myFlags.version,
    line: myFlags.line,
    multiple: myFlags.multiple
  }

  static args = [{
    name: 'file',
    required: true,
    description: 'specified target file path'
  }]

  async run() {
    const {args, flags} = this.parse(Wcmd)
    console.log(args)

    const file = checkExpansion(args.file)
    const result = countCharacters(file)

    // command version only
    if (flags.simpleVersion) {
      this.log(`${myFlags.version.env}`)
      return
    }

    if (flags.line) {
      result.lines.forEach((line: ILine) => {
        console.log(
            '%s\t"%s"',
            ['(', line.length, ')'].join('').green,
            line.text
        )
      })
    } else {
      result.sections.forEach((section: ISection) => {
        console.log([
            (new Array(section.floor + 1)).join('  '),
            '-'.grey,
            (section.name || 'root'.grey),
            ['(', section.length, ')'].join('').green
        ].join(' '))
      })
    }
  }
}

export = Wcmd
