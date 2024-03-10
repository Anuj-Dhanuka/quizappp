import { useNavigate } from "react-router-dom"
import "./login.css"


const Login = () => {
    
    const navigate = useNavigate()
    const onLogin = (e) => {
        e.preventDefault()
        navigate("/")
    }

        return (
            <div className="login-container">
                <div className="login-form-holder">
                    <h1 className="login-heading">Login</h1>
                    <form className="form-container" onSubmit={onLogin}>
                        <label className="login-form-label">username</label>
                        <input type="text" className="login-input"/>
                        <label className="login-form-label">password</label>
                        <input type="password" className="login-input"/>
                        <button type="submit" className="login-button">Login</button>   
                    </form>
                </div>
            </div>
        )
    }


export default Login