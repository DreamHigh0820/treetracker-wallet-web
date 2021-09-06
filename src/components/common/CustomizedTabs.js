import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const StyledTab = withStyles({
  root: {
    backgroundColor: '#f7fbf7',
    color: '#67AC5B',
    opacity: 1,
    borderRadius: '8px',
  },
  selected: {
    backgroundColor: '#67AC5B',
    color: '#fff',
  },
})(Tab);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f7fbf7',
    borderRadius: '8px',
    width: '90%',
  },
}));

function CustomizedTabs({ tab1, tab2 }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.root}
        variant="fullWidth"
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        <StyledTab label={tab1} />
        <StyledTab label={tab2} />
      </Tabs>
    </>
  );
}

export default CustomizedTabs;
