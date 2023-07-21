import React from 'react';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import Login from './components/user/Login';
import BottomNav from './components/BottomNav';
import { Box, Hidden } from '@mui/material';
import Room from './components/rooms/Room';

const App = () => {
  return (
    <>
        <NavBar/>
        <Notification/>
        <Login/>
        <Loading/>
        <BottomNav/>
        <Room/>
    </>
  );
};

export default App;