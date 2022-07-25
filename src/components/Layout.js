import { Container, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({header, sidebarLeft, sidebarRight, footer}) => {
  const md = useMediaQuery('(min-width:600px)');
  return (
    <Grid container direction="column" className="bg-slate-800">
      <Grid item>
        {header}
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item>
          {sidebarLeft}
        </Grid>
        <Grid item>
          <Container>
            <Outlet/>
          </Container>
        </Grid>
        <Grid item xs={12} sm={4} lg={3} className={`${!md && "fixed"}`} sx={{bottom: 0}}>
          {sidebarRight}
        </Grid>
      </Grid>
      <Grid item justifySelf="flex-end">
        {footer}
      </Grid>
    </Grid>
  );
}

export default Layout;
