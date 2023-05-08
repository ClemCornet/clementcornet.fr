import { atom, action } from "nanostores"

export const navigationStore = atom("static")

export const setNavigation = action(
  navigationStore,
  "setNavigation",
  (store, navigation) => {
    store.set(navigation)
  }
)
