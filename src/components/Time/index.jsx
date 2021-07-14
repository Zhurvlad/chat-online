import React from "react";
import ruLocale from "date-fns/locale/ru";
import formatDistanceToNow from "date-fns/formatDistanceToNow";


const Time = (props) => {
    return(
        <span className='message__date'>
                        {formatDistanceToNow(new Date, {addSuffix: true, locale: ruLocale})}
                    </span>
    )
}
export default Time;