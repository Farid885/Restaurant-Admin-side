import { faL } from "@fortawesome/free-solid-svg-icons";
import { Types } from "../types";

// const inithialData = [
//     {
//         id:1,
//         title:'about',
//         description:'About us',
//         url:'facebook.com '
//     },
// ]

// const initialData = [
//     {
//         id:1,
//         title:'about',
//         description:'About us',
//         url:"Facebook.com"
//     },
// ]
const initialData = {
  isLoggedIn: false,
  data: {},
  message: "",
  notify: false,
};

export const dataReducer = (data = initialData, action) => {
  switch (action.type) {
    case Types.ADD_DATA:
      return [...data, action.payload];
    case Types.DELETE_DATA:
      let arr = [...data];
      let newArr = arr.filter((r) => r.id !== action.payload.id);
      return newArr;
    case Types.EDIT_DATA:
      let arr2 = [...data];
      let EditedObject = arr2.find((a) => a.id === action.payload.id);
      EditedObject["title"] = action.payload.title;
      EditedObject["description"] = action.payload.description;
      EditedObject["Url"] = action.payload.url;
      return arr2;
    default:
      return data;
  }
};

export function useReducer(userData = initialData, action) {
  switch (action.type) {
    case Types.GET_USER:
      return userData;
    case Types.SET_USER_LOGGED_IN:
      let data = { ...action.payload };
      return {
        data,
        isLoggedIn: data.token !== null ? true : false,
        // message: "",
        // notify: false,
      };
    case Types.SET_USER:
      return {
        data: action.payload.data,
        isLoggedIn: action.payload.data.token !== null ? true : false,
        message: "Successfully logged in",
        notify: true,
      };
    case Types.SET_USER_ERROR:
      return {
        ...userData,
        message: action.payload.message,
        notify: true,
      };
    case Types.LOG_OUT:
      localStorage.removeItem("access_token");
      sessionStorage.removeItem("access_token");
      return {
        message: "",
        data: {},
        isLoggedIn: false,
        notify: false,
      };
    default:
      return userData;
  }
}

export function loaderReducer(isLoading = 0, action) {
  switch (action.type) {
    case Types.LOADING_ON:
      return ++isLoading;
    case Types.LOADING_OFF:
      return isLoading === 0 ? 0 : --isLoading;
    default:
      return isLoading;
  }
}
