import Card from "../../assets/Card/Card";
import s from "./Game.module.css"
import { restart } from "../../redux/gameReducer";
import { useDispatch, useSelector } from "react-redux";
const Game = () => {
    const state = useSelector((state) => state.game)
    const dispatch = useDispatch()
    return (
        <>
            <div className={s.game}>
                <div className={s.gameBlocks}>
                    <div className={s.gameBlock}>
                        <h3>YOU PICKED</h3>
                        <Card name={state.playersChoice} />
                    </div>
                    {state.gameStatus === "Computer won!" && (
                        <div className={s.gameStatus}>
                            <h3>YOU LOSE</h3>
                            <button onClick={() => { dispatch(restart()) }}>PLAY AGAIN</button>
                        </div>
                    )}
                    {state.gameStatus === "Player won!" && (
                        <div className={s.gameStatus}>
                            <h3>YOU WON</h3>
                            <button onClick={() => { dispatch(restart()) }}>PLAY AGAIN</button>
                        </div>
                    )}
                    {state.gameStatus === "It's a Draw!" && (
                        <div className={s.gameStatus}>
                            <h3>DRAW</h3>
                            <button onClick={() => { dispatch(restart()) }}>PLAY AGAIN</button>
                        </div>
                    )}
                    <div className={s.gameBlock}>
                        <h3>THE HOUSE PICKED</h3>
                        <Card name={state.computerChoice} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Game;