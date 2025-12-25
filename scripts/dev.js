const { spawn } = require('child_process')
const net = require('net')

function findFreePort(startPort = 3000) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    
    server.listen(startPort, () => {
      const port = server.address().port
      server.close(() => resolve(port))
    })
    
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findFreePort(startPort + 1).then(resolve).catch(reject)
      } else {
        reject(err)
      }
    })
  })
}

findFreePort()
  .then((port) => {
    console.log(`Starting Next.js on port ${port}...`)
    const next = spawn('npx', ['next', 'dev', '-p', port.toString()], {
      stdio: 'inherit',
      shell: true,
    })
    
    process.on('SIGINT', () => {
      next.kill('SIGINT')
      process.exit()
    })
  })
  .catch((err) => {
    console.error('Failed to find free port:', err)
    process.exit(1)
  })

