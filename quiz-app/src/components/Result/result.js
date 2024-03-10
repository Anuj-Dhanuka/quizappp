import { useNavigate } from "react-router-dom";
import Header from "../Header/header";
import "./result.css"
import { quizState } from "../../App";
import { useContext } from "react";

const Result = () => {
        const navigate = useNavigate()
        const {score} = useContext(quizState)

        const onReset = () => {
            navigate("/")
        }
    
        return(
            <div className="result-bg-container">
                <Header />
                <div className="result-holder">
                    <h1 className="result-welcome-headline">It's time to score</h1>
                    
                    <div className="result-screen-container">
                        <div className="result-question-container">
                            <h4 className="congo-text">Congratulations your score is {score}</h4>
                            <button className="restart-btn" onClick={onReset}>Restart</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }


export default Result