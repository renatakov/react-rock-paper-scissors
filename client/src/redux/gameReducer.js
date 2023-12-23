import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    playersChoice: "",
    computerChoice: "",
    playersScore: 0,
    playersObj: null,
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
            draw: "paper",

        },
        {
            name: "scissors",
            victory: "rock",
            defeat: "paper",
            draw: "scissors",

        }
    ],
    gameStatus: ""
}

export const makeAMove = createAction("makeAMove", (playersChoice) => {
    return { payload: playersChoice };
})

export const restart = createAction("restart")

export const gameReducer = createReducer(initialState, (builder) => {
    builder.addCase(makeAMove, (state, action) => {
        if (action.payload !== "") {
            let randomIndex = Math.floor(Math.random() * state.choices.length)
            state.gameStatus = 'ongoing';
            state.playersChoice = action.payload;
            state.computerChoice = state.choices[randomIndex].name
            let playersObj = state.choices.find(item => item.name === state.playersChoice)
            state.playersObj = playersObj;
            if (state.computerChoice === state.playersObj.victory) {
                state.gameStatus = "Computer won!"
            }
            if (state.computerChoice === state.playersObj.defeat) {
                state.gameStatus = "Player won!";
                state.playersScore++;
            }
            if (state.computerChoice === state.playersObj.draw) {
                state.gameStatus = "It's a Draw!";
            }
        }
    });
    builder.addCase(restart, (state) => {
        state.gameStatus = ""
        state.computerChoice = ""
        state.playersChoice = ""
        state.playersObj = null
    })
})