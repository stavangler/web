import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
)

const Information = (props:any) => {
    const classes = useStyles()

    // console.log(props.id)

    return (
        <Box m={2}>
            <Typography color="textSecondary">Information</Typography>
        </Box>
    )
}
export default Information