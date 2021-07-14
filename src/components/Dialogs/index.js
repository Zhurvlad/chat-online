import React from "react";
import classNames from 'classnames'
import  orderBy from 'lodash/orderBy'

import './Dialogs.scss'
import {DialogItem} from "../index";


const Dialogs = ({items, userId}) => (
        <div className="dialogs">
                {orderBy(items, ['updated_at'], ['desc']).map (item =>(
                            <DialogItem key={item._id}
                                        isMe={item.user._id === userId}
                                {...item}/>
                        ))}
        </div>
)

export default Dialogs