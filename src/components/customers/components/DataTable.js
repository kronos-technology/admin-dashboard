import React from 'react';
// import useThemeClass from 'utils/hooks/useThemeClass'
// import { useDispatch } from 'react-redux'
// import { Avatar } from 'components/ui'
// import { Link } from 'react-router-dom'
import CustomerEditDialog from '../../../components/customers/components/CustomerEditDialog';
import { Table } from 'components/ui';
import { useTable, useSortBy } from 'react-table';

const { Tr, Th, Td, THead, TBody, Sorter } = Table;
const DataTable = ({columns, data}) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy
    );

    return (
    <>
        <>
        <Table {...getTableProps()}>
            <THead>
            {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                        <Sorter sort={''} />
                    </span>
                    </Th>
                ))}
                </Tr>
            ))}
            </THead>
            <TBody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                <Tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                    return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
                    })}
                </Tr>
                );
            })}
            </TBody>
        </Table>
        </>

    <CustomerEditDialog />
</>
);
};

export default DataTable;
