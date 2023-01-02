//import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
    console.log(process.env.ACCESS_TOKEN);
    console.log(id);
    return jwt.sign({ id }, process.env.ACCESS_TOKEN, {
		expiresIn: '10d',
	})
}

//dotenv.config();

//console.log(generateToken('haha'));