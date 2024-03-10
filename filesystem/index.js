const fs = require("fs")

const content = fs.readFileSync("./file1.txt","utf-8")
console.log(content)

fs.readFile("./file1.txt","utf-8",((req,res)=>{
   if(req){
    console.log(req)
   }
   console.log(res)
}))


// write 

fs.writeFileSync("./text1.txt","Hello Text")

fs.writeFile("./text1.txt"," Hello write",{flag:"a"},(req)=>{
    if(req){
        console.log(req)
    }
    console.log("success")
})

// stream

const readableStream = fs.createReadStream("./file1.txt",{
    encoding:"utf-8"
})

const writeStream = fs.createWriteStream("./text1.txt")

readableStream.on("data",(chunk)=>{
console.log(chunk)
writeStream.write(chunk)
})