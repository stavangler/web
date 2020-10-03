const pkg = require('./package.json')
const os = require('os')
const { spawn } = require('child_process')

const image = pkg["docker-repository"] + ':' + pkg.version

const child = process.argv[2] === 'push' ?
  spawn('docker', ['push', image]) :
  spawn('docker', ['build', '-t', image, '.'])

child.stdout.setEncoding('utf8')
child.stdout.on('data', (chunk) => {
  console.log(chunk)
})

child.stderr.setEncoding('utf8')
child.stderr.on('data', (chunk) => {
  console.error(chunk)
})

