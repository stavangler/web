import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { theme } from "../common/theme"
import * as Icon from 'react-feather'
import utils from '../common/utils'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'


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
            background: theme.palette.secondary.dark
            // flex: 1
        },
        content: {
            // flex: 'auto'
        },
        button: {
            padding: '2em',
            
        },
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

    const [index, setIndex] = React.useState(0)

    const d = props.axis == 'horizontal'
    const rootAxisClass = d ? classes.vertical : classes.horizontal
    const menuAxisClass = d ? classes.horizontal : classes.vertical

    return (
        <div className={`${classes.root} ${rootAxisClass}`}>
            <div className={`${classes.menu} ${menuAxisClass}`}>
                {
                    props.children.map((c: any, i: number) =>
                        <IconButton size="small" className={classes.button} key={uuidv4()} onClick={() => setIndex(i)}>{c.label}</IconButton>
                    )
                }
            </div>
            <div>
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