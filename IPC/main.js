console.log('main process working');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const ipc = electron.ipcMain
const dialog = electron.dialog

let win;

function createWindow(){
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }));


    win.webContents.openDevTools();
    win.on('close',() => {
        win = null;
    });
}
//用于和index.js等进行交互
ipc.on('open-erroe-dialog',function(event){
    dialog.showErrorBox('An error message','Demo of an error message')//接受index.js那边发出的消息
    event.sender.send('opened-error-dialog','main process opened the error dialog')//用于向index.js发消息
})


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
  