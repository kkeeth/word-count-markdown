import { Command, flags } from '@oclif/command'
import 'colors'
import myFlags from './flags'
import {
  countCharacters,
  checkExpansion,
  getFiles,
  checkTarget
} from './utils'
import {
  countEachLines,
  countEachSections
} from './core'

class Wcmd extends Command {
  static description = 'Counts the number of characters in all files or individual markdown files in the specified directory.'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    simpleVersion: myFlags.version,
    line: myFlags.line,
    multiple: myFlags.multiple
  }

  static args = [{
    name: 'target',
    description: 'specified target directory path or filename'
  }]

  static examples = [
    `$ ${'wcmd'.green} README.md
- root ${'(807)'.green}
  - word-count-markdown(wcmd) ${'(481)'.green}
  - Usage ${'(220)'.green}
  - Commands ${'(34)'.green}
  - License ${'(72)'.green}
`
  ]

  async run() {
    const { args, flags } = this.parse(Wcmd)

    // command version only
    if (flags.simpleVersion) {
      this.log(`${myFlags.version.env}`)
      return
    }

    // no specified file or directory
    checkTarget(args.target)

    // count files in a directory
    if (flags.multiple) {
      const files = await getFiles(args.target)

      files.forEach(async item => {
        const file = await checkExpansion(`${args.target}/${item.name}`)
        const result = await countCharacters(file)
        countEachSections(result, this.log)
      })

    // count single file
    } else {
      const file = await checkExpansion(args.target)
      const result = await countCharacters(file)

      if (flags.line)
        countEachLines(result, this.log)
      else
        countEachSections(result, this.log)
    }
  }
}

export = Wcmd
