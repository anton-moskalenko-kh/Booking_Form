import React from 'react';
import {links} from "../../../engine/config/links";

//Parts
import {Logo, Wrapper} from "./components";
import {Stack} from "@mui/material";
import Button from "../Button/index";

function Header() {
    return (
        <Wrapper component='header'>
            <Logo component="h6" sx={{ color: 'primary.main' }}>Booking</Logo>
            <Stack spacing={2} direction='row'>
                <Button to={links.main}>Home</Button>
                <Button to={links.about}>About</Button>
            </Stack>
        </Wrapper>
    );
}

export default Header;