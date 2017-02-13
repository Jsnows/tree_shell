
<h1 align="center">
	<br>	
  <img width="360" src="http://ohybvxndm.bkt.clouddn.com/tree_LOGO.jpg" alt="chalk">
	<br>
	<br>
</h1>

# tree_shell
tree_shell是用nodeJS实现的一个shell命令，可以对当前目录下的所有文件以及子文件进行遍历，并且通过文件树的形式展现。

# Install

方法一：
```
$ git clone 

$ cd 进入tree_shell所在目录
```
执行下面命令(建立一个软链接,也可以写进Path里)
```
$ npm install

$ npm link

$ tree
```
方法二：
```
$ npm install tree_shell -g

$ tree  
```
#Usage
```
$ tree 
```
参数find -f 加文件名可以找出该文件并且显示路径
```
$ tree find -f dirName
```
参数level -n 加所要限制的层级可以限制检索的层级
```
$ tree level -n 3	//表示只向下检索两个层级
```

