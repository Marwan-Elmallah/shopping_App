const { User } = require("../../database")
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");


class UserController {
    static async register(req, res) {
        const { name, email, password, level } = req.body
        const encrypted = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY_ENCRYPT).toString();
        const user = await User.create({ name, email, password: encrypted, level })
        return res.status(201).json({
            error: false,
            message: 'User created successfully',
            user
        })
    }

    static async login(req, res) {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({
                error: true,
                message: 'User not found'
            })
        }
        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY_ENCRYPT);
        const originalText = decrypted.toString(CryptoJS.enc.Utf8);
        if (originalText !== password) {
            return res.status(401).json({
                error: true,
                message: 'Invalid password'
            })
        }
        const token = jwt.sign({ user }, process.env.SECRET_KEY_JWT, { expiresIn: '1d' })
        return res.status(200).json({
            error: false,
            message: 'Login successfully',
            token
        })
    }

    static async getUser(req, res) {
        const { id } = req.params
        let user;
        if (id) {
            user = await User.findById(id)
        } else {
            user = await User.find({})
        }
        return res.status(200).json({
            error: false,
            message: 'User found successfully',
            user
        })
    }

}


module.exports = UserController