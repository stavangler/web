import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Card, Collapse, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton, Box } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'
import utils from '../common/utils'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 0,
            background: theme.palette.primary.main
            // maxWidth: 345,
        },
        header: {
            alignItems: 'flex-start'
        },
        // media: {
        //     height: 0,
        //     paddingTop: '56.25%', // 16:9
        // },
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
            color: theme.palette.info.main
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
            [`& > *`]: { /* */ },
        },
        icon: {
            // marginRight: '.5em',
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

const EntryItem = (props: any) => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)
    const handleExpandClick = () => { setExpanded(!expanded) }
    const d = props.data

    return (
        <Card className={` ${classes.root} ${utils.isDevice() ? classes.cDeviceSpacing : classes.cSpacing}`}>
            <CardHeader
                className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Icon.MoreVertical className={classes.icon} size={16} />
                    </IconButton>
                }
                title={d.title}
                subheader={<Box m={1} className={classes.group}>
                    <Box mr={1}>
                        <Icon.Clock className={classes.icon} size={16} />
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {d.starttime} {d.endtime ? `- ${d.endtime}` : null}
                    </Typography>
                </Box>}
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph color="textSecondary">
                        {d.description}
                    </Typography>
                </CardContent>
            </Collapse>
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
                                        <Link to=".." className={classes.strLink}>{d.speakers.toJSON()
                                            .map((s: any, i: any) => `${i > 0 ? ',' : ''} ${s}`)}
                                        </Link>
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
                                            {d.room}
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
                {/* <IconButton aria-label="share">
                    <Icon.Share2 className={classes.icon} size={16} />
                </IconButton> */}
                {
                    d.description ?
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <Icon.ChevronDown className={classes.icon} size={16} />
                        </IconButton>
                        : <></>
                }
            </CardActions>
        </Card>
    )
}
export default EntryItem