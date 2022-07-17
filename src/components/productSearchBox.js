import { Box, TextField } from '@mui/material';

export const SearchBox = ({ setSearchQuery }) => {

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: "flex",
                flexDirection: "column",
                pb: 2
            }}
        >
            <TextField
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
                label="Enter a query"
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
        </Box>
    );
}
