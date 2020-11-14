import Head from 'next/head';
import { Container, Grid } from '@material-ui/core';
import styles from '../styles/Home.module.css';
import PlayersList from 'components/PlayersList';
import NavBar from 'components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.APP_TITLE}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <h1 className={styles.mainTitle}>Nedjelja u 18h, ŠRC Trnje</h1>
          <PlayersList />
        </Grid>
      </Container>
    </>
  );
}
