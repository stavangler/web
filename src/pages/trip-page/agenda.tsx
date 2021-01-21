import React from 'react'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import { Avatar, Box, Chip } from '@material-ui/core'
import HTabs from '../../components/_h-tabs'
import FlatTabs from '../../components/flat-tabs'
import * as Icon from 'react-feather'
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            overflow: 'auto',
            width: '100%'
        },
        container: {
            display: 'flex',
            width: 0
        },
        chip: {
            margin: '1em',
        },
    }),
)

const Agenda = (props: any) => {
    const classes = useStyles()
    const theme = useTheme()
    // console.log(props.id)

    const test = [
        { av: 'Mo', label: '23/5' },
        { av: 'Tu', label: '24/5' },
        { av: 'We', label: '25/5' },
        { av: 'Th', label: '26/5' }
    ]

    return (
        <Box my={0} className={classes.root}>
            <Box className={classes.container}>
                {
                    test.map((t: any) =>
                        <Chip
                            className={classes.chip}
                            key={uuidv4()}
                            avatar={<Avatar>{t.av}</Avatar>}
                            label={t.label}
                            clickable
                            color="primary"
                            // onDelete={handleDelete}
                            deleteIcon={<Icon.X size={16} />}
                        />

                    )
                }
            </Box>
        </Box>
        // <FlatTabs 
        //     axis="horizontal"
        //     menuBg={theme.palette.secondary.main}
        //     children={[
        //         { label: 'Monday', content: <Box m={4}>test1</Box> },
        //         { label: 'Tuesday', content: <Box m={4}>test2</Box> },
        //         { label: 'Wednesday', content: <Box m={4}>test3</Box> }
        //     ]} ></FlatTabs>
    )
}
export default Agenda