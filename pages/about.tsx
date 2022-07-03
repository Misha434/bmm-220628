import { Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';

const about: NextPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography>hello</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>world</Typography>
      </Grid>
    </Grid>
  )
}

export default about;