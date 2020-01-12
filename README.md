# word-count-markdown(wcmd)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wcmd.svg)](https://npmjs.org/package/wcmd)
[![Downloads/week](https://img.shields.io/npm/dw/wcmd.svg)](https://npmjs.org/package/wcmd)
![node](https://img.shields.io/badge/node-%3E%3D%2010.0.0-brightgreen.svg?style=social)
[![License](https://img.shields.io/npm/l/wcmd.svg)](https://github.com/kkeeth/word-count-markdown/blob/master/LICENSE)

<!-- toc -->
* [wcmd](#wcmd)
* [Usage](#usage)
* [Commands](#commands)
* [License](#license)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g wcmd

$ wcmd README.md
- root (807)
    - word-count-markdown(wcmd) (481)
    - Usage (220)
    - Commands (34)
    - License (72)

$ wcmd (-v|--version|version)
wcmd/0.0.1 darwin-x64 node-v12.13.1

$ wcmd (-V|--simpleVersion)
0.0.1

$ wcmd (-h|--help)
USAGE
  $ wcmd TARGET

ARGUMENTS
  TARGET  specified target directory path or filename

OPTIONS
  -V, --simpleVersion  show only command version
  -h, --help           show CLI help
  -l, --line           show summary by line
  -m, --multiple       count all files in a directory
  -v, --version        show CLI version

EXAMPLE
  $ wcmd README.md
  - root (807)
     - word-count-markdown(wcmd) (481)
     - Usage (220)
     - Commands (34)
     - License (72)
```
<!-- usagestop -->

`Note` the `-l` and `-m` options cannot be used at the same time.

# License

[MIT](https://github.com/kkeeth/word-count-markdown/blob/master/LICENSE)

# Others

Please write a new [issues](https://github.com/kkeeth/word-count-markdown/issues)! Please send me [PRs](https://github.com/kkeeth/word-count-markdown/pulls)!