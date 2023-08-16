const User = require('../models/user')


const test = (req, res) => {
    res.json('test is working')
}

//Login endpoint
const loginUser = async (req, res) => {
    try {
        const {username, password} = req.body;

        //check if user exists
        const user = await User.findOne({username});
        if(!user) {
            return res.json({
                error: 'User Does not Exist'
            })
        }
        else{
            return res.json({
                error: 'User Exists'
            })
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    loginUser
}