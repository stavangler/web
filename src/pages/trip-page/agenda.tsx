import React, { useContext, useEffect, useRef } from 'react'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import { Avatar, Box, Chip } from '@material-ui/core'
import * as Icon from 'react-feather'
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        menuChip: {
            flex: 1,
            margin: '1em',
        },
        contentRoot: {
            display: 'flex',
            overflow: 'auto',
            width: '100%'
        },
        contentContainer: {
            display: 'flex',
            width: 0
        },
        contentChip: {
            margin: '1em',
        },
    }),
)

const agenda = () => {

    const classes = useStyles()
    const theme = useTheme()

    const testDays = [
        { day: 'Mo', label: '23/5' },
        { day: 'Tu', label: '24/5' },
        { day: 'We', label: '25/5' },
        { day: 'Th', label: '26/5' }
    ]

    const testFilters = ['routine', 'dev', 'lecture']

    return {
        menu:
            <Box m={2} className={classes.menuContainer}>
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
        ,
        content:
            <Box my={0} className={classes.contentRoot}>
                <Box className={classes.contentContainer}>
                    {
                        testDays.map((d: any) =>
                            <Chip
                                className={classes.contentChip}
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
    }
}
export default agenda