const User = require("../models/User");
const bcrypt = require('bcrypt');

class UserController {
    async findAll(req, res) {

        // For note: const data = await User.findAll({attributes: ['id', 'name', 'email'], include: {association: 'roles', attributes: ['id', 'description']}})
        
        const data = await User.findAll({attributes: ['id', 'name', 'email']});
        const total = await User.count();

        return res.status(200).send({ records: data, total });
    }

    async findById(req, res) {
        const { id } = req.params;
        const data = await User.findByPk(id, {select: ['id', 'name', 'email']});

        if (!data) {
            return res.status(404).send({ message: "User not found" });
        }

        return res.status(200).send(data);
    }

    async createNewUser(req, res) {
        try {
            const { name, email, password } = req.body;
            if (!email || !password) {
                return res.status(400).send({ message: "Email and password are mandatory" });
            }

            const user = await User.findOne({ where: { email: email } });
            if (user) {
                return res.status(400).send({ message: "User already registered" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                email,
                name,
                password: hashedPassword
            })

            return res.status(201).send(newUser);
        } catch (error) {
            console.log(error.message)
            return res.status(400).send({ message: "User could not be created!" });
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { email, name, password } = req.body;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }

            const data = await user.update({
                email,
                name,
                password
            })

            return res.status(200).send(data);
        } catch (error) {
            console.log(error.message)
            return res.status(400).send({ message: "User could not be updated!" });
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }

            await user.destroy()

            return res.status(204).send();
        } catch (error) {
            console.log(error.message)
            return res.status(400).send({ message: "User could not be deleted!" });
        }
    }
}

module.exports = new UserController()