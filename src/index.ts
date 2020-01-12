import {Command, flags} from '@oclif/command'
import myFlags from './flags'

class Wcmd extends Command {
  static description = 'describe the command here'

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    simpleVersion: myFlags.version,
    line: myFlags.line
  }

  async run() {
    const {args, flags} = this.parse(Wcmd)

    // only use native console here
    flags.simpleVersion && console.log(myFlags.version.default)
  }
}

export = Wcmd
