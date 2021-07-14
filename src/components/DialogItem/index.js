import React from "react";
import classNames from 'classnames'
import format from "date-fns/format";

import {Avatar, IconRead, Time} from "../index";
import {isToday} from "date-fns";

const getMessageTime = (updated_at) => {
    if (isToday(new Date)) {
        return format (new Date, 'HH:mm')
    } else {
        format (new Date, 'MM:dd:yyyy')
    }
}

const DialogItem = ({user, message, unreaded,isMe, updated_at, text }) => {
    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online' : user.isOnline})}>
            <div className="dialogs__item-avatar">
                <Avatar user={user}/>
                {/* <img src={user.avatar} alt={`${user.fullname}avatar`}/>
                <img src="https://img-gorod.ru/upload/iblock/f53/f53b3cfd184480884952fd72c287d9ec.jpg"/>
            */}</div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>
                        {user.fullname}
                    </b>
                    <span>
                        {getMessageTime(updated_at)}
                    {/*<Time  data={message.updated_at}/>*/}
                </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                    {text}
                    </p>
                    {isMe && <IconRead isMe={true} isReaded={false}/>}
                    {unreaded > 0 && <div className="dialogs__item-unread-count">
                        {unreaded >9 ? "+9" : unreaded}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default DialogItem