import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { RequestExtended } from '../interfaces/auth.interface'

const checkJwt = async (
  req: RequestExtended,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = jwtByUser.split(' ').pop()
    const isUser = await verifyToken(`${jwt}`)
    console.log('Is Ok: ', isUser)

    if (!isUser) {
      res.status(401)
      res.send('NOT_VALID_SESSION')
    } else {
      req.user = isUser
      console.log({ jwtByUser })
      next()
    }
  } catch (e) {
    console.log({ e })

    res.status(400)
    res.send('NOT_VALID_SESSION')
  }
}

export { checkJwt }
