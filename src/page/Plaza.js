// Tools
import {useState, useEffect} from 'react';
import axios from "axios";

// Components
import Send from "../component/Send";
import Message from "../component/Message";

const Plaza = ({sendMessage})=>{
    const [data, setData] = useState([]);

    const serverHost =  "http://localhost:4000";

    const getMessages = ()=>{
        axios.get(serverHost)
        .then(result=>{
            setData(result.data);
        })
        .catch(err=>{
            return new Error(err);
        });
    }

    const clickMessage = (e)=>{
        if (e.target !== e.currentTarget) return;
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
                    <Send></Send>
                </div>
            </div>
            <div className="content-width">
                {data.map(message=>{
                    return (
                        <Message key={message._id} message={message}></Message>
                    )
                })} 
            </div>
      </div>
    )
}

export default Plaza;