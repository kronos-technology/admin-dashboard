import React, { useEffect, useCallback, useMemo } from 'react';
import { AdaptableCard } from 'components/shared';
import AdminTable from '../components/AdminTable';
import AdminTableTools from '../components/AdminTableTools';
import { injectReducer } from 'store/index';
import reducer from './store';
import useThemeClass from 'utils/hooks/useThemeClass';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers, setTableData } from './store/dataSlice';
import { setSelectedDriver, toggleDeleteConfirmation, setSortedColumn } from './store/stateSlice';

import { Avatar } from 'components/ui';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';

injectReducer('drivers', reducer);

const ActionColumn = ({ row }) => {
  const dispatch = useDispatch();
  const { textTheme } = useThemeClass();
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/administrator/driver-edit/${row.id}`);
  };

  const onDelete = () => {
    dispatch(toggleDeleteConfirmation(true));
    dispatch(setSelectedDriver(row.id));
  };

  return (
    <div className="flex justify-end text-lg">
      <span className={`cursor-pointer p-2 hover:${textTheme}`} onClick={onEdit}>
        <HiOutlinePencil />
      </span>
      <span className="cursor-pointer p-2 hover:text-red-500" onClick={onDelete}>
        <HiOutlineTrash />
      </span>
    </div>
  );
};

const NameColumn = ({ row }) => {
  const { textTheme } = useThemeClass();
  const avatar = row.img ? <Avatar src={row.img} /> : <Avatar icon={<FiUser />} />;
  return (
    <div className="flex items-center">
      {avatar}
      <span className={`ml-2 rtl:mr-2 font-semibold`}>{row.name}</span>
    </div>
  );
};

const Drivers = () => {
  const dispatch = useDispatch();

  const { pageIndex, pageSize, sort, query, total } = useSelector(
    (state) => state.drivers.data.tableData
  );
  const loading = useSelector((state) => state.drivers.data.loading);
  const data = useSelector((state) => state.drivers.data.driversList);

  useEffect(() => {
    fetchData();
  }, [pageIndex, pageSize, sort]);

  const tableData = useMemo(
    () => ({ pageIndex, pageSize, sort, query, total }),
    [pageIndex, pageSize, sort, query, total]
  );

  const fetchData = () => {
    dispatch(getDrivers({ pageIndex, pageSize, sort, query }));
  };

  const columns = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name',
      sortable: true,
      Cell: (props) => {
        const row = props.row.original;
        return <NameColumn row={row} />;
      }
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
      sortable: true
    },

    {
      Header: 'Company',
      accessor: 'companyId',
      sortable: true
    },
    {
      Header: 'Birthdate',
      accessor: 'birthdate'
    },
    {
      Header: 'Phone',
      accessor: 'phone'
    },

    {
      Header: '',
      id: 'action',
      accessor: (row) => row,
      Cell: (props) => <ActionColumn row={props.row.original} />
    }
  ]);

  const onPaginationChange = (page) => {
    const newTableData = cloneDeep(tableData);
    newTableData.pageIndex = page;
    dispatch(setTableData(newTableData));
  };

  const onSelectChange = (value) => {
    const newTableData = cloneDeep(tableData);
    newTableData.pageSize = Number(value);
    newTableData.pageIndex = 1;
    dispatch(setTableData(newTableData));
  };

  const onSort = (sort, sortingColumn) => {
    const newTableData = cloneDeep(tableData);
    newTableData.sort = sort;
    dispatch(setTableData(newTableData));
    dispatch(setSortedColumn(sortingColumn));
  };

  return (
    <>
      <AdaptableCard className="h-full" bodyClass="h-full">
        <AdminTable
          title="Drivers List"
          entity="driver"
          columns={columns}
          data={data}
          skeletonAvatarColumns={[0]}
          skeletonAvatarProps={{ className: 'rounded-md' }}
          loading={loading}
          pagingData={tableData}
          onPaginationChange={onPaginationChange}
          onSelectChange={onSelectChange}
          onSort={onSort}
        />
      </AdaptableCard>
    </>
  );
};

export default Drivers;
