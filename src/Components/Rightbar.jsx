import "./rightbar.css";
import {Users} from "../dummyData"
import Online from "../Components/Online"

export default function Rightbar({profile}) {
  
  const HomeRightbar=()=>{
    return(
    <>
        <div className="birthdayContainer">
        <img src="assets/gift.png" alt="" className="birthdayImg" />
        <span className="birthdaytext">
          <b>Pola Foster</b>and <b>3 other friends</b> have a birthday today 
        </span>
      </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <div className="rightbarTitle"><b>Online Freinds</b></div>
        <ul className="rightbarFriendList">
          {Users.map((u)=> (<Online key={u.id} frnd={u}/>))}
        </ul>
  
    </>
    )
  }
  

    const ProfileRightbar= () => { 
      return (
        <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">

      <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarValue">New York</span>
        </div>


        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarValue">Madrid</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarValue">Single</span>
        </div>
      </div>

      <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John sinha</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Joe</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Jor</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">Johcarr</span>
          </div>
        </div>

      
      </>
      );
    }

  return (
    <div className="rightbar">
     <div className="rightbarWrapper">
         {profile ?<ProfileRightbar/> :<HomeRightbar/>}
      </div>
    </div>
   
  )
}
