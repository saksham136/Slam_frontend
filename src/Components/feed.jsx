import "./feed.css"
import Share from "./Share"
import Post from "./Post"
import {Posts} from "../dummyData"

export default function feed() {
  return (
    <div className='feed'>
      <div className="feedaWrapper">
      <Share/>
      {Posts.map((p)=>(
       <Post  key={p.id} post={p}/>
      ))}
     
     
      
      </div>
    </div>
  )
};
