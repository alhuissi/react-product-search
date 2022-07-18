import {
    Box,
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { useCallback, useState } from 'react';

const tableHeaders = [
    { title: 'image' },
    { title: 'code' },
    { title: 'stock' },
    { title: 'price' },
    { title: 'description' }
]

const sortData = ({ data, orderBy, reverse }) => {
    const sortedProducts = data.sort((productA, productB) => productA[orderBy] < productB[orderBy] ? -1 : 1);
    if (reverse) return sortedProducts.reverse();
    return sortedProducts;
}

export const ProductListTable = ({ products }) => {
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('position');

    const handleRequestSort = (column) => {
        const isAsc = orderBy === column && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(column);
    };

    const sortedData = useCallback(
        () => sortData({ data: products, orderBy, reverse: order === "desc" }),
        [products, orderBy, order]
    );

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: "#f9f9f9" }}>
                        <TableRow>
                            {tableHeaders.map((header) => {
                                return (
                                    <TableCell key={header.title} width={header.title === 'description' ? "70%" : ""}>
                                        <Button
                                            variant="text"
                                            sx={{ fontWeight: 600, color: 'black' }}
                                            onClick={() => handleRequestSort(header.title)}
                                            endIcon={
                                                orderBy === header.title ?
                                                    order === 'desc' ?
                                                        <span>&#8593;</span> :
                                                        <span>&#8595;</span> :
                                                    <span style={{ visibility: 'hidden' }}>&#8593;</span>}
                                        >
                                            {header.title}
                                        </Button>
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData().map((product) => {
                            return (
                                <TableRow
                                    key={product.code}
                                >
                                    <TableCell>
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
                                    </TableCell>
                                    <TableCell align="center">
                                        {product.code}
                                    </TableCell>
                                    <TableCell align="center">
                                        {product.quantity}
                                    </TableCell>
                                    <TableCell align="center">
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