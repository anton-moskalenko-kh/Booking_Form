// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
// Parts
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import TextField from './_Form/TextField';
import Select from './_Form/Select';
import Button from './Button';
import DataPicker from './_Form/DataPicker';
// Engine
import destinationSelectors from '../../engine/core/destinations/selectors';
import hotelsSelectors from '../../engine/core/hotels/selectors';
import { getDestinationsAsync } from '../../engine/core/destinations/saga/asyncActions';
import { getHotelsAsync } from '../../engine/core/hotels/saga/asyncActions';

function DestinationsForm() {
    const dispatch = useDispatch();
    const loader = useSelector(destinationSelectors.loading);
    const hotelsLoading = useSelector(hotelsSelectors.loading);
    const items = useSelector(destinationSelectors.items);
    const onSubmit = (value) => {
        dispatch(getHotelsAsync(value));
    };

    useEffect(() => {
        dispatch(getDestinationsAsync());
    }, [dispatch]);
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <Box
                    sx={{ margin: '30px 0' }}
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Field
                                name="destination"
                                label="Destination"
                                component={Select}
                                disabled={loader}
                                options={items}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Field
                                name="check_in"
                                label="Check in"
                                disabled={loader}
                                component={DataPicker}
                                minDate={new Date()}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Field
                                name="check_out"
                                label="Check out"
                                component={DataPicker}
                                minData={new Date()}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Field
                                name="adults"
                                label="Adults"
                                component={TextField}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Field
                                name="children"
                                label="Children"
                                component={TextField}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button type="submit" sx={{ height: '55px' }} disabled={loader || hotelsLoading}>Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
        />
    );
}

export default DestinationsForm;
