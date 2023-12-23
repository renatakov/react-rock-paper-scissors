import Card from "../../assets/Card/Card";
import s from "./Game.module.css"
import { useSelector } from "react-redux";
const Game = () => {
    const state = useSelector((state)=>state.game)
    return(
        <>
        <div className={s.game}>

        <Card name={state.playersChoice}/>
        <Card name={state.computerChoice}/>
        </div>
        </>
    )
}

export default Game;