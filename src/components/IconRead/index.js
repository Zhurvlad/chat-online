import React from "react";
import readedSvg from "../../assets/readed.svg";
import noReadedSvg from "../../assets/noreaded.svg";
import '../Message/Message.scss';
import PropTypes from "prop-types";
import Message from "../Message";

const IconRead = (isReaded, isMe) => {
    return (
            isMe &&
            (isReaded ? (
                <img
                    className="message__icon-readed"
                    src={readedSvg}
                    alt="Readed icon"
                />
            ) : (
                <img
                    className="message__icon-readed message__icon-readed--no"
                    src={noReadedSvg}
                    alt="No readed icon"
                />
            ))
    )
}
export default IconRead;

IconRead.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}