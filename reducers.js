export default function (state = {}, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            console.log(action.payload)
            return {
                ...state,
            }
        default:
            return state
    }
}