const electron = require("electron");
const ipc = electron.ipcRenderer

const asyncBtn = document.getElementById('asyncBtn');
const syncBtn = document.getElementById('syncBtn');

asyncBtn.addEventListener('click',function(){
    console.log('async msg 1')
    ipc.send('async-message') 
    console.log('async msg 2')
})

syncBtn.addEventListener('click',function(){
    console.log('sync msg 1')
    const reply = ipc.sendSync('sync-message')
    console.log(reply)
    console.log('sync msg 2')
})

ipc.on('async-reply',function(event,arg){
    console.log(arg)
})

//从index.js创建browserWindow
const BroserWindow = electron.remote.BrowserWindow
let window = new BroserWindow()
window.loadURL('http://github.com')