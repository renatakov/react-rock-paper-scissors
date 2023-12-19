import s from "./Card.module.css"
const Card = (props) => {
    console.log(props)
    return (
        <>
                <div style={props.style} className={s.wrapper}>

                    <img src={props.img} alt="" />
                    </div>
        </>
    )
}

export default Card