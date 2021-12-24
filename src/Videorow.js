import { Avatar } from '@mui/material'
import React from 'react'
import './videorow.css'
function Videorow({image, title,views,date,channel,desc,channelimg}) {
    return (
        <div className="videorow">
                <img src={image} alt="6565"></img>
                <div className="videorow_text">
                    <h2>{title}</h2>
                    <h5>{`${views} views`}<section>{` - ${date}`}</section></h5>
                    <div className="channelinfo">
                        <Avatar src={channelimg} />
                        <h5>{channel}</h5>
                    </div>
                    <h5>{desc}</h5>
                </div>
        </div>
    )
}

export default Videorow
