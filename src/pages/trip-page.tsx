import React from 'react'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import Agenda from './trip-page/agenda'
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

    const icr = theme.palette.action.disabled

    return (
        <FlatTabs
            axis="vertical"
            menuBg={theme.palette.secondary.dark}
            children={[
                { icon: <Icon.Clipboard color={icr} size={16} />, label: 'Agenda', content: <Agenda /> },
                { icon: <Icon.Info color={icr} size={16} />, label: 'Information', content: <Information /> },
                { icon: <Icon.Users color={icr} size={16} />, label: 'Participants', content: <Participants /> }
            ]} ></FlatTabs>
    )
}
export default TripPage