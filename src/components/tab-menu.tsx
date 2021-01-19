import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%'
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
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

const TabMenu = (props: any) => {
    const classes = useStyles()
    const [value, setValue] = React.useState(props.index ?? 0)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {
                    props.children.map((c: any, i: number) =>
                        <Tab key={uuidv4()} label={c.label} {...a11yProps(i)} />
                    )
                }
            </Tabs>
            {
                props.children.map((c: any, i: number) =>
                    <TabContent key={uuidv4()} value={value} index={i}>{c.content}</TabContent>
                )
            }
        </div>
    )
}
export default TabMenu