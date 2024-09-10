import "./profile.css"
import Topbar from "../../Components/Topbar.jsx"
import Rightbar from "../../Components/Rightbar.jsx"
import Sidebar from "../../Components/Sidebar.jsx"
import Feed from "../../Components/feed.jsx"

export default function Profile() {
  return (
<>

<Topbar/>
  <div className="profile">
  <Sidebar/>
  <div className="profileRight">
    <div className="profileRightTop">

     <div className="profileCover">
    <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
    <img src="assets/post/7.jpeg" alt="" className="profileUserImg" />
    </div>
   
   <div className="profileInfo">
    <h4 className="profileInfoName">Saksham Singh</h4>
    <span className="profileInfoDesc">it is my bio</span>
   </div>

    </div>
    <div className="profileRightBottom">
    <Feed/>
    <Rightbar profile />
    </div>

  </div>
</div>

 </>
  )
}
