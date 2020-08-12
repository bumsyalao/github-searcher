export interface IAppState {
  authentication,
  extras: {
    loading: boolean,
  }
}

let initialState = {
}
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};
