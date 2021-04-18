export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            let ids = state.friends.map(friend => friend.id)
            let indexToRemove = ids.indexOf(ids.find(id => action.id === id))
            return {...state, friends: state.friends.filter((friend, index) => index !== indexToRemove)}
        default:
            return state
    }
}
