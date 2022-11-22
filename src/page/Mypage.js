import "./Mypage.css";
import Send from "../component/Send";
import Message from "../component/Message";
import { Fragment } from "react";

const Mypage = ({data, sendMessage, sendReply, removeMessage, updateMessage})=>{
    return (
        <div className="wrapper">
            <div className="content-width">
                <div className="mypage-bg">
                    <img src="https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"></img>
                </div>
            </div>
            <div className="profile-wrapper relative mb-12">
                <div className="mypage-profile w-36 h-36 rounded-full absolute overflow-hidden">
                    <img className="absolute" src="https://bit.ly/3UJrYQz"/>
                </div>
            </div>
            <div className="introduction">
                <p className="userId">@JejuAlrock</p>
                <p className="explain">
                    안녕하세요 처음 인사드리도록 하겠습니다. 저는 제주알락입니다.
                </p>
            </div>
            <div className="contents">
                <div className="mb-4 py-4 px-4 border-b-2">
                    <Send sendMessage={sendMessage}></Send>
                </div>
        {data.map(message=>{
            return (
                <Fragment key={message._id}>
                    <Message message={message}  sendMessage={sendReply} removeMessage={removeMessage} updateMessage={updateMessage}>
                    </Message>
                    {message.reply.map(reply=>{return <Message message={reply} key={reply._id} isReply={true}></Message>})}
                </Fragment>
            )
        })}
            </div>
        </div>
    )
}

export default Mypage;