import s from "./HomePage.module.css"
import React from "react"
import Score from "../Score/Score"
import Card from "../../assets/Card/Card"
import rock from "../../images/icon-rock.svg"
import paper from "../../images/icon-paper.svg"
import scissors from "../../images/icon-scissors.svg"
import { useState } from "react"
import Rules from "../../assets/RulesModal/Rules"

const HomePage = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <main>
                <Score />
                <div className={s.menu}>
                    <Card name="paper" style={{ borderColor: "#0265c9" }} img={paper} />
                    <Card name="scissors" style={{ borderColor: "#edbb26" }} img={scissors} />
                    <Card name="rock" style={{ borderColor: "#e63f29"}} img={rock} />
                </div>
                <button onClick={() => setModalShow(true)} className={s.rulesBtn}>RULES</button>

                    <Rules
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
            </main>
        </>
    )
}

export default HomePage