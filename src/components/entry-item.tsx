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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 0,
            background: theme.palette.primary.main
            // maxWidth: 345,
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
            verticalAlign: 'middle'
        },
        group: {
            display: 'flex',
            alignItems: 'center',
            [`& > *`]: { /* */},
        },
        icon: {
            // marginRight: '.5em',
            color: theme.palette.text.secondary
        },
        strLink: {
            textDecoration: 'none',
            fontWeight: 'bold',
            color: theme.palette.secondary.main
        }
    }),
)

const EntryItem = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className={classes.root}>
            <CardHeader
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
                title="Medisinsk simulering som et distribuert system"
                // subheader="09:30 - 10:00 | 30:00 minutter"
                subheader={<Box m={1} className={classes.group}>
                    <Box mr={1}>
                        <Icon.Clock className={classes.icon} size={16} />
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        09:30 - 10:00
                    </Typography>
                </Box>}
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph color="textSecondary">
                        Laerdal Medical har de siste femten årene basert mye av simuleringen sin på noen få applikasjoner. Disse monolittene skulle dekke hvert sitt domene men har over tid utviklet seg til å prøve å favne over alle simuleringsdomener - med overlapping av hverandre. LM ønsket en fleksibel arkitektur som tillater rask prototyping samt klinisk nøyaktighet - dette arbeidet er påbegynt.
                    </Typography>
                </CardContent>
            </Collapse>
            <CardContent>
                <Box className={classes.table}>
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
                            <Link to=".." className={classes.strLink}>Aleksander</Link>
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
                                Van Gogh 2
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Icon.Heart className={classes.icon} size={16} />
                </IconButton>
                <IconButton aria-label="share">
                    <Icon.Share2 className={classes.icon} size={16} />
                </IconButton>
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
            </CardActions>
        </Card>
    )
}
export default EntryItem