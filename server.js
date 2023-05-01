// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// const querystring = require('querystring');



// const server = http.createServer(function(req, res) { // req is the request coming from the browser; res is the response that is sent back to the browser
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query); // this is where the data comes from the browser; the name of the value
//   console.log(page);
//   console.log(params)
//   if (page == '/') {
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/api') {
//     if('userInput' in params){ // checks if value exists in side of a given parameter '(const params = querystring.parse(url.parse(req.url).query))'
//       if(palindromeCheck(params['userInput'])){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           status: "palindrome"
//         }
//         res.end(JSON.stringify(objToJson));
//       }
//       else{
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           status: "not-palindrome"
//         }
//         res.end(JSON.stringify(objToJson));
//       }
//     }  
//     else // error if there's nothing in the param const
//     {
//       res.writeHead(404)
//       const objToJson = {
//         status: "error"
//       }
//       res.end(JSON.stringify(objToJson));
//     }
//   }
//   else if (page == '/css/style.css'){
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main.js'){
//     fs.readFile('js/main.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//   }
// });

// server.listen(8000);

const express = require('express')
const app = express()
const PORT = 8000

app.use(express.static('public'))

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/style.css', (request, response)=>{
    response.sendFile(__dirname + '/style.css')
})

app.get('/api/:palindrome',(request,response)=>{ 
  const palindrome = request.params.palindrome.toLowerCase()
  let palindromeCheck = palindrome.toLowerCase().split('').reverse().join('') // checking if the object is or isn't a palindrome
    if(palindromeCheck == palindrome){ // creating objects with the status of 'palindrome' or not 'palindrome'
      const objToJson = {
        status: "palindrome"
      }
      response.end(JSON.stringify(objToJson))
    }else{
      const objToJson = {
        status: "not-palindrome"
      }
      response.end(JSON.stringify(objToJson));
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})