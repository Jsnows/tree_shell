"use strict"

const fs = require('fs')
const chalk = require('chalk')
const util = require('../tools/util.js')
const shelljs = require('shelljs/global')

function main(dirName){
	util.exec(dirName)
}

module.exports = main