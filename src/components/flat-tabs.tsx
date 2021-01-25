import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flex: 1
        },
        horizontal: { flexDirection: 'row', width: '100%' },
        vertical: { flexDirection: 'column' },
        menu: {
            display: 'flex',
            // flex: 1
        },
        content: {
            flex: 'auto'
        },
        button: {
            color: theme.palette.info.main
        },
        bPadding: { padding: '2em' },
        bDevicePadding: { padding: '1em' },
        auxiliary: {
            position: 'fixed',
            bottom: 0,
            right: 0
        },
        iconButtonWText : {
            display: 'flex'
        }
    }),
)

const FlatTabs = (props: any) => {
    const history = useHistory()
    const classes = useStyles()
    const isDevice = useMediaQuery({ query: '(max-width: 1024px)' })

    const [index, setIndex] = useState(0)

    const d = props.axis == 'horizontal'
    const rootAxisClass = d ? classes.vertical : classes.horizontal
    const menuAxisClass = d ? classes.horizontal : classes.vertical

    return (
        <div className={`${classes.root} ${rootAxisClass}`}>
            <div className={`${classes.menu} ${menuAxisClass}`} style={{ background: props.menuBg }}>
                {
                    props.children.map((c: any, i: number) =>
                        <IconButton size="small" className={`${classes.button} ${isDevice ? classes.bDevicePadding : classes.bPadding}`} key={uuidv4()} onClick={() => setIndex(i)}>
                            {
                                isDevice ?
                                    c.icon :
                                    <div className="iconButtonWText">
                                        <div>{c.icon}</div> 
                                        <div>{c.label}</div>
                                    </div>
                            }
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
            {/* 
            <div className={classes.auxiliary}>
                { props.children[index].menu() ?? null }
            </div> */}
        </div>
    )
}
export default FlatTabs