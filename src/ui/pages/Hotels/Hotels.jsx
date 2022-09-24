// Parts
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HotelItem from '../../components/HotelItem';
// Hooks
import { useList } from './useList';

function Hotels() {
    const { items } = useList();

    return (
        <div>
            <Typography gutterBottom component="h5" variant="h5">
                Hotels
            </Typography>
            <Grid container>
                {items.map((item) => (
                    <Grid md={4} sm={4} xs={2} sx={{ marginBottom: '30px' }} key={item.name}>
                        <HotelItem
                            name={item.name}
                            city={item.city}
                            state={item.state}
                            countryCode={item.countryCode}
                            address={item.address}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Hotels;
