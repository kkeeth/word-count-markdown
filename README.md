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
1.0.4

$ wcmd (-v|--version|version)
wcmd/1.0.4 darwin-x64 node-v12.13.1

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
  count a single file

  $ wcmd README.md
  - total (807)
     - word-count-markdown(wcmd) (481)
     - Usage (220)
     - Commands (34)
     - License (72)

  count multiple files

  $ wcmd /path/to/directory -m
  - total (2625)
    - chapter1 (2625)
      - title1 (678)
      - title2 (1947)
        - 1. section1 (817)
        - 2. section2 (640)
        - 3. section3 (309)
        - 4. section4 (157)

  - total (408)
    - chapter1 (408)

  - total (1182)
    - chapter1 (1182)
      - title1 (395)
      - title2 (301)
```

`Note`
* The `-l` and `-m` options cannot be used at the same time.
* There is no point in specifying the `-m` option and the directory path.

# License

[MIT](https://github.com/kkeeth/word-count-markdown/blob/master/LICENSE)

# Others

Please write a new [issues](https://github.com/kkeeth/word-count-markdown/issues)! Please send me [PRs](https://github.com/kkeeth/word-count-markdown/pulls)!
