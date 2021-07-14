import React from 'react'
import PropTypes from 'prop-types'

import './Avatar.scss'
import {GenerateAvatarFromHash} from "../../Utils/helpers";

const Avatar = ({user})=> {
    if (user.avatar) {
        return (
            <img
                src={user.avatar}
                alt={`Avatar &{user.fullname}`}/>
        )
    }else {
const {color, colorLighten} = (GenerateAvatarFromHash(user._id));
const firstChar = user.fullname[0].toUpperCase()
return <div style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96% )`}} className='avatar avatar--symbol'>
    {firstChar}
</div>
    }
};

Avatar.propTypes = {
    className:PropTypes.string
}

export default Avatar;