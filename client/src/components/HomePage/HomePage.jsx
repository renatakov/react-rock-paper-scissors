import s from "./HomePage.module.css"
import React from "react"
import Score from "../Score/Score"
import Card from "../../assets/Card/Card"
import rock from "../../images/icon-rock.svg"
import paper from "../../images/icon-paper.svg"
import scissors from "../../images/icon-scissors.svg"

const HomePage = () => {
    return (
        <>
            <main>
                <Score />
                <div className={s.menu}>
                    <Card style={{ borderColor: "#0265c9" }} img={paper} />
                    <Card style={{ borderColor: "#edbb26" }} img={scissors} />
                    <Card style={{ borderColor: "#e63f29"}} img={rock} />
                </div>
                <button className={s.rulesBtn}>RULES</button>
            </main>
        </>
    )
}

export default HomePage