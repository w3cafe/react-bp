import React from 'react';
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppModule from '../modules/Application';
import Counter from "../modules/Application/components/Counter";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Head>
                <title>BoilerPlate With React Next.JS & Redux</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    React BoilerPlate
                </Typography>
                <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                    By <a href="https://w3.cafe">w3.cafe</a>
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    An Updated & production ready <b>react boilerplate</b> to kick start your next FrontEnd Project.
                </Typography>
            </Container>
            <AppModule.COMPONENTS.Counter/>
            {/* End hero unit */}
        </>
    )
}

export default Home
