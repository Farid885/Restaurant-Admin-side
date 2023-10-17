import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://localhost:3000",
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => baseApi.get(url).then(responseBody),
  post: (url, body = {}) => baseApi.post(url, body).then(responseBody),
  put: (url, body = {}) => baseApi.put(url, body).then(responseBody),
  del: (url) => baseApi.delete(url).then(responseBody),
};

const Posts = {
  All: () => requests.get("/posts"),
  Create: (body) => requests.post("/posts", body),
  Update: (id, body) => requests.put(`/posts/${id}`, body),
  Remove: (id) => requests.del(`/posts/${id}`),
};

const Categories = {
  /**
   * @returns {Promise<Array<{id:number;name:string}>>}
   */
  All: () => requests.get("/categories"),
  /** @param {{name:string}} body */
  Create: (body) => requests.post("/categories", body),
  /**
   * @param {number} id
   * @param {{name:string}} body */
  Update: (id, body) => requests.put(`/categories/${id}`, body),
  /** @param {number} id */
  Remove: (id) => requests.del(`/categories/${id}`),
};

const Persons = {
  /**
   * @returns {Promise<Array<{id:number;name:string}>>}
   */
  All: () => requests.get("/persons"),
  /** @param {{name:string}} body */
  Create: (body) => requests.post("/persons", body),
  /**
   * @param {number} id
   * @param {{name:string}} body */
  Update: (id, body) => requests.put(`/persons/${id}`, body),
  /** @param {number} id */
  Remove: (id) => requests.del(`/persons/${id}`),
};

const Table = {
  /**
   * @returns {Promise<Array<{id:number;name:string}>>}
   */
  All: () => requests.get("/tables"),
  /** @param {{name:string}} body */
  Create: (body) => requests.post("/tables", body),
  /**
   * @param {number} id
   * @param {{name:string}} body */
  Update: (id, body) => requests.put(`/tables/${id}`, body),
  /** @param {number} id */
  Remove: (id) => requests.del(`/tables/${id}`),
};

const Menu = {
  /**
   * @returns {Promise<Array<{id:number;name:string;image:string;category_id:number;price:number;category:string}>>}
   */
  All: () => requests.get("/menu"),
  /** 
   *@param {{name:string; image:string, category_id:number, price:number, category:string}} body
    @returns {Promise<{id:number, name:string, image:string, category_id:number, price:number, category:string}>} */
  Create: (body) => requests.post("/menu", body),
  /**
   * @param {number} id
   * @param {{name:string;image:string, category_id:number, price:number, category:string}} body 
  @returns {Promise<{id:number, name:string, image:string, category_id:number, price:number, category:string}>}
   * 
   * */

  Update: (id, body) => requests.put(`/menu/${id}`, body),

  /**
   * @param {number} id
   *  @returns {Promise<void>}
   */

  Remove: (id) => requests.del(`/menu/${id}`),
  /**
   * 
   * @param {number} id 
      @returns {Promise<{id:number, name:string, image:string, category_id:number, price:number, category:string}>}
   */
  Details: (id) => requests.get(`/menu/${id}`),

  /** 
    @returns {Promise<Array<{id:number, name:string, image:string, category_id:number, price:number, category:string}>>} */
  GetByCategory: (categoryId) => requests.get(`/menu?category_id=${categoryId}`),
};

const Comments = {
  All: () => requests.get("/comments"),
  Create: (body) => requests.post("/comments", body),
  Update: (id, body) => requests.put(`/comments/${id}`, body),
  Remove: (id) => requests.del(`/comments/${id}`),
};


const Users = {
  /**
   * @returns {Promise<Array<{id:number;name:string;}>>}
   */
  All: () => requests.get("/users"),
  /** @param {{name:string}} body */
  Create: (body) => requests.post("/users", body),
  /**
   * @param {number} id
   * @param {{name:string}} body */
  Update: (id, body) => requests.put(`/users/${id}`, body),
  /** @param {number} id */
  Remove: (id) => requests.del(`/users/${id}`),
};

// const Users = {
//   /**
//    * @returns {Promise<Array<{id:number;name:string;type:string;phone:string;date:string;time:string}>>}
//    */
//   All: () => requests.get("/users"),
//   /** 
//    * @param {{name:string; phone:string; date:string; time:string}} body 
//    * @returns {Promise<{id:number;name:string;type:string;phone:string;date:string;time:string}>}
//    */
//   Create: (body) => requests.post("/users", { ...body, type: "person" }),
//   /**
//    * @param {number} id
//    * @param {{name:string; phone:string; date:string; time:string}} body 
//    * @returns {Promise<{id:number;name:string;type:string;phone:string;date:string;time:string}>}
//    */
//   Update: (id, body) => requests.put(`/users/${id}`, { ...body, type: "person" }),
//   /** 
//    * @param {number} id 
//    * @returns {Promise<void>}
//    */
//   Remove: (id) => requests.del(`/users/${id}`),
// };


// const Users = {
//   /**
//    * @returns {Promise<Array<{id:number;name:string;}>>}
//    */
//   All: () => requests.get("/users"),
//   /** @param {{name:string}} body */
//   Create: (body) => requests.post("/users", body),
//   /**
//    * @param {number} id
//    * @param {{name:string}} body */
//   Update: (id, body) => requests.put(`/users/${id}`, body),
//   /** @param {number} id */
//   Remove: (id) => requests.del(`/users/${id}`),
// };


export const agent = { Posts, Categories, Comments, Persons, Table, Menu,Users };

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
function concat(a, b) {
  return (a + b).toString();
}
