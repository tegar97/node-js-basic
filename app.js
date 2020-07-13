const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => {


    const url = req.url;
    const method = req.method
    if(url === '/') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
        res.write('</html>')
        return   res.end()  /// res.write akan error jika ditulis dibawah res.end()
    }
    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt','dummy')
        res.statusCode = 302;
        res.setHeader('location','/')
        return res.end()

    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write(`<body><h1>HELO FROM THE URL ${req.url} </h1></body>`)
    res.write('</html>')
  
})

server.listen(3000)