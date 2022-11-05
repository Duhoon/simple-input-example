const Message = (props)=>{

    return (        
        <div className="message p-4" aria-label="message">
            <div className="message-header flex w-full">
            <div className="profile-wrapper shrink-0 w-20 h-20 rounded-full relative overflow-hidden">
                <img className="absolute" src="https://bit.ly/3UJrYQz"/>
            </div>

            <div className="message-right shrink ml-4 w-full flex justify-between">
                <div className="message-user-info flex flex-col justify-center">
                <p className="font-bold">@JejuAlrock</p>
                <p className="text-slate-400">2022.11.05 16:05</p>
                </div>
                <div className="message-config flex flex-col justify-center">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
                </div>
            </div>
            </div> {/* Message Header */}
            <div className="message-body py-4">
            <p className="">
                Hello World, Nice to meet you!
            </p>
            </div> {/* Message Body */}

            <div className="message-tail flex justify-evenly w-full">
            <div>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                </button>
            </div>
            <div>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>
            </div>
            </div> {/* Message Tail */}
        </div>
    )
}


export default Message ;