console.log("from one.js");

const BroserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowBtn = document.getElementById('newWindowBtn');
newWindowBtn.addEventListener('click',function(event){ 
    let winthree = new BroserWindow();
    winthree.loadURL(url.format({
        pathname:path.join(__dirname,'three.html'),
        protocol:'file',
        slashes:true
    }));
    winthree.webContents.openDevTools();   
})