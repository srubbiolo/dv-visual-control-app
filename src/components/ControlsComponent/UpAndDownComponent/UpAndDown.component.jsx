import  React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Icon } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  increaseDecrease: {
    fontSize: '1.5em',
    cursor: 'pointer',
    color: '#000'
  },
  icon: {
    fontSize: '1.1em',
    color: '#000'
  }
}));

const UpAndDownComponent = ({ iconText, incFunction, decFunction} ) => {
  const classes = useStyles();
  return (
    <Box>
      <Icon className={classes.increaseDecrease} onClick={() => decFunction()}>remove_circle</Icon>
      <Icon className={classes.icon}> {iconText}</Icon>
      <Icon className={classes.increaseDecrease} onClick={() => incFunction()}>add_circle_outline</Icon>
    </Box>
  )
}

export default UpAndDownComponent;