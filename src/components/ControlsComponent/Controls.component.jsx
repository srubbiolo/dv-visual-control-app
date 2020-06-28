import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVolume, setBrightness, setContrast, setPlayStatus } from '../../app-state/actions';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, InputLabel, MenuItem, FormControl, Select, Icon, Typography, Divider} from '@material-ui/core';

import UpAndDownComponent from './UpAndDownComponent/UpAndDown.component';
import DisplayComponent from '../DisplayComponent/Display.component';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: ['Roboto', 'sans-serif'],
  },
  settingsContainer: {
    textAlign: 'center',    
  },
  paddintTop0: {
    paddingTop: ' 0!important'
  },
  paddintbottom0: {
    paddingbottom: ' 0!important'
  },
  box: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#000',
  },
  formControl: {
    margin: theme.spacing(1),
    maxWidth: '90%',
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  playIcon: {
    fontSize: '5em',
    cursor: 'pointer',
    color: '#55f12e'
  },
  pauseIcon: {
    fontSize: '5em',
    cursor: 'pointer',
    color: '#d2351c'
  },
  percentageP: {
    color: '#000',
    fontSize: '0.7em',
    marginTop: 0
  },
  movieSubtitle: {
    marginLeft: 20
  },
  appHeader: {
    backgroundColor: '#c8e6e6',
    borderRadius: '0 0 5px 5px',
    marginBottom: '20px'
  }
}));

const ControlsComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const allVideos = useSelector(state => state.allVideos);
  const [ selectedVideo, setSelectedVideo ] = useState('');

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.value);
  };

  const increaseVolume = () => dispatch(setVolume(true))
  const decreaseVolume = () => dispatch(setVolume(false))
  const increaseBright = () => dispatch(setBrightness(true))
  const decreaseBright = () => dispatch(setBrightness(false))
  const increaseContrast = () => dispatch(setContrast(true))
  const decreaseContrast = () => dispatch(setContrast(false))
  const togglePlayPuse = () => dispatch(setPlayStatus())

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.appHeader}>
          <Box className={classes.box}>
            <Typography variant="h3" component="h2" gutterBottom>
              Deep Vision video player
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className={classes.box}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Movie</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedVideo}
                onChange={handleVideoChange}
              >
              {allVideos.map( (movie, index) => (
                <MenuItem key={index} value={movie}>{movie.title}</MenuItem>
              ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={12} sm={7}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" component="h2" className={classes.movieSubtitle} gutterBottom>
                {selectedVideo.description}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.paddintBottom0}>
              <Box className={classes.box}>
                { (selectedVideo !== '') && <DisplayComponent {...selectedVideo}/>}
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.paddintTop0}>
              { (selectedVideo !== '') && <Grid container className={classes.settingsContainer}>
                <Grid item xs={3}>
                  <Box className={classes.box}>
                    <UpAndDownComponent 
                      iconText="brightness_medium"
                      incFunction={increaseBright}
                      decFunction={decreaseBright}
                    />
                    <p className={classes.percentageP}>{`${state.bright}%`}</p>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className={classes.box}>
                  <UpAndDownComponent 
                    iconText="exposure"
                    incFunction={increaseContrast}
                    decFunction={decreaseContrast}
                  />
                  <p className={classes.percentageP}>{`${state.contrast}%`}</p>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className={classes.box} >
                    { !state.playStatus && <Icon className={classes.playIcon} onClick={() => togglePlayPuse()}>play_circle_outline</Icon>}
                    { state.playStatus && <Icon className={classes.pauseIcon} onClick={() => togglePlayPuse()}>pause_circle_outline</Icon>}
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className={classes.box}>
                    <UpAndDownComponent 
                      iconText="volume_down"
                      incFunction={increaseVolume}
                      decFunction={decreaseVolume}
                    />
                    <p className={classes.percentageP}>{`${state.volume * 100}%`}</p>
                  </Box>
                </Grid>
              </Grid> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ControlsComponent;