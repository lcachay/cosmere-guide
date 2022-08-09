import { Container, Grid, useMediaQuery, CircularProgress, Backdrop } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';
import { useAuth } from '../contexts/AuthContext';
import { useBooks } from '../contexts/BooksContext';

const Layout = ({header, sidebarLeft, sidebarRight, footer}) => {
  const md = useMediaQuery('(min-width:600px)');
  const {loading} = useLoading();
  const {loadingAuth} = useAuth();
  const {loadingBooks} = useBooks();

  return (
    <Grid container direction="column" className="bg-slate-800">
      <Grid item>
        {header}
      </Grid>
      <Grid item container justifyContent="space-between" wrap='nowrap'>
        <Grid item>
          {sidebarLeft}
        </Grid>
        <Grid item className={`${md && "overflow-y-auto h-screen"}`}>
          <Outlet/>
          <Grid item justifySelf="flex-end">
            {footer}
          </Grid>
        </Grid>
        <Grid item xs={!md && 12} className={`${!md ? "fixed": "overflow-y-auto h-screen overflow-x-hidden"}`} sx={{bottom: 0, minWidth: '16em'}}>
          {sidebarRight}
        </Grid>
      </Grid>
      <Backdrop open={loading || loadingAuth}>
        <CircularProgress />
      </Backdrop>
    </Grid>
  );
}

export default Layout;
