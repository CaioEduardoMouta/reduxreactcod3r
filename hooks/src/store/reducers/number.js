
export function numberReducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberMulti7':
            return {...state, number: state.number * 2}
        case 'numberDiv25':
            return {...state, number: state.number / 25}
        case 'numberInt':
            return {...state, number: state.number / 25}
        case 'numberAddN':    
            return {...state, number: state.number + action.payload}
        default:
            return state
    }
}
