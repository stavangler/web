import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import TabMenu from '../components/tab-menu'
import Agenda from './trip-page/agenda'
import Participants from './trip-page/participants'
import Information from './trip-page/information'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%'
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        },
    }),
)


const TripPage = (props: any) => {
    const classes = useStyles()

    console.log(props.data)

    // const p = props.match.params.section
    // let idx = 0
    // if (p) {
    //     if (p == 'edit')
    //         console.log('edit todo')

    //     if (p == 'agenda')
    //         idx = 1
    // }

    return (
        <div className={classes.root}>
            <TabMenu index={0} children={[
                { label: 'Information', content: <Information /> },
                { label: 'Agenda', content: <Agenda /> },
                { label: 'Participants', content: <Participants /> }
            ]}></TabMenu>
        </div>
    )
}
export default TripPage