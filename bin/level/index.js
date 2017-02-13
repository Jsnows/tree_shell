"use strict"

const fs = require('fs')
const chalk = require('chalk')
const util = require('../tools/util.js')
const shelljs = require('shelljs/global')

function main(nLevel){
	util.exec(0,nLevel)
}

module.exports = main