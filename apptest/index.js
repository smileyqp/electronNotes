const app = require('app')
const BroserWindow = require('browser-window')

app.on('ready',function(){
    var mainWindow = new BroserWindow({
        width:800,
        height:600
    })
})