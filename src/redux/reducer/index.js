import {combineReducers} from "redux"

const ShowDataReducer = (state=[], action) => {
    if(action.type === "SHOW_DATA") {
        return action.data
    }

    return state
}

export default combineReducers({
    ShowDataReducer: ShowDataReducer
})