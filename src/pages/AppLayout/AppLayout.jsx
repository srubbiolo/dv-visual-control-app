import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../app-state/actions';
import ControlsComponent from '../../components/ControlsComponent/Controls.component';

const Applayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  })
  return <ControlsComponent />
}

export default Applayout;