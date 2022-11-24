// Tools
import {useState, useEffect} from 'react';
import axios from 'axios';

// CSS
import "./Mypage.css";

// Componentes
import Send from "../component/Send";
import Message from "../component/Message";

// Controller
import controller from "../controller";

const Mypage = (props)=>{
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

    useEffect(()=>{
        getMessages();
    },[])

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
                <div className="btn-group">
                    <button className="btn-primary">
                        팔로우하기
                    </button>
                </div>
            </div>
            <div className="contents">
                <div className="mb-4 py-4 px-4 border-b-2">
                    <Send></Send>
                </div>
        {data.map(message=>{
            return (
                <Message key={message._id} message={message}>
                </Message>
            )
        })}
            </div>
        </div>
    )
}

export default Mypage;