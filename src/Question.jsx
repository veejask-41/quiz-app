import "./Question.css"

export default function Question(props) {
    
    const isWrong = {
        opacity: 0.5,
        backgroundColor: "#F8BCBC"
    }

    
    return(
        <div className="question-container">
            <p className="question" dangerouslySetInnerHTML={{__html: `${props.question}`}}></p>
            <ul className="answers">
                <li 
                    className={`
                                ${props.allAnswers[0].isSelected? "selected " : ""}
                                ${props.isChecked ? "checked " : ""}
                                ${props.allAnswers[0].isCorrect && props.isChecked? "correct ": ""}
                                ${props.isChecked && props.allAnswers[0].isSelected && !props.allAnswers[0].isCorrect ? "wrong " : "" }
                    `} 
                    onClick={() => props.selectAnswer(props.id, props.allAnswers[0].answerId)} 
                    dangerouslySetInnerHTML={{__html: `${props.allAnswers[0].answer}`}}
                ></li>
                <li 
                    className={`
                                ${props.allAnswers[1].isSelected? "selected " : ""}
                                ${props.isChecked ? "checked " : ""}
                                ${props.allAnswers[1].isCorrect && props.isChecked? "correct ": ""}
                                ${props.isChecked && props.allAnswers[1].isSelected && !props.allAnswers[1].isCorrect ? "wrong " : "" }
                    `} 
                    onClick={() => props.selectAnswer(props.id, props.allAnswers[1].answerId)} 
                    dangerouslySetInnerHTML={{__html: `${props.allAnswers[1].answer}`}}
                ></li>
                <li 
                    className={`
                                ${props.allAnswers[2].isSelected? "selected " : ""}
                                ${props.isChecked ? "checked " : ""}
                                ${props.allAnswers[2].isCorrect && props.isChecked? "correct ": ""}
                                ${props.isChecked && props.allAnswers[2].isSelected && !props.allAnswers[2].isCorrect ? "wrong " : "" }
                    `} 
                    onClick={() => props.selectAnswer(props.id, props.allAnswers[2].answerId)} 
                    dangerouslySetInnerHTML={{__html: `${props.allAnswers[2].answer}`}}
                ></li>
                <li 
                    className={`
                                ${props.allAnswers[3].isSelected? "selected " : ""}
                                ${props.isChecked ? "checked " : ""}
                                ${props.allAnswers[3].isCorrect && props.isChecked? "correct ": ""}
                                ${props.isChecked && props.allAnswers[3].isSelected && !props.allAnswers[3].isCorrect ? "wrong " : "" }
                    `} 
                    onClick={() => props.selectAnswer(props.id, props.allAnswers[3].answerId)} 
                    dangerouslySetInnerHTML={{__html: `${props.allAnswers[3].answer}`}}
                ></li>
            </ul>
        </div>
    )
}