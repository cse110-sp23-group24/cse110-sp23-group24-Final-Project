const { app, BrowserWindow } = require('electron')
const path = require('path')
if(process.env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname);
}


const createWindow = () => {
  try {
    const win = new BrowserWindow({
      width: 940,
      height: 600,
      minWidth: 940,
      minHeight: 600,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        enableRemoteModule: false,
        worldSafeExecuteJavaScript: true,
        sandbox: false,
        preload: path.join(__dirname, 'preload.js'),
      },
      type: "toolbar",
      show: false, // added this line
    })

    win.loadFile('index.html');
    if (process.env.NODE_ENV === 'development') win.webContents.openDevTools();

    win.once('ready-to-show', () => {
      win.show();
      win.focus();
    });

  } catch (error) {
    console.error('Error creating window:', error)
  }
}


app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
