const Dropdown = (props)=>{
    const clickRemoveHandler = ()=>{
        props.removeMessage(props.messageId)
    }

    const clickUpdateHandler = ()=>{
        props.activateUpdate();
    }

    return (
        <div className="dropdown absolute w-[100px] bg-white border border-slate-200 rounded" aria-label="Dropdown">
            <button className="dropdown-btn border-b" onClick={clickUpdateHandler}>수정하기</button>
            <button className="dropdown-btn text-red-600" onClick={clickRemoveHandler}>삭제하기</button>
        </div>
    )
}

export default Dropdown