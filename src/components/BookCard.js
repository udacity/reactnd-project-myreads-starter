import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({

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
        backgroundColor: "red",
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});

const options = [
    "move",
    "currentlyReading",
    "wantToRead",
    "read",
    "none",
]

class BookCard extends Component {

    state = {
        expanded: false,
        anchorEl: null
    };

    componentDidMount() {
        this.setState({ isUILoaded: true })
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleMenuMoreClicked = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = (option) => {
        this.setState(() => ({ anchorEl: null }));
        if (option) {
            this.props.onShelfChanged(this.props.book, option)
        }
    };

    render() {
        const { book, classes } = this.props;
        const { expanded, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <Card raised={true} style={{ marginBottom: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" src={book.imageLinks ? book.imageLinks.smallThumbnail : null}>
                            {book.title[0]}
                        </Avatar>
                    }
                    action={
                        <div>
                            <IconButton
                                aria-label="More"
                                aria-owns={open ? 'long-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenuMoreClicked}>
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={() => this.handleClose()}
                                PaperProps={{
                                    style: {
                                        maxHeight: 100 * 4.5,
                                        width: 200,
                                    },
                                }}
                            >
                                {options.map(option => (
                                    <MenuItem
                                        key={option}
                                        value={option}
                                        disabled={option === "move" || option === book.shelf}
                                        onClick={() => this.handleClose(option)}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    }
                    title={book.title}
                    subheader={(book.authors) ? book.authors.join(", ") : book.publishedDate} />
                <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                    image={book.imageLinks ? book.imageLinks.thumbnail : "/default_cover.jpg"}
                    title={book.title}
                />
                <CardContent>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Typography gutterBottom variant="headline" component="h2">
                        {book.title}
                    </Typography>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="headline" component="h4">Description</Typography>
                        <Typography paragraph>{book.description}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChanged: PropTypes.func.isRequired
}

export default withStyles(styles)(BookCard);