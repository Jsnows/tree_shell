'use strict'

const shelljs = require('shelljs/global')
const fs = require('fs')
const chalk = require('chalk')

// exports.con = (dName,nLevel) => {
// 	var a = "|  "
// 	var b = "|--"
// 	var checkNum = 1
// 	var bg = false 		//知否显示红色

// 	if(nLevel <= 0 ){
// 		console.log(chalk.red("error: level must more then 0"))
// 		return 
// 	}

// 	//将文件名打印出来 num：文件的层数 dirName：文件的名称
// 	function consoleName(num,dirName){
// 		//true就是文件夹 false就是文件
// 		let str = ''
// 		if(num !== 1){
// 			for(let i = 0 ; i < num - 1 ; i++){
// 				str += a
// 			}
// 		}else{
// 			str += b
// 		}
// 		if(dirName == dName){
// 			if(dName == 0) return
// 			let dirAddress = ' '+JSON.stringify(pwd())
// 			console.log(chalk.yellow(str+dName+dirAddress))
// 		}
// 		if(num == 1){
// 			console.log(chalk.green(str+dirName))	
// 		}else{
// 			console.log(chalk.green(str+b+dirName))
// 		}
// 	}

// 	function loop(){
// 		if(dName){
// 			bg = true
// 		}
// 		if(checkNum < 1){
// 			return false
// 		}
// 		ls().forEach(function(file){
// 			var statInfo = fs.statSync(file)
// 			if(!statInfo.isFile()){
// 				consoleName(checkNum,file)
// 				if(checkNum != nLevel){
// 					cd(file)	
// 					checkNum += 1
// 					loop()
// 				}
// 			}else{
// 				consoleName(checkNum,file)	
// 			}
// 		})
// 		cd('..')
// 		checkNum -= 1
// 	}
// 	loop()
// }



function SearchDir (dName,nLevel){
	this.a = "|  "
	this.b = "|--"
	this.checkNum = 1
	this.bg = false
	this.dName = dName || null
	this.nLevel = nLevel || 0 		
}
SearchDir.prototype.consoleName = function(num,dirName){
	//true就是文件夹 false就是文件
	let str = ''
	if(num !== 1){
		for(let i = 0 ; i < num - 1 ; i++){
			str += this.a
		}
	}else{
		str += this.b
	}
	if(dirName == this.dName){
		if(this.dName == 0) return
		let dirAddress = ' '+JSON.stringify(pwd())
		console.log(chalk.yellow(str+this.dName+dirAddress))
	}
	if(num == 1){
		console.log(chalk.green(str+dirName))	
	}else{
		console.log(chalk.green(str+this.b+dirName))
	}
}
SearchDir.prototype.loop = function() {
	let self = this
	if(this.dName){
		this.bg = true
	}
	if(this.checkNum < 1){
		return false
	}
	ls().forEach(function(file){
		var statInfo = fs.statSync(file)
		if(!statInfo.isFile()){
			self.consoleName(self.checkNum,file)
			if(self.checkNum != self.nLevel){
				cd(file)	
				self.checkNum += 1
				self.loop()
			}
		}else{
			self.consoleName(self.checkNum,file)	
		}
	})
	cd('..')
	this.checkNum -= 1
}

exports.exec = (dName,nLevel) => {
	let s = new SearchDir(dName,nLevel)
	s.loop()
}
