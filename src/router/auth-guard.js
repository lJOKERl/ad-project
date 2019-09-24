import store from "../store";

export default function (to, from, next) {
  if (store.getters.user) {
    console.log(store.getters.user);
    
    next()
  } else {
    next('/login?loginError=true')
  }
}