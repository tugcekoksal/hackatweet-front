import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tweet from '../reducers/tweet';
import user from '../reducers/user';


function App({ Component, pageProps }) {
  const store = configureStore({
  reducer: { tweet,user },
});
  return (
    <Provider store={store}>
      <Head>
        <title >Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
