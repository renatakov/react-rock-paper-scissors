import { makeAMove } from "../../redux/gameReducer"
import s from "./Card.module.css"
import rock from "../../images/icon-rock.svg"
import paper from "../../images/icon-paper.svg"
import scissors from "../../images/icon-scissors.svg"
import { useDispatch, useSelector } from "react-redux"
const Card = (props) => {
    const state = useSelector(state=>state.game)
    const dispatch = useDispatch()
    return (
        <>
            {props.name === "paper" ? (
                <div onClick={state.gameStatus === "" || state.gameStatus === "ongoing" ? () => { dispatch(makeAMove(props.name)) } : null}   style={{ borderColor: "#0265c9", boxShadow: "inset 0px 8px 2px 0px #a8acb3, 0 10px 0 0 #043e85 " }} className={s.wrapper}>
                    <img src={paper} alt="" />
                </div>
            ) : props.name === "scissors" ? (
                <div onClick={state.gameStatus === "" || state.gameStatus === "ongoing" ? () => { dispatch(makeAMove(props.name)) } : null} style={{ borderColor: "#edbb26", boxShadow: "inset 0px 8px 2px 0px #a8acb3, 0 10px 0 0 #99890c" }} className={s.wrapper}>
                    <img src={scissors} alt="" />
                </div>
            ) : props.name === "rock" ? (
                <div onClick={state.gameStatus === "" || state.gameStatus === "ongoing" ? () => { dispatch(makeAMove(props.name)) } : null} style={{ borderColor: "#e63f29", boxShadow: "inset 0px 8px 2px 0px #a8acb3, 0 10px 0 0 #8a1b0a" }} className={s.wrapper}>
                    <img src={rock} alt="" />
                </div>
            ) : null}
        </>
    )
}

export default Card