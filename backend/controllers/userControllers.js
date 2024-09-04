import User from "../models/userModels";

const register = async (req, res) => {
    try {
        const  {full_name,email,password,address,phone_number} = req.body
        const user = await User.create({
            full_name,
            email,
            password,
            address,
            phone_number
        })

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json("server error")
     console.log(error)   
    }
}

export default register