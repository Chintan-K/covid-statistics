import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import a from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  console.log(confirmed);
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>

      <Grid container spacing={3} justify="center">

        <Grid item xs={12} md={3} component={Card} className={a(styles.card, styles.infected)}>
          <CardContent>
            <Typography className={styles.head}>
              Infected
            </Typography>
            <Typography className={styles.nmbr}>
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography className={styles.date}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography className={styles.time}>
              {new Date(lastUpdate).toTimeString()}
            </Typography>
            <Typography className={styles.asd} >
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={a(styles.card, styles.recovered)}>
          <CardContent>
            <Typography className={styles.head}>
              Recovered
            </Typography>
            <Typography className={styles.nmbr} >
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography className={styles.date} >
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography className={styles.time}>
              {new Date(lastUpdate).toTimeString()}
            </Typography>
            <Typography className={styles.asd}>
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={a(styles.card, styles.deaths)}>
          <CardContent>
            <Typography className={styles.head}>
              Deaths
            </Typography>
            <Typography className={styles.nmbr}>
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography  className={styles.date}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography  className={styles.time} >
              {new Date(lastUpdate).toTimeString()}
            </Typography>
            <Typography className={styles.asd}>
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
