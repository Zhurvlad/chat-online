import React, {useState, useRef, useEffect} from "react";
import './AudioMessage.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import {Time, IconRead} from "../"
import waveSvg from '../../assets/wave.svg'
import pauseSvg from '../../assets/pause.svg'
import playSvg from '../../assets/play.svg'
import {convertCurrentTime} from "../../Utils/helpers";

const MessageAudio = (audio) => {
    const audioElem = useRef(null)
        const [isPlay, setIsPlay] = useState(false);
        const [progress, setProgress] = useState(0);
        const [currentTime, setCurrentTime] = useState(0);

        const togglePlay = () => {

            if (!isPlay) {
                audioElem.current.play();
            } else {
                audioElem.current.pause();
            }
            audioElem.current.addEventListener('timeupdate', () => {
                const duration = (audioElem.current && audioElem.current.duration) || 0;
                setCurrentTime(audioElem.current.currentTime);
                setProgress(((audioElem.current.currentTime / duration) * 100) + (duration * 0.5))
            });
        }

        useEffect(() => {
            audioElem.current.volume = '0.1';
            audioElem.current.addEventListener(
                'playing',
                () => {
                    setIsPlay(true)
                },
                false
            );
            audioElem.current.addEventListener(
                'ended',
                () => {
                    setIsPlay(false)
                    setProgress(0)
                    setCurrentTime(0)
                },
                false
            )
            audioElem.current.addEventListener(
                'pause',
                () => {
                    setIsPlay(false)
                },
                false
            )
        })

        return <div className="message__audio">
            <audio ref={audioElem} src={audio} preload='auto'>

            </audio>
            <div className="message__audio-progress" style={{width: progress + '%', height: '100%'}}/>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlay
                            ? (<img src={pauseSvg} alt='pause'/>)
                            : (<img src={playSvg} alt='play'/>)}
                    </button>
                </div>
                <div className="message__audio-wave"><img src={waveSvg} alt="wave svg"/></div>
                <span className="message__audio-duration">
                                {currentTime}
                            </span>
            </div>
        </div>
}

const AudioMessage = ({avatar, text, date, user, isMe, isReaded, attachments, isTyping, audio,}) => {

    return (
        <div className={classNames('message', {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            'message--is-audio': audio,
            "message--image": attachments && attachments.length === 1,
        })}>
            <div className='message__content'>
                <IconRead isMe={isMe} isReaded={isReaded}/>
                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>
                <div className="message__info">
                    {(audio || text ||
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
                        {audio && <MessageAudio/> }
                    </div>)}

                    {attachments && <div className="message__attachments">
                        {attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename}/>
                            </div>
                        ))}
                    </div>}

                    {date && <Time/>}


                </div>
            </div>
        </div>

    )
}


AudioMessage.defaultProps = {
    user: {}
}

AudioMessage.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string
}


export default AudioMessage