console.log('main process working');
console.log('from main.js');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let winone,wintwo;

function createWindow(){
    winone = new BrowserWindow();
    wintwo = new BrowserWindow();
    winone.loadURL(url.format({
        pathname:path.join(__dirname,'one.html'),
        protocol:'file',
        slashes:true
    }));
    wintwo.loadURL(url.format({
        pathname:path.join(__dirname,'two.html'),
        protocol:'file',
        slashes:true
    }));


    winone.webContents.openDevTools();
    wintwo.webContents.openDevTools();

    winone.on('close',() => {
        win = null;
    });
    wintwo.on('close',() => {
        win = null;
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
  