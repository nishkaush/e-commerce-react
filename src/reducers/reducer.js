const initialState = {
  checkoutItemsArr: [],
  boughtItemsArr: []
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    let newState = {
      ...state,
      checkoutItemsArr: [...state.checkoutItemsArr],
      boughtItemsArr: [...state.boughtItemsArr]
    };
    //check if checkoutItemsArr has any items
    // if no items, then just add the  item
    //if some items, check if item already exists
    // if yes, update the qty of existing item
    //  if not, add the item simply
    if (!newState.checkoutItemsArr.length) {
      newState.checkoutItemsArr.push(action.payload);
    } else {
      const foundInd = newState.checkoutItemsArr.findIndex(
        e => e.id === action.payload.id
      );
      if (foundInd >= 0) {
        let foundItem = { ...newState.checkoutItemsArr[foundInd] };
        foundItem.qty += action.payload.qty;
        newState.checkoutItemsArr[foundInd] = foundItem;
      } else {
        newState.checkoutItemsArr.push(action.payload);
      }
    }
    return newState;
  }
  return state;
};

export default reducer;
