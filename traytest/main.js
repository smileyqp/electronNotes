console.log('main process working');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Tray = electron.Tray;
const iconPath = path.join(__dirname,'logo.jpg');
const Menu = electron.Menu;


let win;
let tray = null;

app.on('ready',function(){
    tray = new Tray(iconPath)

    let template = [
        {
            label:'Audio',
            submenu:[
                {
                    label:'low',
                    type:'radio',
                    checked:true
                },{
                    label:'high',
                    type:'radio'
                }
            ]
        },{
            label:'Video',
            submenu:[
                {
                    label:'128×720',
                    type:'radio',
                    checked:true
                },{
                    label:'1920×1080',
                    type:'radio'
                }
            ]
        }
    ]
    const ctxMenu = Menu.buildFromTemplate(template)

});

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
         
    }
    });
  