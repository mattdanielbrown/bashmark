#!/usr/bin/env node
'use strict';
const meow = require('meow');
const bashmark = require('.');

const cli = meow(`
	Usage
	  $ bashmark [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ bashmark
	  unicorns & rainbows
	  $ bashmark ponies
	  ponies & rainbows
`, {
	flags: {
		foo: {
			type: 'boolean'
		}
	}
});

console.log(bashmark(cli.input[0] || 'unicorns'));
