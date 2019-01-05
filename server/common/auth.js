const jwt = require('jsonwebtoken')

module.exports.verifyPassword = (pwd, rightPwd) => {
  if (pwd === rightPwd) {
    return true
  } else {
    return false
  }
}

module.exports.getToken = (payload) => {
  return jwt.sign(payload, 'web-fourteen', { expiresIn: 604800 })
}

module.exports.verifyToken = (token) => {
  let payload
  jwt.verify(token, 'web-fourteen', (err, decoded) => {
    if (err) {
      payload = 'overdueToken'
    } else {
      payload = decoded
    }
  })
  return payload
}
