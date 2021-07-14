import React from "react";
import './ShadowBlock.scss'
import classNames from 'classnames'



const ShadowBlock = ({children, className}) => {
    return (
    <div className={classNames('ShadowBlock', className)}> {children}</div>
    )
}

export default ShadowBlock