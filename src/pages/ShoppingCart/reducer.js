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

  // console.log(action.type);
  // console.log(action.payload);
  // console.log("state", state);
  // console.log("action", action.payload);

  switch (action.type) {
    case ADD_TO_CART: {
      const exitsProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (exitsProduct) {
        exitsProduct.quantity = exitsProduct.quantity + 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        items: state.items,
        totalPrice: state.totalPrice + action.payload.price,
        totalQuantity: state.totalQuantity + 1,
      };
    }
    case REMOVE_FROM_CART: {
      console.log("action.payload", action.payload);
      const newCart = state.items.filter(
        (item) => item.id !== action.payload.productId
      );
      console.log("newCart", newCart);

      const totalQuantity = newCart.reduce(
        (sum, item) => sum + (item.quantity ?? 0),
        0
      );
      const totalPrice = newCart.reduce(
        (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0),
        0
      );

      return {
        ...state,
        items: newCart,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
      };
    }

    case UPDATE_QUANTITY: {
      const product = state.items.find(
        (item) => item.id === action.payload.productId
      );

      if (!product) {
        return;
      }
      product.quantity = action.payload.quantity;

      const totalQuantity = state.items.reduce(
        (sum, item) => sum + (item.quantity ?? 0),
        0
      );
      const totalPrice = state.items.reduce(
        (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0),
        0
      );

      return {
        ...state,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
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
