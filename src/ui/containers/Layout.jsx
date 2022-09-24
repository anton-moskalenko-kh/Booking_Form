// Core
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
// Parts
import Header from '../components/Header';
// Engine
import { store } from '../../engine/init/store';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});

function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline />
                <Header />
                <Container>
                    <Outlet />
                </Container>
            </Provider>
        </ThemeProvider>
    );
}

export default Layout;