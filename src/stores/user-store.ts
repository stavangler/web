import { values } from "mobx"
import { types, getParent, flow } from "mobx-state-tree"

export const User = types.model("User", {
    id: types.identifierNumber,
    name: types.string,
    token: types.string
})

export const UserStore = types
    .model("UserStore", {
        name: '',
        isAuthenticated: false, 
        token: ''
        //...
    })
    .views((self) => ({
        get user() {
            return {
                name: self.name,
                isAuthenticated: self.isAuthenticated
                /* ... */
            }
        }
    }))
    .actions((self) => {
        function signIn() {
            throw new Error('Not implemented')
        }
        function signOut() {
            throw new Error('Not implemented')
        }

        return {
            signIn, signOut
        }
    })