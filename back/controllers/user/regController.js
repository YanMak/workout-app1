import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'

import { generateToken } from '../../helpers/generateToken.js'
// @desc    register user
// @route   Post api/users
// @access  public
export const registerUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    const isExistUser = await User.findOne({ email });
    if (isExistUser) {
        res.status(400);
        throw new Error('user with such email is already registered')
        //res.json(isExistUser);
    }

    const user = await User.create({ email, password });

    const token = generateToken(user._id);

    res.json({ user, token });

})