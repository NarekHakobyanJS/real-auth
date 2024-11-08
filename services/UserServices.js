const UserModel = require('../models/UserModel')
const bcryptjs = require('bcryptjs')
const uuid = require('uuid')
const tokenServices = require('./TokenServices')
const mailService = require('./MailServices')
const UserDto = require('../dtos/user-dto')
class UserServices {
    async registration(email, password) {
        const candidante = await UserModel.findOne({ email })

        if (candidante) {
            throw new Error("nman email ov User arden ka")
        }
        const hashPassword = await bcryptjs.hash(password, 10)
        // ete gmbac create nayi 

        const activationLink = uuid.v4()
        const user = await UserModel.create({ email, password : hashPassword, activationLink })

        await mailService.sendActivationMail(email, activationLink)
        const userDto = new UserDto(user)
        const tokens = tokenServices.generateToken({...userDto})
        await tokenServices.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user : userDto
        }
    }
}

module.exports = new UserServices()