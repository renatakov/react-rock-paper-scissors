import { makeAMove } from "../../redux/gameReducer"
import s from "./Card.module.css"
import rock from "../../images/icon-rock.svg"
import paper from "../../images/icon-paper.svg"
import scissors from "../../images/icon-scissors.svg"
import { useSelector, useDispatch } from "react-redux"
const Card = (props) => {
    // const state = useSelector((state)=> state.game)
    const dispatch = useDispatch()
    return (
        <>
            {/* {props.name === "paper" &&
                <div onClick={() => { dispatch(makeAMove(props.name)) }} style={{ borderColor: "#0265c9" }} className={s.wrapper}>

                    <img src={paper} alt="" />
                </div>
            }
            {props.name === "scissors" &&
                <div onClick={() => { dispatch(makeAMove(props.name)) }} style={{ borderColor: "#edbb26" }} className={s.wrapper}>

                    <img src={scissors} alt="" />
                </div>
            }

            {props.name === "rock" &&
                <div onClick={() => { dispatch(makeAMove(props.name)) }} style={{ borderColor: "#e63f29" }} className={s.wrapper}>

                    <img src={rock} alt="" />
                </div>
            } */}
            {props.name === "paper" ? (
                <div onClick={() => { dispatch(makeAMove(props.name)) }} style={{ borderColor: "#0265c9" }} className={s.wrapper}>
                    <img src={paper} alt="" />
                </div>
            ) : props.name === "scissors" ? (
                <div onClick={() => { dispatch(makeAMove(props.name)) }} style={{ borderColor: "#edbb26" }} className={s.wrapper}>
                    <img src={scissors} alt="" />
                </div>
            ) : props.name === "rock" ? (
                <div onClick={() => { dispatch(makeAMove(props.name)) }} style={{ borderColor: "#e63f29" }} className={s.wrapper}>
                    <img src={rock} alt="" />
                </div>
            ) : null}
        </>
    )
}

export default Card