import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./gameReducer";
let store = configureStore({
    reducer:{
        game: gameReducer,
    }
})

export default store