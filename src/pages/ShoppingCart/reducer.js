import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "./consts";

/**
 *
 * @param {*} state là state hiện tại
 * @param {*} action là 1 object mô tả hành động sẽ được thực hiện, cấu trúc của nó là
 * {type: "loại-hành-động", payload: "dữ liệu (nếu có)"}
 */
const reducer = (state, action) => {
  // Xử lý và trả về state mới => component sẽ re-render với state mới

  console.log(state, action);

  switch (action.type) {
    case ADD_TO_CART:
      return state + (action.payload ?? 1);
    case REMOVE_FROM_CART:
      return state - (action.payload ?? 1);
    case UPDATE_QUANTITY:
      return state + action.payload;
    case CLEAR_CART:
      return state + action.payload;
    default:
      throw Error(`Action "${action.type}" invalid.`);
  }
};

export default reducer;
