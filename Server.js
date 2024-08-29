// const http = require('http');
// const fs = require('fs').promises;
// const fsStream = require('fs');
// const os = require('os');
// const options = {
//     encoding: 'utf8',
//     mode: 0o644, // Owner can read/write, others can only read
//     flag: 'w'   // Write mode ,
//                 //a for append , 
//                 //add x with w or a it will give error if file already exists
//                 // simple a or w will create file if it doesn't exists
//   };

//   function ReadFile() 
//   {
//     fs.readFile('example.text','utf8',(error,data)=>{
//         if(error)
//         {
//             console.error("Error : "+error.message);
//             return;   
//         }
        
//         console.log("Data : "+data);
    
//         });
    
//   } 

//   async function ReadOrWriteFile() {
//     try {
//       // Try to read the file
//       const data = await fs.readFile('example.txt', 'utf8');
//       console.log("Data: " + data);
//     } catch (error) {
//       // Handle the error if the file doesn't exist
//       if (error.code === 'ENOENT') {
//         console.error("File not found, creating a new one...");
  
//         try {
//           const options = { encoding: 'utf8', mode: 0o644, flag: 'w' };
//           await fs.writeFile('example.txt', 'This is file data.', options);
//           console.log("File created successfully");
//         } catch (writeError) {
//           console.error("Error writing file: " + writeError.message);
//         }
//       } else {
//         console.error("Error reading file: " + error.message);
//       }
//     }
//   }
  
//   ReadOrWriteFile();

 
// const server = http.createServer((request,response) =>
// {
//     response.statusCode = 200; //Successfull

//     response.setHeader('Content-Type','text/plain'); //As our content is only text not img, etc
//     response.end('This is our First Server\n');
// });

// server.listen(3000,'localhost',() =>{
//     console.log('Server is running on port 3000');

// })



// // // Create a writable stream
// // const writableStream = fsStream.createWriteStream('output.txt');

// // writableStream.write('Hello, world!\n');
// // writableStream.write('Writing some more data...\n');

// // // End the stream
// // writableStream.end('Stream ended.');

// // writableStream.on('finish', () => {
// //   console.log('All data written to file.');
// // });

// // writableStream.on('error', (error) => {
// //   console.error('Stream error:', error);
// // });


// // Create a readable stream
// const readableStream = fsStream.createReadStream('example.txt', { encoding: 'utf8' });

// readableStream.on('data', (chunk) => {
//   console.log('Received chunk:',chunk ," sdfassa");
// });

// readableStream.on('end', () => {
//   console.log('Stream ended.');
// });

// readableStream.on('error', (error) => {
//   console.error('Stream error:', error);
// });




// console.log('System Information:');
// console.log('-------------------');
// console.log(`Architecture: ${os.arch()}`);
// console.log(`Platform: ${os.platform()}`);
// console.log(`CPU Count: ${os.cpus().length}`);
// console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
// console.log(`Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
// console.log(`Home Directory: ${os.homedir()}`);
// console.log(`Hostname: ${os.hostname()}`);
// console.log(`Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);
// console.log(`Temporary Directory: ${os.tmpdir()}`);
// console.log(`User Info:`, os.userInfo());

import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';



dotenv.config();
let port  = process.env.PORT;

const app = express();

// Use Morgan for logging requests
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// Morgan provides several predefined log formats that you can use:

// dev: Concise output colored by response status for development use.
// combined: Standard Apache combined log output, which includes detailed information like remote user, request time, status code, and more.
// common: Standard Apache common log output, which is less detailed than combined.
// short: Shorter than common, but more detailed than dev.
// tiny: The minimal output.
//logger() shows all logs like all states of apis callled each time
app.get('/get', (req, res) => { // here / is route like /get , /post in this case route is localhost:5000/get Hello world will be printed
  res.send('Hello World!');
});

// app.use(express.json());
app.listen(port,()=>{ console.log('server is started',port)});