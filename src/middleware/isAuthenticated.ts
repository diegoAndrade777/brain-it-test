import jwt from 'jsonwebtoken'

export const isAuthenticated = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    throw new Error(
      'You must to send a valid Bearer token at headers authorization'
    )
  }

  let token = req.headers.authorization.split(' ')[1].trim()
  const secret = 'secret'

  if (token) {
    jwt.verify(JSON.parse(token), secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: err.message || 'Unexpected error at authenticate user.'
        })
      } else {
        next()
      }
    })
  } else {
    res.status(401).json({
      message: 'You must authenticate user!'
    })
  }
}
