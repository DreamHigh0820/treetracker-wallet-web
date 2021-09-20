import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '48px',
    width: '48px',
    borderRadius: '32px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
  },
}));

const BackButton = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <button
      className={classes.root}
      type="button"
      onClick={() => history.goBack()}
    >
      <NavigateBeforeIcon style={{ fontSize: 24 }} color="primary" />
    </button>
  );
};

export default BackButton;
