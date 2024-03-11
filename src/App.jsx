import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import AppRouter from './routes';
import GlobalStyles from './components/GlobalStyle/GlobalStyle';

function App() {
    useEffect(() => {
        document.title = 'FE_DATN';
    }, []);

    return (
        <Provider store={store}>
            <GlobalStyles>
                <AppRouter />
            </GlobalStyles>
        </Provider>
    );
}

export default App;
