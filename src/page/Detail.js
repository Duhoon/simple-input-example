// Tools
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


// CSS
import "./Detail.css";

// Components
import Message from "../component/Message";

const Detail = (props)=>{
    // Data State
    const [data, setData] = useState([]);
    // Client URL params
    const params = useParams();
    const serverHost = "http://localhost:4000";

    // Navigator
    const navigator = useNavigate();

    // Request data to Server
    const getDetail= async ()=>{
        const result = await axios.get(`${serverHost}/detail/${params._id}`)
        .then(result=>result)
        .catch(err=>err)
        
        if(result.status === 200) setData(result.data);
        else return;
    }

    // Page Rendering
    useEffect(()=>{
        getDetail();
    },[params])

    const clickBackHandler = ()=>{
        navigator(-1);
    }

    return (
        <div className="wrapper" aria-label="plaza">
            <div className="content-width">
                <button className="box-colored" aria-label="title" onClick={clickBackHandler}>
                    <div className="p-4 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        <span className="font-bold">Go Back</span>
                    </div>
                </button>
            </div>
            <div className="content-width">
                {
                    data.map((message)=>{
                        return <Message key={message._id} message={message} isReply={message.replyTo ? true : false}></Message>
                    })
                }
            </div>
      </div>
    )
}

export default Detail;