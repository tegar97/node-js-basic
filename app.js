const http = require('http')

const server = http.createServer((req,res) => {


    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My first page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>')
        res.write('</html>')
        return   res.end()  /// res.write akan error jika ditulis dibawah res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write(`<body><h1>HELO FROM THE URL ${req.url} </h1></body>`)
    res.write('</html>')
  
})

server.listen(3000)