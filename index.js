const http = require("http")
const fs = require("fs")
const PORT = 9000

const server = http.createServer((req, res) => {
    const path = (req.url === "/") ? `/index.html` : req.url
    console.log(req.url);
    fs.readFile(`.${path}`, (error, data) => {
        if(error) {
            res.write("Error: File not found")
        } else {
            res.write(data)
        }
        res.end();
    });
});

server.listen(PORT)