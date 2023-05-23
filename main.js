const { app, BrowserWindow } = require('electron')
try {
  require('electron-reloader')(module)
} catch (_) {}

const createWindow = () => {
  try {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })

    win.loadFile('index.html')

    win.webContents.openDevTools()

    win.on('close', () => {

    })
  } catch (error) {
    console.error('Error creating window:', error)
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
