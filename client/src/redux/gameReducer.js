import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    playersChoice: "",
    computerChoice: "",
    playersScore: 0,
    choices: [
        {
            name: "rock",
            victory: "paper",
            defeat: "scissors",
            draw: "rock",
        },
        {
            name: "paper",
            victory: "scissors",
            defeat: "rock",
        },
        {
            name: "scissors",
            victory: "rock",
            defeat: "paper"
        }
    ],
    gameStatus: ""
}

export const makeAMove = createAction("makeAMove", (playersChoice) => {
    return { payload: playersChoice };
})

export const gameReducer = createReducer(initialState, (builder) => {
    builder.addCase(makeAMove, (state, action) => {
        if (action.payload !== "") {
            let randomIndex = Math.floor(Math.random() * state.choices.length)
            state.gameStatus = 'ongoing';
            state.playersChoice = action.payload;
            state.computerChoice = state.choices[randomIndex].name
        }
    })
})