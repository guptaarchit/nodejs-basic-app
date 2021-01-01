const { workerData, parentPort } 
		= require('worker_threads') 

console.log('worker data: '
					+ workerData); 

parentPort.postMessage( 
	{ Name: workerData, status: 'Done' }) 
