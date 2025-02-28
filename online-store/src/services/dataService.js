import axios from "axios";

class DataService {
  async getCoupons() {
    let response = await axios.get("http://127.0.0.1:5000/api/coupons");
    return response.data;
  }
  async saveCoupons(coupons) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/coupons",
      coupons
    );
    return response.data;
  }
  async getProducts() {
    let response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
  }

  async saveProducts(products) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/products",
      products
    );
    return response.data;
  }

}

export default new DataService();
