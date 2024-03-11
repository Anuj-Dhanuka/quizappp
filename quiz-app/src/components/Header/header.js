import { useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {
    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    
    return (
        <nav className="nav-header">
        <div>
            <h2 className='quiz-nav-heading'>Quiz App</h2>
        </div>
        <button type="button" className='nav-logout-btn' onClick={onLogout}>Logout</button>
    </nav>
    )
}
    


export default Header