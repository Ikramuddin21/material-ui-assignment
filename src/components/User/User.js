import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './User.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

const User = (props) => {
    const {id, title} = props.user;
    const classes = useStyles();
    return (
        <div className="user">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="primary" gutterBottom>
                      userId: {id}
                    </Typography>
                    <br/>
                    <Typography className={classes.pos} color="primary">
                      Title: {title}
                    </Typography>
                </CardContent>
                <Link to={"/user/"+id}><button>See More</button></Link>
            </Card>
        </div>
    );
};

export default User;