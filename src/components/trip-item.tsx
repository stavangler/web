import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { theme } from "../common/theme"
import * as Icon from 'react-feather'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: 0,
            // maxWidth: 345,
        },
        media: { height: 140 },
        content: { margin: 16 }
    }),
)

const TripItem = (props: any) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.data.imgUrl}
                    title="Contemplative Reptile"
                />
                <CardHeader
                    // avatar={
                    //     <Avatar aria-label="recipe" className={classes.avatar}>
                    //         R
                    //     </Avatar>
                    // }
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <Icon.Menu size="16" />
                    //     </IconButton>
                    // }
                    title={props.data.title}
                    subheader="September 14, 2016"
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}
export default TripItem