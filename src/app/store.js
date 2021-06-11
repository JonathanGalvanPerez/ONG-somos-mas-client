import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import publicInfoReducer from "./publicInfoSlice";
import loginReducer from "../features/login/loginSlice";
import usersInfoReducer from "./usersInfoSlice";
import activityReducer from "../features/activities/activitySlice";
import newsDeleteReducer from "../features/news/newsDeleteSlice";
import newsPutReducer from "../features/news/newsPutSlice";

const preloadedState = {
  login: {
    token: JSON.parse(localStorage.getItem("org_token")),
    roleId: JSON.parse(localStorage.getItem('userRole'))
  },
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    publicInfo: publicInfoReducer,
    login: loginReducer,
    activity: activityReducer,
    newsDelete: newsDeleteReducer,
    newsPut: newsPutReducer,
<<<<<<< HEAD
    usersInfo: usersInfoReducer,
    activity: activityReducer

=======
    usersInfo: usersInfoReducer
>>>>>>> master
  },
  preloadedState,
});

<<<<<<< HEAD
store.subscribe(() => {
  localStorage.setItem('org_token', JSON.stringify(store.getState().login.token));
})
=======
window.onbeforeunload = () => {
  const state = store.getState();
  localStorage.setItem('org_token', JSON.stringify(state.login.token));
  localStorage.setItem('userRole', JSON.stringify(state.login.roleId));
}
>>>>>>> master

export default store;
