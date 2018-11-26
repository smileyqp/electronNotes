console.log('main process working');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win,dimWindow,colorWindow,framelessWindow;
let parentWin,childWin;

function createWindow(){
    // win = new BrowserWindow();
    // dimWindow = new BrowserWindow({width:400,height:400,maxWidth:500,maxHeight:700});
    // colorWindow = new BrowserWindow({backgroundColor:'#228b22'});
    // framelessWindow = new BrowserWindow({backgroundColor:'#800000',frame:false});
    //modal为true是指在child之后才能运行parent;show为false是指在event之后才加载default
    parentWin = new BrowserWindow({title:'parent'});
    childWin = new BrowserWindow({show:false,parent:parentWin,modal:true,title:'child'});
    childWin.loadURL('http://www.baidu.com');
    childWin.once('ready-to-show',() => {
        childWin.show();
    });
}

app.on('ready',createWindow);

app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
    });
  
app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow()
    }
    });
  