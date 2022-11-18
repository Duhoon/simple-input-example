import {useState} from "react";
import Send from "./Send";
import Dropdown from "./Dropdown";


const Message = (props)=>{
    const [content, setContent] = useState(props.message.content)
    const [openReply, setOpenReply] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isLike, setIsLike] = useState(false);
    
    const {message} = props;

    const openReplyHandler = ()=>{
        setOpenReply(!openReply);
    }

    const clickDropdownHandler = ()=>{
        setOpenDropdown(!openDropdown);
    }

    const clickLikeHandler = ()=>{
        setIsLike(!isLike);
    }

    const clickSendUpdateHandler = ()=>{
        props.updateMessage({content, messageId: message._id});
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
    
    // const createdAt = new Date(message.createdAt);
    // message.createdAt = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`

    return (        
        
        <div className="message p-4" aria-label="message">
            <div className="message-header flex w-full">
            <div className="profile-wrapper shrink-0 w-20 h-20 rounded-full relative overflow-hidden">
                <img className="absolute" src="https://bit.ly/3UJrYQz"/>
            </div>

            <div className="message-right shrink ml-4 w-full flex justify-between">
                <div className="message-user-info flex flex-col justify-center">
                <p className="font-bold">{message.userId}</p>
                <p className="text-slate-400">{message.createdAt}</p>
                </div>
                <div className="message-config flex flex-col justify-center">
                    <button aria-label="message-config-button" onClick={clickDropdownHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </button>
                    {openDropdown ? <Dropdown messageId={message._id} removeMessage={props.removeMessage} activateUpdate={activateUpdate}/> : <></>}
                </div>
            </div>
            </div> {/* Message Header */}

        {message.image ? 
            <div className="image-wrapper my-3 w-full h-[300px] rounded-xl border-radius-full relative overflow-hidden">
                <img className="absolute" src={message.image}/>
            </div> 
            : <></>
        }

            <div className="message-body py-4">
            {isUpdate ?
            <div>
                <div aria-label="update">
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
                {message.content}
            </p>
            }
            </div> {/* Message Body */}

            <div className="message-tail flex justify-evenly w-full">
            <div>
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
            </div>
            <div>
                <button onClick={openReplyHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            </div> {/* Message Tail */}
            {openReply ? <Send></Send> : <></>}
        </div>
    )
}


export default Message ;