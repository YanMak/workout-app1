import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

// @desc    Get user profile
// @route   Get api/users/profile
// @access  private
export const getUserProfile = asyncHandler( async(req, res) => {
    /*const user = {
        name: 'Yan',
        age: '777'
    }
    res.status(200).json(user);*/
    //res.send('Hello profile page')
    //res.status(200).json({res_user: res.user, answer: 'here it is'})

    res.status(200).json(res.user);
    return;// to solve ERR_HTTP_HEADERS_SENT: Cannot set headers after they are sent to the client

    // or we can refresh user from db
    const user = await User.findById(res.user._id).select('-password');
    res.status(200).json(user);
})