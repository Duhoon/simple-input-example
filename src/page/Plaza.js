import Send from "../component/Send";
import Message from "../component/Message";
import {Fragment} from "react";

const Plaza = ({data, sendMessage, sendReply, removeMessage, updateMessage})=>{

    return (
        <div className="wrapper" aria-label="plaza">
            <div className="content-width">
                <div className="box-colored" aria-label="title">
                    <div className="p-4 text-xl text-center">
                    ZET
                    </div>
                </div>
                <div className="mt-2 content-width border-b-2 p-4">
                    <Send sendMessage={sendMessage}></Send>
                </div>
            </div>
            <div className="content-width">
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

export default Plaza;