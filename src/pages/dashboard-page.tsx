import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'
import TripItem from '../components/trip-item'
import store from '../stores/store'
import { observer } from 'mobx-react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
)

const DashboardPage = observer(() => {
    const classes = useStyles()

    const { allTrips } = store.tripStore

    store.tripStore.loadTrips() // ! test test ...

    console.log(store.tripStore.isLoading)
    console.log(allTrips)

    return (
        <Grid container spacing={3}>
            {
                store.tripStore.isLoading ?
                    <Box m={2}>'loading...'</Box> :
                    allTrips.map((t: any) =>
                        <Grid item xs={12} sm={6} lg={4} key={t.id}>
                            <TripItem data={t}></TripItem>
                        </Grid>
                    )
            }
        </Grid>
    )
})
export default DashboardPage