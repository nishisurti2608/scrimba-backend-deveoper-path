import http from 'http'

const PORT = 8888;

const server = http.createServer((req,res) => {
res.end("Hello from the server")
})

server.listen(PORT,()=>{
    console.log(`server is running on Port ${PORT}`)
})