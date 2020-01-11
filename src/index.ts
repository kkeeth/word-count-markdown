import {Command, flags} from '@oclif/command'

class Wcmd extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Wcmd)

    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/index.ts`)
    if (args.file) {
      this.log(`you input --file: ${args.file}`)
    }
  }
}

export = Wcmd
