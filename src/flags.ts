import {flags} from '@oclif/command'

const FyFlags = {
  version: flags.boolean({
    char: 'V',
    description: 'show only command version',
    env: require('../package.json').version
  }),
  line: flags.boolean({
    char: 'l',
    description: 'show summary by line'
  }),
  multiple: flags.boolean({
    char: 'm',
    default: false,
    description: 'count all files in a directory'
  })
}

export default FyFlags
