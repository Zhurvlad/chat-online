import React, {useState} from "react";
import SmileOutlined from "@ant-design/icons/lib/icons/SmileOutlined";
import {Button, Input} from "antd";
import CameraOutlined from "@ant-design/icons/lib/icons/CameraOutlined";
import AudioOutlined from "@ant-design/icons/lib/icons/AudioOutlined";
import SendOutlined from "@ant-design/icons/lib/icons/SendOutlined";
import './Chatinput.scss'



const ChatInput = () => {
    const [value, setValue] =useState('')
    return (
        <div className="chat__dialog-input">
            <div className="chat-input">
                <div className="chat-input__smile-btn">
                    <Button type={'link'}   icon={<SmileOutlined  />}/>
                </div>
                <Input
                    onChange={e => setValue(e.target.value)}
                    size='large'
                    placeholder="Введите текст сообщения"/>
                <div className="chat-input__actions">
                    <Button type='link'  icon={<CameraOutlined />}/>

                    {value ?<Button type={'link'}   icon={<SendOutlined/>}/>  :
                        <Button type={'link'}    icon={<AudioOutlined />}/>}
                </div>
            </div>

        </div>
    )
}


export default ChatInput;