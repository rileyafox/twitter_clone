import React from "react";
import "./Post.css";
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({displayName,username,verified,text,image,avatar,comments,shares,likes}) {
    return (
    <div className = "post">
        <div className = "post__avatar">
            <Avatar src={avatar}  />        
        </div>
        <div className = "post__body">
            <div className = "post__header">
                <div className = "post__headerText">
                    <h3>
                        {displayName} {""}
                        <span className = "post_headerSpecial"> 
                            {verified && <VerifiedUserIcon className="post__badge" />} @
                            {username}
                        </span>
                    </h3>
                </div>
                <div className = "post__headerDescription">
                    <p>{text}</p>
                </div>
                <img src= {image} alt= "" />
                <div className = "post__footer">
                    
                    {/* take a look at this */} 
                    <span className ="post__chatSpan"> <ChatBubbleOutlineIcon className = "post__chatStyling" fontSize="small"   />
                        <span className = "post__chatFormating">{comments}</span>
                    </span> 

                    <span> <RepeatIcon className = "post__repeatStyling" fontSize="small" />
                        <span className = "post__repeatFormating">{shares}</span>
                    </span>

                    <span> <FavoriteBorderIcon className = "post__favoriteStyling" fontSize="small" />
                        <span className = "post__favoriteFormating">{likes}</span>
                    </span>
                    <PublishIcon fontSize="small" />
                </div>
           </div> 

        </div>
    </div>

)
}

export default Post;