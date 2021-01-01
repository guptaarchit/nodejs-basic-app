const fs = require('fs');

fs.appendFile('./message.txt', 'Hello content!\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
fs.readFile("./message.txt", (err, data) => {
    console.log(data.toString());
    console.log("Done with read");
})
fs.unlink('./message.txt',function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
const cp = require('child_process');
const ls = cp.spawn('ls', ['-lh', '/home/archit/Desktop']);
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

cp.exec('dir | find /c /v ""', (error, stdout, stderr) => { 
if (error) { 
	console.error(`exec error: ${error}`); 
	return; 
} 
console.log(`stdout: No. of directories = ${stdout}`); 
if (stderr!= "") 
console.error(`stderr: ${stderr}`); 
}); 

const child = cp.execFile('node', ['runner.js'], 
		(error, stdout, stderr) => { 
if (error) { 
	throw error; 
} 
console.log(stdout); 
}); 
var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventHandler = (a)=> {
  setTimeout(() => {
    console.log(`this happens asynchronously${a}`);
  },1000);
  console.log("before **");
}
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream', '!!');
console.log("between **");
const { Worker } = require('worker_threads') 

function runService(workerData) { 
	return new Promise((resolve, reject) => { 
		const worker = new Worker( 
				'./worker.js', { workerData }); 
		worker.on('message', resolve); 
		worker.on('error', reject); 
		worker.on('exit', (code) => { 
			if (code !== 0) 
				reject(new Error( 
`Stopped the Worker Thread with the exit code: ${code}`)); 
		}) 
	}) 
} 

async function run() { 
    const result = await runService('Archit') 
	console.log(result); 
} 

run().catch(err => console.error(err)) 

console.log("worker threads implementation")
