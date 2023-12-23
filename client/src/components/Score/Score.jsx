import s from "./Score.module.css";
import { useSelector } from "react-redux";
const Score = () => {
    const state = useSelector((state) => state.game)
    return (
        <>
            <header className={s.score}>
                <h1>Rock Paper Scissors</h1>
                <div className={s.scoreBlock}>
                    <span>Score</span>
                    <span>{state.playersScore}</span>
                </div>
            </header>
        </>
    )
}

export default Score