// Core
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

function DataPicker(props) {
    const {
        input: { onChange, value }, label, disabled, minDate,
    } = props;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerMUI
                label={label}
                inputFormat="MM/DD/YYYY"
                value={value || null}
                minDate={minDate}
                onChange={onChange}
                disabled={disabled}
                renderInput={(params) => <TextField {...params} sx={{width: '100%'}} />}
            />
        </LocalizationProvider>
    );
}

export default DataPicker;
