// Parts
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';

function Select(props) {
    const {
        options, label, input: { onChange, value }, disabled,
    } = props;
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <SelectMUI
                value={value}
                label={label}
                onChange={onChange}
                disabled={disabled}
            >
                {options.map((item) => (<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>))}
            </SelectMUI>
        </FormControl>
    );
}

export default Select;
