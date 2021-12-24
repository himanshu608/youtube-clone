import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Siderow from './Siderow';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function Sidebar() {
    return (
        <div className="sidebar">
            <Siderow title={"Home"} Logo={HomeIcon} isSelected />
            <Siderow title={"Trending"} Logo={WhatshotIcon} />
            <Siderow title={"Explore"} Logo={ExploreIcon} />
            <hr/>
            <Siderow title={"Subscription"} Logo={SubscriptionsIcon} />
            <Siderow title={"Library"} Logo={VideoLibraryIcon} />
            <Siderow title={"History"} Logo={HistoryIcon} />
            <Siderow title={"Liked videos"} Logo={ThumbUpIcon} />
            <Siderow title={"Watch Later"} Logo={AccessTimeIcon} />
            <hr/>
            <Siderow title={"Settings"} Logo={SettingsIcon} />
            <Siderow title={"More"} Logo={ArrowDropDownIcon} />
        </div>
    )
}

export default Sidebar
