import './login.scss'

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialShit</h3>
                    <span className="loginDesc">Connect with your alcoholic friends</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" type="password" className="loginInput" />
                        <button className="loginBtn">Login</button>
                        <span>Forgot Password ?</span>
                        <button className="newAccaunt">Create a New Accaunt</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

