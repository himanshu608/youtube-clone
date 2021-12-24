import React from 'react'
import './search.css'
import TuneIcon from '@mui/icons-material/Tune';
import Channelrow from './Channelrow';
import Videorow from './Videorow';
import { IconButton } from '@mui/material';
function Search() {
    return (
        <div className="search">
                <div className="search_header">
                    <IconButton>
                    <TuneIcon/>
                    </IconButton>
                    <h2>Filters</h2>
                    <hr></hr>
                </div>
                <div className="search_body">
                <div className="channel_row">
                        <Channelrow avatar={'https://yt3.ggpht.com/ytc/AKedOLTWc2ssaACXEEKgQYEwzO6rAo0S9N2gAqEXWlVY=s176-c-k-c0x00ffffff-no-rj-mo'} name={'Programmer'} sub={'2.45M'} video={136} desc={'its a nice video channel. we make contents sdsdsvskvslv sdvj sdvjskdv skd vjslkdvjsv sldskv sdvsdvsdhvsjhvsjdvh sdvhs dvhsd vjhsdjkv svh kdjvh skjvhskdjv '} />
                        <Channelrow avatar={'https://yt3.ggpht.com/ytc/AKedOLTWc2ssaACXEEKgQYEwzO6rAo0S9N2gAqEXWlVY=s176-c-k-c0x00ffffff-no-rj-mo'} name={'Programmer'} sub={'2.45M'} video={136} desc={'its a nice video channel'} />
                    </div>
                    <hr/>
                    <div className="video_row">
                        <Videorow image={'https://i.ytimg.com/an_webp/hq3yfQnllfQ/mqdefault_6s.webp?du=3000&sqp=CJjClo4G&rs=AOn4CLD2z7-zD-u0PYJVAuiwy5QOuiIg3g'} title={'Apple aa'} views={'4.3B'} date={'7 years ago'} channel={'Clever Genius'} desc={'it is a nice video channel fsdvsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddor children'} channelimg={'https://yt3.ggpht.com/ytc/AKedOLRjhhnAXcCJ4Q4P6EONz2F6_x6pd41korEV8qJRgg=s68-c-k-c0x00ffffff-no-rj'} />
                        <Videorow image={'https://i.ytimg.com/an_webp/hq3yfQnllfQ/mqdefault_6s.webp?du=3000&sqp=CJjClo4G&rs=AOn4CLD2z7-zD-u0PYJVAuiwy5QOuiIg3g'} title={'Apple aa'} views={'4.3B'} date={'7 years ago'} channel={'Clever Genius'} desc={'it is a nice video channel for children'} channelimg={'https://yt3.ggpht.com/ytc/AKedOLRjhhnAXcCJ4Q4P6EONz2F6_x6pd41korEV8qJRgg=s68-c-k-c0x00ffffff-no-rj'} />
                        <Videorow image={'https://i.ytimg.com/an_webp/hq3yfQnllfQ/mqdefault_6s.webp?du=3000&sqp=CJjClo4G&rs=AOn4CLD2z7-zD-u0PYJVAuiwy5QOuiIg3g'} title={'Apple aa'} views={'4.3B'} date={'7 years ago'} channel={'Clever Genius'} desc={'it is a nice video channel for children'} channelimg={'https://yt3.ggpht.com/ytc/AKedOLRjhhnAXcCJ4Q4P6EONz2F6_x6pd41korEV8qJRgg=s68-c-k-c0x00ffffff-no-rj'} />
                    </div>
                </div>
        </div>
    )
}

export default Search
