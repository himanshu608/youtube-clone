import { Avatar, Button } from '@mui/material'
import React from 'react'
import './channelrow.css'
function Channelrow({avatar,name,sub,video,desc}) {
    return (
        <div className="channelrow">
            <div className="avatar">
            <Avatar src={avatar} sx={{width:'150px',height:'150px'}}/>
            </div>
            <div className="channel_row_body">
                <h2>{name}</h2>
                <h5>{`${sub} subscribers`}<section>{`${video} videos`}</section></h5>
                <h5>{desc}</h5>
            </div>
           <div className="button_container">
           <Button variant='contained' color="secondary">Subscribe</Button>
           </div>
        </div>
    )
}

export default Channelrow
