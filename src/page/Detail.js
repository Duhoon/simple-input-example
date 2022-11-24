// Tools
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

// Components
import Message from "../component/Message";

const Detail = (props)=>{
    // Data State
    const [data, setData] = useState([]);

    // Client URL params
    const params = useParams();
    const serverHost = "http://localhost:4000";

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

    return (
        <div className="wrapper" aria-label="plaza">
            <div className="content-width">
                <div className="box-colored" aria-label="title">
                    <div className="p-4 text-xl text-center">ZET</div>
                </div>
            </div>
            <div className="content-width">
                {
                    data.map((message)=>{
                        return <Message key={message._id} message={message}></Message>
                    })
                }
            </div>
      </div>
    )
}

export default Detail;