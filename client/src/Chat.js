import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import "./Chat.css"

function Chat() {

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage =(e) => {
        e.preventDefault();
        console.log ("you typed >>>" , input)
    }


    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>Room</h3>
                    <p>Last seen ..</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            <div className="chat_body">
                <p className={`chat_message ${ true && "chat_receiver"}`}><span className="chat_name">Mianmian</span> Hey you <span className="chat_timestamp">3:52pm</span></p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} onClick={sendMessage} type="text" placeholder="Type a message"/>
                        <button type="submit">Send a message</button>
                </form>
            <MicIcon />
            </div>
        </div>
    )
}

export default Chat
