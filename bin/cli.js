#!/usr/bin/env node
"use strict"
const program = require('commander')
const util = require('./tools/util.js')

//find command
program
	.command('find [env]')
	.description('定位文件位置')
	.option('-f, --find <s>','定位文件位置')
	.action(function(env,options){
		require('./find')(options.find)
	})

//level command
program
	.command('level [env]')
	.description('限定检索的层级必须大于0,1为当前文件的层级')
	.option('-n, --level <s>','限定检索的层级')
	.action(function(env,options){
		require('./level')(options.level)
	})

program.parse(process.argv);
/**
 * 当用户没有输入的时候执行
 */
if (!program.args.length){
	util.con()
}
