import Send from "../component/Send";
import Message from "../component/Message";

const Plaza = ({data, sendMessage, removeMessage, updateMessage})=>{

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
                    return <Message message={message} key={message._id} removeMessage={removeMessage} updateMessage={updateMessage}></Message>
                })} 
            </div>
      </div>
    )
}

export default Plaza;