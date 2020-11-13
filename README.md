# bashmark [![Build Status](https://travis-ci.com/mattdanielbrown/bashmark.svg?branch=master)](https://travis-ci.com/github/mattdanielbrown/bashmark)

> A bookmarking system (sort of) for the commandline. Save locations (paths) and easily get back to them later.

## Install

```
$ npm install bashmark
```

## Usage

```js
const bashmark = require('bashmark');

bashmark('unicorns');
//=> 'unicorns & rainbows'
```

## API

### bashmark(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.

## CLI

```
$ npm install --global bashmark
```

```
$ bashmark --help

  Usage
    bashmark [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ bashmark
    unicorns & rainbows
    $ bashmark ponies
    ponies & rainbows
```
