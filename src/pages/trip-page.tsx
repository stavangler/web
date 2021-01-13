import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import TabMenu from '../components/tab-menu'

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


const TripPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TabMenu children={[
                { label: 'Information', content: <Box m={2}>Info page todo</Box> },
                { label: 'Agenda', content: <Box m={1}>Agenda page todo</Box> },
                { label: 'Participants', content: <Box m={3}>Participants todo</Box> }
            ]}></TabMenu>
        </div>
    )
}
export default TripPage