const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, './css/global.css'), (err, global) => {
  if (err) {
    console.log('读取global.css失败')
    throw new Error(err)
  }
  let content = global.toString()
  fs.writeFile(
    path.join(__dirname, './lib/global-and-cover.css'),
    content,
    end => {
      console.log('end', end)
    }
  )
})
