import { makeAMove } from "../../redux/gameReducer"
import s from "./Card.module.css"
import { useSelector, useDispatch  } from "react-redux"
const Card = (props) => {
    // const state = useSelector((state)=> state.game)
    const dispatch = useDispatch()
    return (
        <>
                <div onClick={()=>{dispatch(makeAMove(props.name))}} style={props.style} className={s.wrapper}>

                    <img src={props.img} alt="" />
                    </div>
        </>
    )
}

export default Card