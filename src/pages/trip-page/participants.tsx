import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
)

const Participants = (props:any) => {
    const classes = useStyles()

    // console.log(props.id)

    return (
        <Box m={2}>
            [ Participants ]
        </Box>
    )
}
export default Participants