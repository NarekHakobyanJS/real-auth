const userServices = require('../services/UserServices')
class UserControllers {
    async registration(req, res, next){
        try {
            const {email, password} = req.body;
            const userData = await userServices.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge : 30 * 24 * 60 * 60 * 1000, httpOnly : true})
            return res.json(userData)
        } catch (error) {
            res.json(error)
        }
    }
    async login(req, res, next){

    }
    async logout(req, res, next){

    }
    async activate(req, res, next){

    }
    async refresh(req, res, next){

    }
    async getUsers(req, res, next){
        try {
            res.json("OK")
        } catch (error) {
            
        }
    }
}


module.exports = new UserControllers()