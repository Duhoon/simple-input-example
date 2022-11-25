// Tools
import {useState, useEffect} from 'react';
import axios from "axios";

// Components
import Send from "../component/Send";
import Message from "../component/Message";

const Plaza = (props)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const serverHost =  "http://localhost:4000";

    const getMessages = ()=>{
        setIsLoading(true);
        axios.get(serverHost)
        .then(result=>{
            setData(result.data);
            setIsLoading(false);
        })
        .catch(err=>{
            return new Error(err);
        });
    }

    const getMessageSended = (message)=>{
        setData([message].concat(data));
    }

    useEffect(()=>{
        getMessages();
    },[])

    return (
        <div className="wrapper" aria-label="plaza">
            <div className="content-width">
                <div className="box-colored" aria-label="title">
                    <div className="p-4 text-xl text-center">ZET</div>
                </div>
                <div className="mt-2 content-width border-b-2 p-4">
                    <Send getMessageSended={getMessageSended}></Send>
                </div>
            </div>
            <div className="content-width">
                {data.map(message=>{
                    return <Message key={message._id} message={message}></Message>
                })}

                {isLoading ?
                    <div className="flex justify-center mt-4">
                        <img src="https://i.gifer.com/ZKZg.gif" width="50px" height="50px"/>
                    </div>
                : <></>}
            </div>
      </div>
    )
}

export default Plaza;