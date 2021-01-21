import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
)

const Participants = (props:any) => {
    const classes = useStyles()

    // console.log(props.id)

    return (
        <Box m={2}>
            <Typography color="textSecondary">Participants</Typography>
        </Box>
    )
}
export default Participants