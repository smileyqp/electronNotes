const openBtn = document.getElementById('openBtn')
const shell = require('electron').shell

openBtn.addEventListener('click',function(event){
    shell.showItemInFolder('/home/yqp')//打开文件夹或者文件
    shell.openItem('/home/yq/Pictures/Screenshot from 2018-11-23 18-08-29.png')//打开文件
    shell.openExternal('http://www.baidu.com')
})