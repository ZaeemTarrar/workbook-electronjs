process.on('message', (msg) => {
  console.log('Process CPU: ', msg.data)
})
