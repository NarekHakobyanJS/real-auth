const jwt = require('jsonwebtoken')
const tokenModel = require('../models/TokenModel')
class TokenServices {
    generateToken(payload){
        const accessToken = jwt.sign(payload, '123', {expiresIn : '1d'})
        const refreshToken = jwt.sign(payload, '12', {expiresIn : '10m'})

        return {
            accessToken,
            refreshToken
        }

    }

    async saveToken(userId, refreshToken){
        const tokenData = await tokenModel.findOne({user : userId})
        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({user : userId, refreshToken})

        return token
    }
}

module.exports = new TokenServices()