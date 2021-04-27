// // 本文件代码最终会拆解开并放入backgeound文件下
// const { app, BrowserWindow } = require('electron')
// const path = require('path')

// function createWindow () {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, '../preload/index.js')
//     }
//   })

// //   win.loadFile('index.html')
//   win.loadUrl('http://127.0.0.1:3000')
// }

// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow()
//     }
//   })
// })

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })


console.log(99999)