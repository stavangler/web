import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Card, Collapse, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton, Box, TextField } from '@material-ui/core'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import utils from '../common/utils'
import { tripStore } from '../stores/trip-store'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 0,
            background: theme.palette.primary.main
        },
        header: {
            alignItems: 'flex-start'
        },

        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.primary
        },
        table: {
            display: 'table',
        },
        row: {
            display: 'table-row',
        },
        cell: {
            padding: '.5em',
            display: 'table-cell',
            verticalAlign: 'top'
        },
        group: {
            display: 'flex',
            alignItems: 'flex-start',
            [`& > *`]: {},
        },
        icon: {
            color: theme.palette.text.secondary
        },
        strLink: {
            textDecoration: 'none',
            fontWeight: 'bold',
            color: theme.palette.secondary.main
        },
        cSpacing: { margin: '2em', padding: '1em' },
        cDeviceSpacing: { padding: '0' },
    }),
)

const EntryEditItem = (props: any) => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)
    const handleExpandClick = () => { setExpanded(!expanded) }
    const d = props.data

    // console.log(d)

    let avColor = utils.filterColors()[0]
    const tags = d.tags.toJSON()
    if (tags.length == 1) {
        avColor = utils.filterColors()[tripStore.tags.indexOf(tags[0])]
    }

    // d.speakers.toJSON()
    const speakers = ['John Doe', '1337 h4x0r', 'Max Powers'].join()

    return (
        <Card className={` ${classes.root} ${utils.isDevice() ? classes.cDeviceSpacing : classes.cSpacing}`}>
            <CardHeader
                className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} style={{ backgroundColor: avColor }}>
                        <Icon.Calendar size={16} />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Icon.MoreVertical className={classes.icon} size={16} />
                    </IconButton>
                }
                title={
                    <TextField fullWidth label="title" defaultValue={d.title} />
                }
                subheader={<Box m={1} className={classes.group}>
                    <Box mr={1}>
                        <Icon.Clock className={classes.icon} size={16} />
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {d.starttime} {d.endtime ? `- ${d.endtime}` : null} */}
                        <TextField
                            label="from"
                            type="time"
                            //value="07:30"
                            defaultValue={d.starttime}
                            // className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                        <TextField
                            label="to"
                            type="time"
                            //value="07:30"
                            defaultValue={d.endtime}
                            // className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </Typography>
                </Box>}
            />
            <CardContent>
                <Typography paragraph color="textSecondary">
                    <TextField fullWidth label="description" defaultValue={d.description} />
                </Typography>
            </CardContent>
            <CardContent>
                <Box className={classes.table}>

                    {
                        d.speakers ?
                            <>
                                <Box className={classes.row}>
                                    <Box className={classes.cell}>
                                        <Box className={classes.group}>
                                            <Box mr={1}>
                                                <Icon.User className={classes.icon} size={16} />
                                            </Box>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Foredragsholdere
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box className={classes.cell}>
                                        <TextField fullWidth label="speaker(s)" defaultValue={speakers} />
                                    </Box>
                                </Box>
                                <Box className={classes.row}>
                                    <Box className={classes.cell}>
                                        <Box className={classes.group}>
                                            <Box mr={1}>
                                                <Icon.Home className={classes.icon} size={16} />
                                            </Box>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Rom
                                        </Typography>
                                        </Box>
                                    </Box>
                                    <Box className={classes.cell}>
                                        <Typography variant="body2" color="textPrimary" component="p">
                                            <TextField fullWidth label="room" defaultValue={d.room} />
                                        </Typography>
                                    </Box>
                                </Box>
                            </>
                            :
                            <></>

                    }
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Icon.Heart className={classes.icon} size={16} />
                </IconButton>
            </CardActions>
        </Card>
    )
}
export default EntryEditItem