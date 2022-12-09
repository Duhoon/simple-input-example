// Tools
import {useState, useEffect, useRef} from 'react';
import axios from "axios";

// Components
import Send from "../component/Send";
import Message from "../component/Message";

const Plaza = (props)=>{
    const [data, setData] = useState([]);
    // Trigger to reqeust more data
    const [triggerLoad, setTriggerLoad] = useState(false);
    // State for displaying Loading
    const [isLoading, setIsLoading] = useState(false);
    const [scroll, setScroll] = useState({
        offset: 0,
        limit : 5,
    })
    // Ref for Trigger View
    const target = useRef(null);
    let observer;

    const getUrlQuery =  new URL("http://localhost:4000");

    // Fetch for request data to Server
    const getMessages = async (offset, limit)=>{
        setIsLoading(true);
        getUrlQuery.searchParams.append("skip",`${offset}`);
        getUrlQuery.searchParams.append("limit", `${limit}`);

        const result = await axios.get(getUrlQuery)
        .then(result=>{
            setData(data.concat(result.data));
            setScroll({
                ...scroll,
                offset : offset + 5
            });
            setIsLoading(false);

            return result.data;
        })
        .catch(err=>{
            return new Error(err);
        });

        if (result.length === 0 || !result) observer.disconnect();

        getUrlQuery.searchParams.delete("skip");
        getUrlQuery.searchParams.delete("limit");
    }

    const getMessageSended = (message)=>{
        setData([message].concat(data));
    }

    // init observer
    useEffect(()=>{
        observer = new IntersectionObserver((entries, observer)=>{
            if (entries[0].isIntersecting === true){
                setTriggerLoad(true);
            } else return;
        }, {threshold : 1});
        observer.observe(target.current);
        setTriggerLoad(true);
    },[])

    // trigger activate
    useEffect(()=>{
        if (triggerLoad === true){
            setTriggerLoad(false);
            getMessages(scroll.offset, scroll.limit);
        }
    }, [triggerLoad])

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
                <div className="flex flex-col items-center justify-center min-h-[200px]" ref={target}>
                {isLoading ?
                    <img src="https://i.gifer.com/ZKZg.gif" width="50px" height="50px"/>
                : <></>}
                </div>
            </div>
      </div>
    )
}

export default Plaza;