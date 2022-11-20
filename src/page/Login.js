import "./Login.css";

const Login = ()=>{
    return (
        <div className="wrapper">
            <div className="content-width">
                <div className="login-form">
                    <div className="input-group">
                        <input type="text" placeholder="아이디를 입력하세요."></input>
                    </div >
                    <div className="input-group">
                        <input type="password" placeholder="비밀번호를 입력하세요."></input>
                    </div>
                    <div className="btn-group">
                        <button className="btn-primary">로그인</button>
                        <button className="btn-primary">회원가입</button>
                    </div>
                    <div className="btn-group">
                        <button className="btn-primary">메타마스크 로그인</button>
                        <button className="btn-primary">클레이튼 로그인</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;