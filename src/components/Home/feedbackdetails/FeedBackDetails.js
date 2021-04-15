import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const FeedBackDetails = ({feedback}) => {
    const classes = useStyles();
    const {name, photo, description} = feedback;
    return (
        <div className="col-md-3 ml-5 p-2 border border-dark">
        <div className="d-flex">
        <Avatar  src={photo} className={classes.large} />
            <h4 className=" ml-5">{name}</h4>
        </div>
        <p>{description}</p>
            
        </div>
    );
};

export default FeedBackDetails;