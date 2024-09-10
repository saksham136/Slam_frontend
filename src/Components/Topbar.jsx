import "./Topbar.css"
import {Search , Person ,Chat ,Notifications }  from "@mui/icons-material"

const Topbar = () => {
  return (
   <div className="topbarContainer">
    <div className="topbarLeft">
        <span className="logo">SlamBook</span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar"> 
            <Search className="searchIcon"/>
            <input  placeholder="Search for friend, post or public" className="searchInput"/>
        </div>
    </div>
    <div className="topbarRight">
        <div className="topbarLinks">
           <div className="topbarLink">Homepage</div>
           <div className="topbarLink">TimeLine</div>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconbadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconbadge">2</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconbadge">1</span>
            </div>
            
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
   </div>
  )
}

export default Topbar
