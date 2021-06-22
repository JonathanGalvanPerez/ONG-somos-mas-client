import { configureStore } from "@reduxjs/toolkit";
import publicInfoReducer from "./publicInfoSlice";
import loginReducer from "../features/login/loginSlice";
import usersInfoReducer from "./usersInfoSlice";
import activityReducer from "../features/activities/activitySlice";
import newsDeleteReducer from "../features/news/newsDeleteSlice";
import newsPutReducer from "../features/news/newsPutSlice";
import categoryReducer from "../features/categories/categorySlice";

const preloadedState = {
  login: {
    token: JSON.parse(localStorage.getItem("org_token")),
    roleId: JSON.parse(localStorage.getItem('userRole'))
  },
};

const store = configureStore({
  reducer: {
    publicInfo: publicInfoReducer,
    login: loginReducer,
    activity: activityReducer,
    newsDelete: newsDeleteReducer,
    newsPut: newsPutReducer,
    usersInfo: usersInfoReducer,
    category: categoryReducer

  },
  preloadedState,
});


window.onbeforeunload = () => {
  const state = store.getState();
  localStorage.setItem('org_token', JSON.stringify(state.login.token));
  localStorage.setItem('userRole', JSON.stringify(state.login.roleId));
}

export default store;
