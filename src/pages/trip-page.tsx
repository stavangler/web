import React from 'react'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import Agenda from './trip-page/agenda'
import Participants from './trip-page/participants'
import Information from './trip-page/information'
import FlatTabs from '../components/flat-tabs'
import * as Icon from 'react-feather'
import { Divider } from '@material-ui/core'

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

    const color1 = theme.palette.action.disabled
    const color2 = theme.palette.action.focus

    return (
        <FlatTabs
            axis="vertical"
            menuBg={theme.palette.secondary.dark}
            children={[
                { icon: <Icon.Calendar color={color1} size={16} />, label: 'Agenda', content: <Agenda /> },
                { icon: <Icon.Info color={color1} size={16} />, label: 'Information', content: <Information /> },
                { icon: <Icon.Users color={color1} size={16} />, label: 'Participants', content: <Participants /> },
                <Divider />,
                { icon: <Icon.Edit color={color2} size={16} />, label: 'Edit day', content: <div>edit</div> },
                { icon: <Icon.Plus color={color2} size={16} />, label: 'Add day', content: <div>add</div> },
            ]} ></FlatTabs>
    )
}
export default TripPage