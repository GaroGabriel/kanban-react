import {constants} from "./test_action";

let initialState = {
    test: 'test'
}

export const test_reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.TESTING:
            return ({
                ...state,
                reTest: action.payload
            })
        default:
            return state
    }
}

