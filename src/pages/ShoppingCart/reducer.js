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

const calcTotals = (items) => {
  const totalQuantity = items.reduce(
    (sum, item) => sum + (item.quantity ?? 0),
    0
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0),
    0
  );

  return { totalQuantity, totalPrice };
};

const reducer = (state, action) => {
  // Xử lý và trả về state mới => component sẽ re-render với state mới

  switch (action.type) {
    case ADD_TO_CART: {
      const exists = state.items.find((item) => item.id === action.payload.id);

      let newItems;

      if (exists) {
        newItems = state.items.map((item) =>
          item.id === exists.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        items: newItems,
        ...calcTotals(newItems),
      };
    }
    case REMOVE_FROM_CART: {
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.productId
      );

      return {
        ...state,
        items: newItems,
        ...calcTotals(newItems),
      };
    }

    case UPDATE_QUANTITY: {
      const newItems = state.items.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      return {
        ...state,
        items: newItems,
        ...calcTotals(newItems),
      };
    }

    case CLEAR_CART:
      return {
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
    default:
      throw Error(`Action "${action.type}" invalid.`);
  }
};

export default reducer;
