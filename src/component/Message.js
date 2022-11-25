// Tools
import {useState} from "react";
import {Link} from "react-router-dom";

// Components
import Send from "./Send";
import Dropdown from "./Dropdown";

// Controller
import controller from "../controller";

const datetimeToString = (time)=>{
    const messageTime = new Date(time);

    return messageTime.toLocaleString("kr");
}

const Message = (props)=>{
    const [content, setContent] = useState(props.message.content)
    const [openReply, setOpenReply] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isLike, setIsLike] = useState(false);
    
    const {message} = props;
    const isReply = props.isReply || false;

    const toggleReplyHandler = ()=>{
        setOpenReply(!openReply);
    }

    const clickDropdownHandler = ()=>{
        setOpenDropdown(!openDropdown);
    }

    const clickLikeHandler = ()=>{
        setIsLike(!isLike);
    }

    const clickSendUpdateHandler = ()=>{
        controller.updateMessage({content, messageId: message._id});
        deactivateUpdate();
    }

    const activateUpdate = ()=>{
        setIsUpdate(true);
        clickDropdownHandler();
    }

    const deactivateUpdate = ()=>{
        setIsUpdate(false);
    }
    
    const contentChangeHandler = (e)=>{
        setContent(e.target.value);
    }
    
    // deprecated
    const clickMessage = (e)=>{
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target !== e.currentTarget) e.preventDefault();
    }
    

    return (        
        
        <div className="message p-4" aria-label="message">
            <div className="message-header flex w-full">
            <div className="profile-wrapper shrink-0 w-20 h-20 rounded-full relative overflow-hidden">
                <img className="absolute" src="https://bit.ly/3UJrYQz"/>
            </div>

            <div className="message-right shrink ml-4 w-full flex justify-between">
                <div className="message-user-info flex flex-col justify-center">
                <p className="font-bold">{message.userId}</p>
                <p className="text-slate-400">{datetimeToString(message.createdAt)}</p>
                </div>
                <div className="message-config flex flex-col justify-center">
                    <button aria-label="message-config-button" onClick={clickDropdownHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </button>
                    {openDropdown ? <Dropdown messageId={message._id} removeMessage={controller.removeMessage} activateUpdate={activateUpdate}/> : <></>}
                </div>
            </div>
            </div> {/* Message Header */}

        {message.image ? 
            <div className="image-wrapper my-3 w-full h-[300px] rounded-xl border-radius-full relative overflow-hidden">
                <img className="absolute" src={message.image}/>
            </div> 
            : <></>
        }

            <Link className="message-body block py-4" to={"/detail/"+message._id}>
        {isUpdate ?
            <div>
                <div className="box-update" aria-label="update">
                    <textarea className="update-textarea w-full ring ring-fuchsia-300" 
                        rows="5" 
                        value={content} 
                        placeholder="내용을 입력하세요."
                        onChange={contentChangeHandler}  
                    >
                </textarea>
                </div>
                <div aria-label="update-button-wrapper" className="py-2 flex justify-end">
                    <button className="btn-primary mr-2" onClick={deactivateUpdate}>취소</button>
                    <button className="btn-primary" onClick={clickSendUpdateHandler}>수정</button>
                </div>
            </div>
            :
            <p className="">
                {isReply? <span className="font-bold">↳</span>: null }
                {message.content}
            </p>
        }
            </Link> {/* Message Body */}

            <div className="message-tail flex mb-2 justify-evenly w-full">
                <div className="message-btn flex shrink-0">
                    <button onClick={clickLikeHandler}>
                    { isLike ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    }
                    </button>
                    <span className="message-btn ml-2 pt-[3px]">5K</span>
                </div>
                <div className="flex shrink-0">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </button>
                    <span className="message-btn ml-2 pt-[3px]">659</span>
                </div>
            { !isReply ?
                <div className="shrink-0">
                    <button onClick={toggleReplyHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            :
                <></>           
            } 
            </div> {/* Message Tail */}
        {openReply ?
            <Send
                messageId={message._id} 
                closeReplyHandler={toggleReplyHandler}>
            </Send> 
            : <></>}
        </div>
    )
}


export default Message ;