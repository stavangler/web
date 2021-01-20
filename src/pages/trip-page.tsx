import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import VTabs from '../components/_v-tabs'
import Agenda from './trip-page/agenda'
import Participants from './trip-page/participants'
import Information from './trip-page/information'
import FlatTabs from '../components/flat-tabs'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%'
        },
    }),
)


const TripPage = (props: any) => {
    const classes = useStyles()

    const tripId = props.match.params.id
    // const p = props.match.params.section
    // let idx = 0
    // if (p) {
    //     if (p == 'edit')
    //         console.log('edit todo')

    //     if (p == 'agenda')
    //         idx = 1
    // }

    return (
        <FlatTabs axis="vertical"
            children={[
                { label: 'Information', content: <Information tripId={tripId} /> },
                { label: 'Agenda', content: <Agenda tripId={tripId} /> },
                { label: 'Participants', content: <Participants tripId={tripId} /> }

            ]} ></FlatTabs>
        // <VTabs className={classes.root} index={0} children={[
        //     { label: 'Information', content: <Information tripId={tripId} /> },
        //     { label: 'Agenda', content: <Agenda tripId={tripId} /> },
        //     { label: 'Participants', content: <Participants tripId={tripId} /> }
        // ]}></VTabs>
    )
}
export default TripPage