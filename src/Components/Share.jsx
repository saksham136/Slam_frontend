import "./share.css"
import {PermMedia ,Label,Room,EmojiEmotions} from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
     <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
            <input placeholder="What's in your mind Safak?" className="shareInput"/>
        </div>
     <hr className="shareHr"/>
     <div className="shareBottom">
           <div className="shareOptions">
            
            <div className="shareOption">
               <PermMedia htmlColor="tomato" ClassName="shareIcon"/>
                <span id="one" className="shareOptionText">Photo or Video</span>
            </div>

            <div className="shareOption">
             <Label  htmlColor="blue" ClassName="shareIcon"/>
             <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
            <Room  htmlColor="green" ClassName="shareIcon"/>
            <span className="shareOptionText">Location</span>
           </div>

            <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" ClassName="shareIcon"/>
            <span className="shareOptionText">Feelings</span>
         
            </div>
         </div>
      <button className="shareButton">Share</button>


     </div>

       
     </div>
    </div>
  )
}
