import {flags} from '@oclif/command'

const version = flags.boolean({
  char: 'V',
  description: 'show only command version',
  env: require('../package.json').version
})

const line = flags.boolean({
  char: 'l',
  description: 'show summary by line'
})

export default {
  version: version,
  line: line
}
