const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Role = require('../models/Role');
const Permission = require('../models/Permission');

class LoginController {

    async login(req, res){
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).send('Email and password are mandatory');
            }
    
            //Search for the user by email
            const user = await User.findOne({
                where: { email: email },
                include: [{
                    model: Role, as: 'roles', through: { attributes: [] },
                    include: [{ model: Permission, as: 'permissions', through: { attributes: [] } }]
                }],
            })
    
            //Verify if the user exists
            if (!user) {
                return res.status(404).send('User not found');
            }
    
            //Compare the provided password with the stored hashed password
            const match = await bcrypt.compare(password, user.password);
    
            if (!match) {
                return res.status(401).send('Invalid password');
            }
    
            //Generate the JWT token
            const payload = { id: user.id, email: user.email, roles: user.roles }; 
            const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: "1d" });
            return res.status(200).json({ token });
    
        } catch (error) {
            console.error(error);
            return res.status(500).send('Failed to login');
        }
    }
}

module.exports = new LoginController()