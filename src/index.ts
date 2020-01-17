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
import { Dirent } from 'fs'

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
- total ${'(807)'.green}
  - word-count-markdown(wcmd) ${'(481)'.green}
  - Usage ${'(220)'.green}
  - Commands ${'(34)'.green}
  - License ${'(72)'.green}

$ ${'wcmd'.green} /path/to/directory -m
- total ${'(2468)'.green}
  - chapter1 ${'(2468)'.green}
    - title1 ${'(678)'.green}
    - title2 ${'(1790)'.green}
      - 1. section1 ${'(817)'.green}
      - 2. section2 ${'(640)'.green}
      - 3. section3 ${'(309)'.green}

- total ${'(408)'.green}
  - chapter1 ${'(408)'.green}

${'Note'.bgMagenta}
  - The ${'-l'.magenta} and ${'-m'.magenta} options cannot be used at the same time.
  - There is no point in specifying the ${'-m'.magenta} option and the directory path.
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
      const files: Dirent[] = await getFiles(args.target)

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
