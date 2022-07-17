import { Typography } from '@mui/material';

export const Header = (text) => {
    return (
        <Typography sx={{ textAlign: 'center', my: 2, pt: 4, fontWeight: 600 }}>Searchable Product List </ Typography>
    );
}

export default Header;