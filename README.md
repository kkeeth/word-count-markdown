# word-count-markdown(wcmd)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wcmd.svg)](https://npmjs.org/package/wcmd)
[![Downloads/week](https://img.shields.io/npm/dw/wcmd.svg)](https://npmjs.org/package/wcmd)
![node](https://img.shields.io/badge/node-%3E%3D%2010.0.0-brightgreen.svg?style=social)
[![License](https://img.shields.io/npm/l/wcmd.svg)](https://github.com/kkeeth/word-count-markdown/blob/master/LICENSE)

<!-- toc -->
* [word-count-markdown(wcmd)](#word-count-markdownwcmd)
* [Usage](#usage)
* [License](#license)
* [Others](#others)
<!-- tocstop -->

# Usage
```sh-session
$ npm install -g wcmd

$ wcmd (-V|simpleVersion)
wcmd/1.0.2 darwin-x64 node-v12.13.1

$ wcmd (-v|--version|version)
1.0.2

$ wcmd --help
USAGE
  $ wcmd [TARGET]

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

`Note` the `-l` and `-m` options cannot be used at the same time.

# License

[MIT](https://github.com/kkeeth/word-count-markdown/blob/master/LICENSE)

# Others

Please write a new [issues](https://github.com/kkeeth/word-count-markdown/issues)! Please send me [PRs](https://github.com/kkeeth/word-count-markdown/pulls)!
