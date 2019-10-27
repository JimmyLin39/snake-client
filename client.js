const net = require('net')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.65',
    port: 50541
  })
  // interpret incoming data as text
  conn.setEncoding('utf8')
  conn.on('data', data => {
    console.log('Server say:', data)
  })
  return conn
}

module.exports = { connect }
