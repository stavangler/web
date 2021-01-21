import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import utils from '../common/utils'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            height: '100%',
            // background: theme.palette.secondary.dark
            // borderRadius: 0,
            // maxWidth: 345,
        },
        horizontal: { flexDirection: 'row', width: '100%' },
        vertical: { flexDirection: 'column', height: '100%' },
        menu: {
            display: 'flex',
            // flex: 1
        },
        // bg: { background: theme.palette.primary.dark },
        content: {
            flex: 'auto'
        },
        button: {},
        bPadding: { padding: '2em' },
        bDevicePadding: { padding: '1em' },
        // stdButton: { width: 40, height: 40 }, // todo: move to common styles
        // media: { height: 140 },
        // content: { margin: 16 },
        // flexSplit: {
        //     display: 'flex',
        //     justifyContent: 'space-between'
        // }
    }),
)

const FlatTabs = (props: any) => {
    const history = useHistory()
    const classes = useStyles()
    const isDevice = useMediaQuery({ query: '(max-width: 1224px)' })

    const [index, setIndex] = React.useState(0)

    const d = props.axis == 'horizontal'
    const rootAxisClass = d ? classes.vertical : classes.horizontal
    const menuAxisClass = d ? classes.horizontal : classes.vertical

    return (
        <div className={`${classes.root} ${rootAxisClass}`}>
            <div className={`${classes.menu} ${menuAxisClass}`} style={{ background: props.menuBg }}>
                {
                    props.children.map((c: any, i: number) =>
                        <IconButton size="small" className={`${classes.button} ${isDevice ? classes.bDevicePadding : classes.bPadding}`} key={uuidv4()} onClick={() => setIndex(i)}>
                            {isDevice ? c.icon : c.label}
                        </IconButton>
                    )
                }
            </div>
            <div className={classes.content}>
                {
                    props.children.map((c: any, i: number) =>
                        index == i ? <div key={uuidv4()}>{c.content}</div> : <div key={uuidv4()}></div>
                    )
                }
            </div>
        </div>
    )
}
export default FlatTabs