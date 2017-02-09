#!/usr/bin/env node
"use strict"
const program = require('commander')
const util = require('./tools/util.js')
program
	.command('find [env]')
	.description('定位文件位置')
	.option('-f, --find <s>','定位文件位置')
	.action(function(env,options){
		require('./find')(options.find)
	})

program.parse(process.argv);
/**
 * 当用户没有输入的时候执行
 */
if (!program.args.length){
	util.con()
}
