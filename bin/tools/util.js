'use strict'

const shelljs = require('shelljs/global')
const fs = require('fs')
const chalk = require('chalk')

exports.con = (dName) => {
	var a = "|  "
	var b = "|--"
	var checkNum = 1
	var bg = false 		//知否显示红色
	//将文件名打印出来num：文件的层数 dirName：文件的名称
	function consoleName(num,dirName){
		//true就是文件夹 false就是文件
		let str = ''
		if(num !== 1){
			for(let i = 0 ; i < num - 1 ; i++){
				str += a
			}
		}else{
			str += b
		}
		if(dirName == dName){
			let dirAddress = ' '+JSON.stringify(pwd())
			console.log(chalk.yellow(str+dName+dirAddress))
		}
		if(num == 1){
			console.log(chalk.green(str+dirName))	
		}else{
			console.log(chalk.green(str+b+dirName))
		}
	}

	function loop(){
		if(dName){
			bg = true
		}
		if(checkNum < 1){
			return false
		}
		ls().forEach(function(file){
			var statInfo = fs.statSync(file)
			if(!statInfo.isFile()){
				consoleName(checkNum,file,bg)
				cd(file)
				checkNum += 1
				loop()
			}else{
				consoleName(checkNum,file,bg)	
			}
		})
		cd('..')
		checkNum -= 1
	}
	loop()
}


