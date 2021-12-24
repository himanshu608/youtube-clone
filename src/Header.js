import React, { useState } from 'react'
import './header.css'
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'
function Header() {
    const [inputSearch,setInputSearch] = useState();

    return (
        <div className="header">
            <div className="header_left">
                <IconButton >
                    <MenuIcon />
                </IconButton>
                <Link to='/'><img src='https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg'></img></Link>
                
            </div>
            <div className="header_middle">
                <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} type="text" placeholder="Search"></input>
                <IconButton >
                    <Link to={`/search?q=${inputSearch}`}><SearchIcon /></Link>
                </IconButton>
            </div>
            <div className="header_right">
            <IconButton >
                    <VideoCallIcon />
                </IconButton>
                <IconButton >
                    <AppsIcon />
                </IconButton>
                <IconButton >
                    <NotificationsActiveIcon />
                </IconButton>
                <Avatar sx={{cursor:'pointer'}} />
            </div>
        </div>
    )
}

export default Header
