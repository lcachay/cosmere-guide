import { Grid, useMediaQuery, CircularProgress, Backdrop } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';
import { useAuth } from '../contexts/AuthContext';

const Layout = ({ header, sidebarLeft, sidebarRight, footer }) => {
  const md = useMediaQuery('(min-width:600px)');
  const { loading } = useLoading();
  const { loadingAuth } = useAuth();

  return (
    <Grid container justifyContent='center' flexWrap='nowrap' className="min-h-dvh">
      {
        sidebarLeft &&
        <Grid item justifySelf='left'>
          {sidebarLeft}
        </Grid>
      }
      <Grid container item flexDirection='column' justifyContent='center' alignItems='center' className={`${md && "overflow-y-auto h-screen flex-nowrap"}`}>
        <Grid item className={`w-full ${!md ? "fixed" : "overflow-y-auto h-screen overflow-x-hidden"}`} sx={{ top: 0 }}>
          {header}
        </Grid>
        <Outlet style={{ width: "100%" }} />
        <Grid item justifySelf="flex-end">
          {footer}
        </Grid>
      </Grid>
      {
        sidebarRight &&
        <Grid item justifySelf='right' xs={!md && 12} className={`${!md ? "fixed" : "overflow-y-auto h-screen overflow-x-hidden"}`} sx={{ bottom: 0, minWidth: '16em' }}>
          {sidebarRight}
        </Grid>
      }
      {
        loading || loadingAuth &&
        <Backdrop open={loading || loadingAuth}>
          <CircularProgress />
        </Backdrop>
      }
    </Grid>
  );
}

export default Layout;
