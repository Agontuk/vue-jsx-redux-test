export default function (state, action) {
    console.log(action);
    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                name: action.name
            }
        default:
            return state;
    }
}
