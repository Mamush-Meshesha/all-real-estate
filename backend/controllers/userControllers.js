import User from "../models/userModels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const register = async (req, res) => {
    try {
        const { full_name, email, password, address, phone_number } = req.body
        const hashed_password = await bcrypt.hash(password, 10)
        const user = await User.create({
            full_name,
            email,
            password: hashed_password,
            address,
            phone_number
        })

        const existUser = await User.findOne({email})

        if (existUser) {
            return res.status(402).json("email alredy exist")
        }
        res.status(200).json(user)
    } catch (error) {
     console.log(error)   
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        
        if (!user ){
          return res.status(404).json({message: "user not found"});
        }

        const compare = await bcrypt.compare(password, user.password)

        if (!compare) {
            return res.status(404).json({message: "username/email or password incorrect"})
        }
        const secretkey = "mamushkey";
        const payload = {id: user._id, email: user.email}
        const tokens = jwt.sign(payload, secretkey, {expiresIn: '1h'});
       
                    res.status(200).json(tokens);

    } catch (error) {
        console.log(error)
    }
}

export  {register,login}