import { values } from "mobx"
import { types, getParent, flow } from "mobx-state-tree"

export const User = types.model("User", {
    id: types.identifier,
    //...
})

export const UserStore = types
    .model("UserStore", {
        isAuthenticated: false,
        //...
    })
    .views((self) => ({
        // view functions..
    }))
    .actions((self) => { 
        throw new Error('Not implemented')
    })