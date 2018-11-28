const fs = require('fs')
const path = require('path')

btnCreate = document.getElementById('btnCreate')
btnRead = document.getElementById('btnRead')
btnDelete = document.getElementById('btnDelete')
fileNmame = document.getElementById('fileName')
fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname,'Files')


//创建文件，并且向文件中写入数据
btnCreate.addEventListener('click',function(){
    let file = path.join(pathName,fileName.value)
    let contents = fileContents.value;
    fs.writeFile(file,contents,function(err){
        if(err){
            console.log(err)
        }
        console.log('the file was created')
    })
})


btnRead.addEventListener('click',function(){
    let file = path.join(pathName,fileName.value)
    fs.readFile(file,function(err,data){
        if(err){
            console.log(err)
        }
        fileContents.value = data;
        console.log('the file was read')
    })
})

btnDelete.addEventListener('click',function(){
    let file = path.join(pathName,fileName.value)
    fs.unlink(file,function(err,data){
        if(err){
            console.log(err)
        }
        fileName.value = '';
        fileContents.value = '';
        console.log('the file was delete')
    })
})



