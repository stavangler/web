import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%',
            flexDirection: 'column'
        },
        tabs: {
            [`& .MuiTabs-scroller`]: {
                boxShadow: 'inset 0px -2px 0px 0px rgba(0,0,0,0.1)'
            }
            // borderRight: `1px solid ${theme.palette.divider}`,
        },
    }),
)

const TabContent = (props: any) => {
    const { children, value, index, ...other } = props
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>{children}</>
            )}
        </div>
    )
}

const a11yProps = (index: any) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

const HTabs = (props: any) => {
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = React.useState(props.index ?? 0)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index: number) => {
        setValue(index)
    }

    return (
        <div className={classes.root}>
            <Tabs
                variant="scrollable"
                // scrollButtons="on"
                value={value}
                onChange={handleChange}
                aria-label="Horizontal tabs example"
                // centered
                className={classes.tabs}
            >
                {
                    props.children.map((c: any, i: number) =>
                        <Tab key={uuidv4()} label={c.label} {...a11yProps(i)} />
                    )
                }
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    props.children.map((c: any, i: number) =>
                        <TabContent key={uuidv4()} value={value} index={i}>{c.content}</TabContent>
                    )
                }
            </SwipeableViews>
        </div>
    )
}
export default HTabs