const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? '/index.html' : req.url
    console.log(req.url)
    let ext = path.extname(req.url)
    let content = 'text/html'
    switch (ext) {
        case '.css':
            content = 'text/css'
            break;
        case '.js':
            content = 'text/javascript'
            break
        case '.ico':
            content = 'image/x-icon'
            break;
    }
    console.log(content)
    fs.readFile(`./assets${filePath}`, (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Content-type': content })
        res.end(data)
    })
})
server.listen(3000, () => {
    console.log('listening at 127:0:0:1:3000')
})