// const restify = require('restify')
// const port = 3000;
// const server = restify.createServer();
// server.get('/first', (req,res) => {
//     res.send('This is the first!')
// });
// server.post('/second/:here', (req,res) => {
//     let gotIt = req.params.here;
//     res.send(`This ${gotIt} is not correct!`)
// });
// server.listen(port, () => {
//     console.log('Server is listening!')
// });

// const http = require('http');
// http.createServer((request, response) => {
//     if((request.method === 'POST')&&(request.url === '/echo')){
//         //request.pipe(response);
//         let body = [];
//     request.on('data', (chunk) => {
//       body.push(chunk);
//       body.push(chunk);
//     }).on('end', () => {
//       body = Buffer.concat(body).toString();
//       response.end(body);
//     });
//     }else{
//         console.log('It\'s created!');
//         response.end("YES");
//     }
    
// }).listen(3000);

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let query = 'What is your name?\n'

// rl.question(query, (answer) => {
//   console.log(`Hello ${answer}!`);
  
//   rl.close();
// });
// console.log("You are too slow!");



const express = require('express')
const app = express();
const port = 3000;
app.get('/hi', (req,res) => {
    res.send('Hi bro!');
});
app.post('/say/:name', (req,res) => {
    let weReceived = req.params.name;
    res.send(`We just received ${weReceived} from you!`)
});
app.post('/say', (req,res) => {
    if((req.method === 'POST')&&(req.url === '/say')){
        //req.pipe(res);
        let body = [];
        let bodyString;
        req.on('data', (chunk) => {
            body.push(chunk);
            bodyString = body.toString;
        }).on('end', () => {
            
            body = Buffer.concat(body).toString();
            res.end(body);
        });
        
    }
});
app.listen(port, () => {
    console.log(`Example app is now listening on port ${port}!`)
});