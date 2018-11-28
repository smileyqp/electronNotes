const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

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

app.on('ready',function(){
    createWindow();

    const tempalte = [
        {
            label:'newMenue',
            submenu:[
                {label:'aaaaa',click:function(){console.log('click aaaa')}},
                {type:'separator'},//separator
                {label:'bbbbb'}
            ]           
        },{
            label:'help',
            click:function(){
                electron.shell.openExternal('http://www.baidu.com');
            }
        },{
            label:'edit',
            submenu:[
                {role:'undo'},
                {role:'redo'},
                {role:'separator'},
                {role:'cut'},
                {role:'copy'},
                {role:'paste'},
                {role:'pasteandmatchstyle'},
                {role:'delete'},
                {role:'selectall'}
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(tempalte);//template is a combination of arrays and objects
    Menu.setApplicationMenu(menu);//behave this basic menue
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
      createWindow()
    }
    });
  