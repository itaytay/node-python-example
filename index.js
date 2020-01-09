const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["./script.py", "one", "two", 3]);
pythonProcess.stdout.on('data', (data) => {
	console.log(data.toString())
})
console.log("done")
