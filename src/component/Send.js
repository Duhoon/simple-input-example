const Send = (props)=>{
    return (
        <div className="mt-2 content-width">
            <div className="card">
                <div aria-label="input-wrapper flex focus:ring focus:ring-fuchsia-300">
                  <textarea className="textarea-form" rows="5" placeholder="내용을 입력하세요."></textarea>
                </div>
                <div className="flex justify-end">
                  <button className="btn-primary">
                    보내기
                  </button>
                </div>
            </div>
        </div>
    )
}

export default Send ;