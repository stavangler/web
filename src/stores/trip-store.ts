import { values } from "mobx"
import { types, getParent, flow } from "mobx-state-tree"
import api from '../common/api'
import { boolean } from "mobx-state-tree/dist/internal"

// trip
export const Trip = types.model("Trip", {
    id: types.identifierNumber,
    title: types.string,
    description: types.string,
    imgUrl: types.string,
    date: types.string,
})

// agenda entry
export const Entry = types.model("Entry", {
    id: types.identifierNumber,
    date: types.string,
    title: types.string,
    description: types.maybeNull(types.string),
    room: types.maybeNull(types.string),
    speakers: types.array(types.string),
    starttime: types.string,
    endtime: types.maybeNull(types.string),
})

export const TripStore = types
    .model("TripStore", {
        isLoading: true,
        trips: types.map(Trip),
        entries: types.map(Entry),
        selectedTrip: types.safeReference(Trip),
        selectedEntry: types.safeReference(Entry),
        // inEditMode: types.boolean
    })
    .views((self) => ({
        // get root(): any {
        //     return getParent(self)
        // },
        get allTrips() {
            return values(self.trips)
        },
        get loadedEntries() {
            return values(self.entries)
        }
        // get select() {
        //     throw new Error('Not implemented')
        // },
        // get edit() {
        //     throw new Error('Not implemented')
        // }
    }))
    .actions((self) => {
        // const selectTrip = (tripId: number) => {

        // }
        // const getDayEntries = (tripId: number, date: string) => {
        //     loadEntries({ tripId: tripId, date: date })
        // }
        const markLoading = (isLoading: boolean) => {
            self.isLoading = isLoading
        }
        const setTrips = (items: any) => {
            values(self.trips)
            items.forEach((item: any) => {
                self.trips.put(item)
            })
        }
        const setEntries = (items: any) => {
            values(self.entries)
            items.forEach((item: any) => {
                self.entries.put(item)
            })
        }
        const loadTrips = flow(function* loadTrips() {
            try {
                const query = {}
                const result = yield api().postAsync('trips', query)
                // console.log(result)
                setTrips(result)
                markLoading(false)
            } catch (err) {
                console.error("Failed to load trips", err)
            }
        })
        const loadEntries = flow(function* loadEntries(query) {
            try {
                const result = yield api().postAsync('trip/agenda', query)
                //console.log(result)
                setEntries(result)
            } catch (err) {
                console.error("Failed to load entries", err)
            }
        })

        return {
            loadEntries,
            afterCreate() {
                loadTrips()
            }
        }
    })

export const tripStore = TripStore.create({})