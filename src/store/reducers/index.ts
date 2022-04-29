import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer.ts";

export const rootReducer = combineReducers({
    characters: charactersReducer
})