import { useNavigate } from "react-router-dom"
import "./login.css"
import { useEffect, useState } from "react"
import loginuser from "../../apifunction"


const Login = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token) {
            navigate("/")
        }
    })

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    
    
    const onLogin = async (e) => {
        console.log(username, password)
        e.preventDefault()
        try {
            const response = await loginuser(username, password)
            if(response.success && response.token) {
                localStorage.setItem('token', response.token);
                navigate("/")

            }
            else {
                throw new Error("token not provided")
            }
        }catch(e) {
            setError(e.message)
        }
        
    }

        return (
            <div className="login-container">
                <div className="login-form-holder">
                    <h1 className="login-heading">Login</h1>
                    <form className="form-container" onSubmit={onLogin}>
                        <label className="login-form-label">username</label>
                        <input type="text" className="login-input" placeholder="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                        <label className="login-form-label">password</label>
                        <input type="password" className="login-input" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                        <button type="submit" className="login-button">Login</button>   
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        )
    }


export default Login