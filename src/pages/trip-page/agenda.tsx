import React, { useContext, useEffect, useRef } from 'react'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import { Avatar, Box, Chip, Divider, IconButton, Typography } from '@material-ui/core'
import * as Icon from 'react-feather'
import { v4 as uuidv4 } from 'uuid'
import { tripStore } from '../../stores/trip-store'
import { observer } from 'mobx-react'
import EntryItem from '../../components/entry-item'
import utils from '../../common/utils'
import EntryEditItem from '../../components/entry-edit-item'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        filterChip: {
            flex: 1,
            margin: '.5em',
            backgroundColor: theme.palette.action.selected,
            color: theme.palette.secondary.dark,
            padding: '1em 1em',
            // borderColor: theme.palette.info.main,
            // borderWidth: 2,
            // fontWeight: 600,
            [`& span`]: {
                // fontSize: '12px !important',
                textTransform: 'uppercase'
            },
        },
        daysRoot: {
            display: 'flex',
            overflow: 'auto',
            // width: '100%'
        },
        daysContainer: {
            display: 'grid',
            gridAutoFlow: 'column',
            margin: 1,
            gridGap: 1,
            width: '100%',
            marginBottom: '1em'
        },
        daysButton: {
            // flex: 1,
            // marginRight: 2,
            padding: '1em',
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.info.main,
            fontSize: '12px'
        }
        // auxiliary: {
        //     position: 'fixed',
        //     bottom: 0,
        //     right: 0
        // }
    }),
)

const Agenda = observer(() => {

    const classes = useStyles()
    const theme = useTheme()

    // ! todo: find nr of days in trip
    const testDays = [
        { day: 'Mo', label: 'Tue 23.5' },
        { day: 'Tu', label: 'Wed 24.5 ' },
        { day: 'We', label: 'Thu 25.5' },
        { day: 'Th', label: 'Fri 26.5' }
    ]

    // ! todo: load entries by day
    useEffect(() => {
        const testquery = { tripId: 1, date: '2019-09-21' }
        tripStore.loadEntries(testquery)
    })

    return (
        <Box my={0} className={classes.root}>
            <Box className={`${classes.daysRoot}`}>
                <Box className={classes.daysContainer}>
                    {
                        testDays.map((d: any) =>
                            <IconButton key={uuidv4()} size="small" className={classes.daysButton}>{d.label}</IconButton>
                            // <Chip
                            //     className={classes.daysChip}
                            //     key={uuidv4()}
                            //     avatar={<Avatar>{d.day}</Avatar>}
                            //     label={d.label}
                            //     clickable
                            //     color="primary"
                            //     // onDelete={handleDelete}
                            //     deleteIcon={<Icon.X size={16} />}
                            // />

                        )
                    }
                </Box>
            </Box>
            <Box mx={2}>
                {
                    tripStore.tags.map((f: any, i: any) =>
                        <Chip
                            // variant="outlined"
                            style={{ backgroundColor: utils.filterColors()[i] }}
                            size="small"
                            className={classes.filterChip}
                            key={uuidv4()}
                            label={f}
                            clickable
                        />
                    )
                }
            </Box>
            <Box m={2}>
                {
                    // EDIT ITEM TESTING...
                    tripStore.loadedEntries.length ?
                        <EntryEditItem data={tripStore.loadedEntries[0]} />
                        :
                        <></>
                }
                {
                    tripStore.loadedEntries.length ?
                        // Array(5).fill(5)
                        tripStore.loadedEntries.map((e: any) =>
                            <Box my={2} key={uuidv4()}>
                                <EntryItem data={e} />
                            </Box>
                        )
                        :
                        <></>
                }
            </Box>
        </Box>
    )
})
export default Agenda