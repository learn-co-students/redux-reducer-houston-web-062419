export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          return {friends: [...state.friends, {name: 'Joe',hometown: 'Boston',id: 101}] }
        case 'REMOVE_FRIEND':
          return {friends: state.friends.filter(i => i.id !== 101)}
        default:
          return state;
    }      
}