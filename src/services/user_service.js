import axios from "axios";

const API_CREATE_ACCOUNT = "http://localhost:8080/api/v1/createaccount";
const API_REMAINDER_URL = "http://localhost:8080/api/v1/remainder";
const API_PRODUCT_URL = "http://localhost:8080/api/v1/product";
const API_USER_URL = "http://localhost:8080/api/v1/userdetail";
const API_ORDER_URL = "http://localhost:8080/api/v1/order";
const API_MY_ORDER_URL = "http://localhost:8080/api/v1/myorder";

class UserService {
  createAccount(user) {
    return axios.post(API_CREATE_ACCOUNT, user);
  }
  placeOrder(order) {
    return axios.post(API_ORDER_URL, order);
  }
  updateOrderStatus(id, order) {
    return axios.put(API_ORDER_URL + "/" + id, order);
  }
  remainder(remainder) {
    return axios.post(API_REMAINDER_URL, remainder);
  }
  addProduct(product) {
    return axios.post(API_PRODUCT_URL, product);
  }
  getRemainder() {
    return axios.get(API_REMAINDER_URL);
  }
  getOrder() {
    return axios.get(API_ORDER_URL);
  }
  getProduct() {
    return axios.get(API_PRODUCT_URL);
  }
  deleteProduct(id) {
    return axios.delete(API_PRODUCT_URL + "/" + id);
  }
  deleteRemainder(id) {
    return axios.delete(API_REMAINDER_URL + "/" + id);
  }
  checkUser(password) {
    return axios.get(API_USER_URL + "/" + password);
  }
  myOrder(mobile) {
    return axios.get(API_MY_ORDER_URL + "/" + mobile);
  }
}

export default new UserService();
