// Parts
import TextFieldMUI from '@mui/material/TextField';

function TextField(props) {
    const { meta, input, ...rest } = props;
    return (
        <TextFieldMUI
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error}
            {...rest}
            {...input}
        />
    );
}

export default TextField;