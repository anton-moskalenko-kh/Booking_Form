// Parts
import Box from '@mui/material/Box';
import DestinationsForm from '../components/DestinationsForm';

function Main() {
    return (
        <div>
            <DestinationsForm />
            <Box component="h6" sx={{ fontSize: '40px', lineHeight: 1, margin: 0 }}>
                Travel With
                <Box component="span" sx={{ color: 'primary.main' }}>Booking</Box>
            </Box>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
            </p>
        </div>
    );
}

export default Main;