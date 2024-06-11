const jwt = require('jsonwebtoken');

const checkAuth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                error: true,
                message: 'Unauthorized'
            })
        }
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, SECRET_KEY_JWT)
        const user = await User.findById(decoded.user._id)
        if (!user) {
            return res.status(401).json({
                error: true,
                message: 'Unauthorized'
            })
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({
            error: true,
            message: 'Unauthorized',
            error
        })
    }
}
