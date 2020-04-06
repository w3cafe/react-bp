import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux';
import Theme from './Theme';

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                ...(Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {})
            }
        };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Head>
                        <title>React BoilerPlate</title>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    </Head>
                    <Theme>
                        <Component{...pageProps}/>
                    </Theme>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initStore, { debug: true })(MyApp);