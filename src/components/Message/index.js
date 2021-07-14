import React from "react";
import './Message.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import readedSvg from '../../assets/readed.svg'
import noReadedSvg from '../../assets/noreaded.svg'
import {Time, IconRead} from "../"
import {convertCurrentTime} from "../../Utils/helpers";


const Message = ({avatar, text, date, user, isMe, isReaded, attachments, isTyping}) => (
    <div className={classNames('message', {"message--isme": isMe,
        "message--is-typing":isTyping,
        "message--image" : attachments && attachments.length === 1
    })}>
        <div className='message__content'>
           <IconRead isMe={isMe} isReaded={isReaded}/>
            <div className='message__avatar'>
                <img src={avatar} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__info">
                {(text ||
                isTyping) && (<div className='message__bubble'>
                    {text && <p className='message__text'>
                        {text}
                    </p>}
                    {isTyping && (
                        <div className="message__typing">
                            <span className="message__circle scaling"/>
                            <span className="message__circle scaling"/>
                            <span className="message__circle scaling"/>
                        </div>)}
                </div>)}
                <div className="message__attachments">
                    {attachments &&
                    attachments.map(item => (
                        <div className="message__attachments-item">
                            <img src={item.url} alt={item.filename}/>
                        </div>
                    ))
                    }
                </div>
                {date &&<Time/>}


            </div>
        </div>
    </div>
)


Message.defaultProps = {
user: {}
}

Message.propTypes = {
avatar: PropTypes.string,
text: PropTypes.string,
date: PropTypes.string,
user: PropTypes.object,
attachments: PropTypes.array,
    isTyping: PropTypes.bool
}


export default Message