import s from "./Score.module.css";

const Score = () => {
    return(
        <>
        <header className={s.score}>
            <h1>Rock Paper Scissors</h1>
            <div className={s.scoreBlock}>
                <span>Score</span>
                <span>12</span>
            </div>
        </header>
        </>
    )
    }
    
    export default Score