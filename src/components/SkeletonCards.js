import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Skeleton, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const SkeletonCards = () => {
  const md = useMediaQuery('(min-width:600px)');
  const skeletonData = Array.from('adonalsiumshards')
  
  return (
    <Grid container sx={{padding: '4em 2em'}} gap={md ? 6 : 4} justifyContent='center' alignItems='center'>
    {
      skeletonData.map((placeholder, index) => (
      <Card sx={{ width: '22em', backgroundColor:'transparent' }} key={index}>
        <CardHeader classes={{root: `bg-slate-700`}}></CardHeader>
        <CardContent classes={{root: `bg-slate-700`}}>
          <Typography gutterBottom variant="h2" component="div">
            <Skeleton variant='rectangular'/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton />
          </Typography>
        </CardContent>
      </Card>
      ))
    }
    </Grid>
    
    
  );
}

export default SkeletonCards;
