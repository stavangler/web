import { types, getEnv } from "mobx-state-tree"
import { UserStore } from "./user-store"
import { TripStore } from "./trip-store"

const RootStore = types
    .model("RootStore", {
        userStore: types.optional(UserStore, {
            //...
        }),
        tripStore: types.optional(TripStore, {
            // trips: []
        }),
    })

const store = RootStore.create(
    {},
    {
        // api: Api(),
        // alert: (m) => console.log(m)
    }
)

export default store