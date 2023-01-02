import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'

export const protect = asyncHandler( async (req, res, next) => {
    let token;

    if (req.headers.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.decode(token, process.env.ACCESS_TOKEN);

        //test
        //res.json({decoded});
        //return;

        const userFound = await User.findById(decoded.id).select('-password')

        //test
        //res.json({userFound});
        
        if (userFound) {
            //console.log(`userFound: ${userFound}`);
            res.user = userFound;
            next()
        }
        else {
            res.status('401');
            throw new Error('not authorized, token doesnt work!')
        }
            
    }
    
    if (!token) {
        throw new Error('not authorized, without token');
    }

    //return;

})