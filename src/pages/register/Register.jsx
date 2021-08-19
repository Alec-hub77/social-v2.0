import './register.scss'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialShit</h3>
                    <span className="loginDesc">Connect with your alcoholic friends</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="User Name" className="loginInput" />
                        <input placeholder="Email"  className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Password Again" className="loginInput" />
                        <button className="loginBtn">Sign Up</button>
                        
                        <button className="newAccaunt">Log in to Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

