const http =require("http")
const logs=require('fs')
const Url =require('url')

const server =http.createServer((req,res)=>{
    const log=`${req.url} , ${new Date().toLocaleDateString()} , ${req.method}, New logs created \n`
    const myUrl=Url.parse(req.url,true)  
    console.log(myUrl)  
    logs.appendFile("./logs.txt",log,(err,data)=>{
        // res.end("Hi How may help you ")
        switch(myUrl.pathname){
            case '/':res.end("Hi How may help you ,Your are on home page")
            break;
            case '/about':
                const username=myUrl.query.myname
                res.end(`Hi How may help you ${username},Your are on about page`)
            break;
            case '/contact':
                if(req.method ==='GET'){
                    res.end(`Hi How may help you,Your are on contact page`)
                }
                else if(req.method==='POST'){
                    res.end("user account sucess")
                }
            break;
            default:res.end('404 not found')
        }

    })

    
})

const port= 8005 || 8000

server.listen(port,()=>{
    console.log(`Server Started on ${port} `)
})