import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { theme } from "../common/theme"
import * as Icon from 'react-feather'
import utils from '../common/utils'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 0,
            // maxWidth: 345,
        },
        stdButton: { width: 40, height: 40 }, // todo: move to common styles
        media: { height: 140 },
        content: { margin: 16 },
        flexSplit: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }),
)

const TripItem = (props: any) => {
    const history = useHistory()
    const classes = useStyles()

    return (
        <Card className={classes.root} onClick={() => history.push(`trip/${props.data.id}`)}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.data.imgUrl}
                    title="Contemplative Reptile"
                />
                <CardHeader className={classes.content}
                    title={props.data.title}
                    subheader={utils.shortDate(props.data.date)}
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.flexSplit}>
                {/* <div>
                    {utils.shortDate(props.data.date)}
                </div> */}
                {/* <IconButton title="Agenda" className={classes.stdButton} onClick={() =>  }>
                    <Icon.Clipboard size={16} />
                </IconButton> */}
                <IconButton title="Edit trip" className={classes.stdButton} onClick={() => { /* ... */ }}>
                    <Icon.Edit2 size={16} />
                </IconButton>
            </CardActions>
        </Card>
    )
}
export default TripItem