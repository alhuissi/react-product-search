import {
    Box,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

export const ProductListTable = ({ products }) => {

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{backgroundColor:"#f9f9f9"}}>
                        <TableRow>
                            <TableCell>
                                Image
                            </TableCell>
                            <TableCell>
                                Code
                            </TableCell>
                            <TableCell>
                                Stock
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            <TableCell width="70%">
                                Description
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => {
                            return (
                                <TableRow
                                    key={product.code}
                                >
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    alignItems: 'center',
                                                    backgroundImage: `url(assets/${product.image})`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat',
                                                    borderRadius: 1,
                                                    display: 'flex',
                                                    height: 80,
                                                    justifyContent: 'center',
                                                    overflow: 'hidden',
                                                    width: 80
                                                }}
                                            />
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {product.code}
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="textSecondary"
                                            variant="body2"
                                        >
                                            {product.quantity}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        {product.price}
                                    </TableCell>
                                    <TableCell width="70%">
                                        {product.description}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};