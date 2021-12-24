import { Avatar } from '@mui/material'
import React from 'react'
import './videocard.css'

function Videocard({image,title,channel,views,time,channelimage}) {
    return (
        <div className="videocard">
            <img src={image} alt="4s54s"></img>
            <div className="video_info">
                <Avatar src={channelimage} alt="989"/>
                <div className="video_info_main">
                    <h4>{title}</h4>
                    <h5>{channel}</h5>
                    <h6>{views}<section>{` - ${time}`}</section></h6>
                </div>
            </div>
        </div>
    )
}

export default Videocard
