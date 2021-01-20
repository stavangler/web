import { values } from "mobx"
import { types, getParent, flow } from "mobx-state-tree"
import api from '../common/api'
import { boolean } from "mobx-state-tree/dist/internal"

export const Trip = types.model("Trip", {
    id: types.identifierNumber,
    title: types.string,
    description: types.string,
    imgUrl: types.string,
    date: types.string,
    //...
})

export const TripStore = types
    .model("TripStore", {
        isLoading: true,
        trips: types.map(Trip),
        // selected: types.reference(Trip),
        // inEditMode: types.boolean
    })
    .views((self) => ({
        // get root(): any {
        //     return getParent(self)
        // },
        get allTrips() {
            return values(self.trips)
        },
        get select() {
            throw new Error('Not implemented')
        },
        get edit() {
            throw new Error('Not implemented')
        }
    }))
    .actions((self) => {
        const markLoading = (isLoading: boolean) => {
            self.isLoading = isLoading
        }
        const updateTrips = (items: any) => {
            values(self.trips)
            items.forEach((item: any) => {
                self.trips.put(item)
            })
        }
        const loadTrips = flow(function* loadTrips() {
            try {
                // const query = { date: '2019-09-20' }
                const query = {}
                const result = yield api().postAsync('trips', query)

                //const result = yield self.root.api.postAsync()
                // const test: Promise<string> = async () => { return 'test'}
                // const result = yield self.root.api.postAsync()
                updateTrips(result)
                markLoading(false)
            } catch (err) {
                console.error("Failed to load trips", err)
            }
        })

        return {
            // loadTrips,
            afterCreate() {
                loadTrips()
            }
        }
    })

export const tripStore = TripStore.create({})