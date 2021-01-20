import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import HTabs from '../../components/_h-tabs'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
)

const Agenda = (props: any) => {
    const classes = useStyles()

    // console.log(props.id)

    return (
        <div>agenda</div>
        // <HTabs index={0} children={[
        //     { label: 'Day 1', content: <div>day1</div> },
        //     { label: 'Day 2', content: <div>day2</div> },
        //     { label: 'Day 3', content: <div>day3</div> }
        // ]}></HTabs>
    )
}
export default Agenda