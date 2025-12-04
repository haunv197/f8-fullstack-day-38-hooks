import axiosClient from "../api/axiosClient";

const productService = {
  getProducts() {
    return axiosClient.get("products");
  },
};

export default productService;
