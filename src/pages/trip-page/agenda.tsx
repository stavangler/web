import React, { useContext, useEffect, useRef } from 'react'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import { Avatar, Box, Chip, Typography } from '@material-ui/core'
import * as Icon from 'react-feather'
import { v4 as uuidv4 } from 'uuid'
import { tripStore } from '../../stores/trip-store'
import { observer } from 'mobx-react'
import EntryItem from '../../components/entry-item'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        menuContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        menuChip: {
            flex: 1,
            margin: '1em',
        },
        daysRoot: {
            display: 'flex',
            overflow: 'auto',
            width: '100%'
        },
        daysContainer: {
            display: 'flex',
            width: 0
        },
        daysChip: {
            margin: '1em',
        },
        auxiliary: {
            position: 'fixed',
            bottom: 0,
            right: 0
        }
    }),
)

const Agenda = observer(() => {

    const classes = useStyles()
    const theme = useTheme()

    const testDays = [
        { day: 'Mo', label: '23/5' },
        { day: 'Tu', label: '24/5' },
        { day: 'We', label: '25/5' },
        { day: 'Th', label: '26/5' }
    ]

    const testFilters = ['routine', 'dev', 'lecture']

    useEffect(() => {
        const testquery = { tripId: 1, date: '2019-09-20' }
        tripStore.loadEntries(testquery)
    })

    return (
        <Box my={0} className={classes.root}>
            <Box my={0} className={classes.daysRoot}>
                <Box className={classes.daysContainer}>
                    {
                        testDays.map((d: any) =>
                            <Chip
                                className={classes.daysChip}
                                key={uuidv4()}
                                avatar={<Avatar>{d.day}</Avatar>}
                                label={d.label}
                                clickable
                                color="primary"
                                // onDelete={handleDelete}
                                deleteIcon={<Icon.X size={16} />}
                            />

                        )
                    }
                </Box>
            </Box>
            <Box m={2}>
                {
                    // tripStore.loadedEntries.map.......
                    Array(5).fill(5).map((e: any) =>
                        <Box my={2} key={uuidv4()}>
                            <EntryItem />
                        </Box>
                    )
                }
            </Box>
            <Box m={2} className={classes.auxiliary}>
                {
                    testFilters.map((f: any) =>
                        <Chip
                            className={classes.menuChip}
                            key={uuidv4()}
                            label={f}
                            clickable
                            color="primary"
                        />
                    )
                }
            </Box>
        </Box>
    )
})
export default Agenda