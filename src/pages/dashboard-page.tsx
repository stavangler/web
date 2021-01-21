import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'
import TripItem from '../components/trip-item'
import { tripStore } from '../stores/trip-store'
import { observer } from 'mobx-react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
)

const DashboardPage = observer(() => {
    const classes = useStyles()

    return (
        <>
            {
                tripStore?.isLoading ?
                    <Box m={4}>loading...</Box>
                    :
                    <Box m={4}>
                        <Grid container spacing={3}>
                            {
                                tripStore.allTrips.map((t: any) =>
                                    <Grid item xs={12} sm={6} key={t.id}>
                                        <TripItem data={t}></TripItem>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
            }
        </>
    )
})
export default DashboardPage