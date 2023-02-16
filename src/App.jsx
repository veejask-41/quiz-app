import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import arrayShuffle from "array-shuffle"
import StartPage from "./StartPage"
import "./App.css"
import Question from "./Question"

export default function App() {
    
    const [allQuestions, setAllQuestions] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    
    function startQuiz() {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setAllQuestions(data.results.map(data => (
                {
                    ...data, 
                    id: nanoid(),
                    allAnswers: arrayShuffle ([...data.incorrect_answers, data.correct_answer].map((answer,index) => {
                        if (index === 3){
                            return {answer: answer, isSelected: false, answerId: nanoid(), isCorrect: true}
                        } else {
                            return {answer: answer, isSelected: false, answerId: nanoid(), isCorrect: false}
                        }
                        
                    }))
                }
                ))))
    }

    
    function selectAnswer(questionId, answerId) {
        setAllQuestions(oldAllQuestions => oldAllQuestions.map(question => {
            if (question.id === questionId){
                return {...question, allAnswers: question.allAnswers.map(answer => {
                    if (answer.answerId === answerId){
                        return {...answer, isSelected: !answer.isSelected}
                    } else {
                        return {...answer, isSelected: false}
                    }
                })}
            } else {
                return question
            }
        }))
        
    }
    
    function checkAnswers() {
        setIsChecked(true)
        let count = 0
        for (let i=0; i < allQuestions.length; i++){
            for (let j=0; j < allQuestions[i].allAnswers.length; j++){
                if (allQuestions[i].allAnswers[j].isSelected && allQuestions[i].allAnswers[j].isCorrect){
                    count++
                }
            }
        }
        setCorrectAnswers(count)
    }

    function newGame() {
        setAllQuestions([])
        setIsChecked(false)
    }

    const questionElements = allQuestions.map(ques => {
        return(
            <Question 
            key={ques.id} 
            id={ques.id} 
            question={ques.question} 
            allAnswers={ques.allAnswers} 
            selectAnswer={selectAnswer} 
            isChecked={isChecked}
            />
        )
    })

    
    return(
        <div className="main-container">
            {allQuestions.length === 0 && <StartPage startQuiz={startQuiz}/>}
            {allQuestions.length !== 0 && 
            <div className="question-page">
                {questionElements}
                { !isChecked ?
                <button className="check btn" onClick={checkAnswers}>Check Answers</button> :
                <div className="results-container">
                    <p className="results">You scored {correctAnswers}/5 correct answers</p>
                    <button className="newgame btn" onClick={newGame}>New Game</button>
                </div>
                }
            </div>
            }
        </div>
    )
}