import React from 'react'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import agenda from './trip-page/agenda'
import Participants from './trip-page/participants'
import Information from './trip-page/information'
import FlatTabs from '../components/flat-tabs'
import * as Icon from 'react-feather'

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
    const theme = useTheme()
    const tripId = props.match.params.id

    return (
        <FlatTabs
            axis="vertical"
            menuBg={theme.palette.secondary.dark}
            children={[
                { icon: <Icon.Info size={16} />, label: 'Information', content: <Information tripId={tripId} /> },
                { icon: <Icon.Clipboard size={16} />, label: 'Agenda', menu: agenda().menu, content: agenda().content },
                { icon: <Icon.Users size={16} />, label: 'Participants', content: <Participants tripId={tripId} /> }
            ]} ></FlatTabs>
    )
}
export default TripPage