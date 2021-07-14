import React from "react";
import {ChatInput, Dialogs, Status} from "../../components";


import {GenerateAvatarFromHash} from '../../Utils/helpers'

import "./Home.scss"
import Message from "../../components/Message";
import AudioMessage from "../../components/AudioMessage";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import FormOutlined from "@ant-design/icons/lib/icons/FormOutlined";
import {Button, Input} from 'antd'
import EllipsisOutlined from "@ant-design/icons/lib/icons/EllipsisOutlined";
import SmileOutlined from "@ant-design/icons/lib/icons/SmileOutlined";
import CameraOutlined from "@ant-design/icons/lib/icons/CameraOutlined";

console.log(GenerateAvatarFromHash('bc9f1a6e746ae7db064654c3c89999e7'))

const Home = () => {
    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">

                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined/>
                            <span> Список диалогов</span>
                        </div>
                        <Button type='link'  icon={<FormOutlined/>}/>
                    </div>

                    <div className="chat__sidebar-search">
                        <Input.Search
                            placeholder="Поиск среди контактов"
                            onSearch={value => console.log(value)}
                            style={{width: 300}}
                        />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs userId={0}
                                 items={[

                                 ]
                                 }/>
                    </div>
                </div>
                <div className="chat__dialog">

                    <div className="chat__dialog-header">
                        <div/>
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">
                                Александр Пушкин
                            </b>
                            <div className="chat__dialog-header-status">
                                <Status online/>
                            </div>
                        </div>
                        <Button type = 'link'  shape='circle' icon={<EllipsisOutlined/>}/>
                    </div>
                    <div className="chat__dialog-messages">
                        <AudioMessage
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text=''
                            audio='https://notificationsounds.com/soundfiles/941e1aaaba585b952b62c14a3a175a61/file-62_frog.mp3'
                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            text='Салам пополам'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=2&nature,water"
                                },
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=3&nature,water"
                                },
                            ]}

                        />
                        <Message avatar='https://sun9-58.userapi.com/c853424/v853424391/1e3b42/FcReoDcxC9k.jpg'
                                 text='Салам пополам'
                                 isMe={true}
                                 isReaded={false}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            isReaded={false}
                            isTyping={true}

                        />
                        <Message
                            avatar='https://sun9-43.userapi.com/_HNZv8tkly5W-me9IxSU4uPW92OE4-CpJjd6qQ/wrENvXPMFjw.jpg'
                            attachments={[
                                {
                                    filename: "image.jpg",
                                    url: "https://source.unsplash.com/100x100/?randome=1&nature,water"
                                }
                            ]}

                        />
                    </div>
                    <ChatInput/>
                </div>
            </div>
        </section>
    )
}


export default Home