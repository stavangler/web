import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: { 
            margin: 16, 
            borderRadius: 0,
            padding: 16
        }
    }),
)

const TripItem = (props: any) => {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            {props.data.title}
        </Paper>
    )
}
export default TripItem