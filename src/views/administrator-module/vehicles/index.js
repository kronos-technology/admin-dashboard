import React, { useEffect, useCallback, useMemo } from 'react';
import { AdaptableCard } from 'components/shared';
import AdminTable from '../components/AdminTable';
import { injectReducer } from 'store/index';
import reducer from './store';
import useThemeClass from 'utils/hooks/useThemeClass';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles, setTableData } from './store/dataSlice';
import { setSelectedVehicles, toggleDeleteConfirmation, setSortedColumn } from './store/stateSlice';
import { Avatar } from 'components/ui';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';

injectReducer('vehicles', reducer);

const ActionColumn = ({ row }) => {
  const dispatch = useDispatch();
  const { textTheme } = useThemeClass();
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/administrator/driver-edit/${row.id}`);
  };
  const onDelete = () => {
    dispatch(toggleDeleteConfirmation(true));
    dispatch(setSelectedVehicles(row.id));
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

const Vehicles = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.vehicles.data.vehiclesList);
  const loading = useSelector((state) => state.vehicles.data.loading);
  const { pageIndex, pageSize, sort, query, total } = useSelector(
    (state) => state.vehicles.data.tableData
  );

  useEffect(() => {
    fetchData();
  }, [pageIndex, pageSize, sort]);

  const tableData = useMemo(
    () => ({ pageIndex, pageSize, sort, query, total }),
    [pageIndex, pageSize, sort, query, total]
  );

  const fetchData = () => {
    dispatch(getVehicles({ pageIndex, pageSize, sort, query }));
  };

  const columns = [
    {
      Header: 'Plate',
      accessor: 'plate',
      sortable: true
      // Cell: (props) => {
      //   const row = props.row.original;
      //   return <NameColumn row={row} />;
      // }
    },

    {
      Header: 'Status',
      accessor: 'status'
      // sortable: true,
    },
    {
      Header: 'Vehicle Number',
      accessor: 'vehicleNumber'
      // soportable: true,
    },
    {
      Header: 'Company',
      accessor: 'companyId'
      // soportable: true,
    },
    {
      Header: 'Current Driver',
      accessor: 'currentDriverId'
      // soportable: true,
    },
    {
      Header: '',
      id: 'action',
      accessor: (row) => row,
      Cell: (props) => <ActionColumn row={props.row.original} />
    }
  ];

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
          title="Vehicles List"
          entity="vehicles"
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

export default Vehicles;
