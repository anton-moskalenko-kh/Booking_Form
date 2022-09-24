import ButtonMui from "@mui/material/Button"
import LinkWrapper from "./components";

function Button(props) {
    const {type, disabled, children, sx, color, to} = props
    return (
        <ButtonMui type={type} sx={{ color, ...sx}} disabled={disabled} variant='contained'>
            {to
                ? <LinkWrapper style={{ color }} to={to}>{children}</LinkWrapper>
                : children}
        </ButtonMui>
    )
}

Button.defaultProps = {
    disabled: false,
    type: 'button',
    color: '#fff'
}

export default Button