export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

  export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
};