import s from "./HomePage.module.css"
import React from "react"
import Score from "../Score/Score"
import Card from "../../assets/Card/Card"

import { useState } from "react"
import Rules from "../../assets/RulesModal/Rules"
import { useSelector } from "react-redux";
import Game from "../Game/Game"

const HomePage = () => {
    const [modalShow, setModalShow] = useState(false);
    const state = useSelector((state)=> state.game)
    return (
        <>
            <main>
                
                <Score />
        {state.gameStatus !== "" ? (<Game/>) : (
                <>
                <div className={s.menu}>
                    <Card name="paper"  />
                    <Card name="scissors" />
                    <Card name="rock" />
                </div>
                <button onClick={() => setModalShow(true)} className={s.rulesBtn}>RULES</button>

                    <Rules
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                    </>
                )}
            </main>
        </>
    )
}

export default HomePage