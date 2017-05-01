const defaultState = {
  video : {},
  videos: [],
  tags: [],
  selectedTags: [],

}


export default(state = defaultState, action) => {
  switch(action.type) {
    case "ADD_SELECTED_TAG":
      return Object.assign({},
        state, {
          selectedTags: selectedTags
        }

  }
};
