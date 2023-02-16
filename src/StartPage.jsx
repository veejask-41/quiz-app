import "./StartPage.css"

export default function StartPage(props) {
    return (
        <div className="start-page">
            <h1 className="start-title">Quizzical</h1>
            <p className="start-description">The ultimate quiz app</p>
            <button className="start-btn" onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}