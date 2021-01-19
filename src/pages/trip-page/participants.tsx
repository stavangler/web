import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
)

const Participants = () => {
    const classes = useStyles()
    return (
        <Box m={2}>
            [ Participants ]
        </Box>
    )
}
export default Participants