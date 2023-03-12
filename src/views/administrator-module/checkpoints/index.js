import React, { useEffect, useCallback, useMemo } from 'react';
import { AdaptableCard } from 'components/shared';
import AdminTable from '../components/AdminTable';
import { injectReducer } from 'store/index';
import reducer from './store';
import useThemeClass from 'utils/hooks/useThemeClass';
import { useDispatch, useSelector } from 'react-redux';
import { getCheckpoints, setTableData } from './store/dataSlice';
import {
  setSelectedCheckpoints,
  toggleDeleteConfirmation,
  setSortedColumn
} from './store/stateSlice';

import { Avatar } from 'components/ui';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';

injectReducer('checkpoints', reducer);

const ActionColumn = ({ row }) => {
  const dispatch = useDispatch();
  const { textTheme } = useThemeClass();
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/administrator/checkpoint-edit/${row.id}`);
  };

  const onDelete = () => {
    dispatch(toggleDeleteConfirmation(true));
    dispatch(setSelectedCheckpoints(row.id));
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

const Checkpoints = () => {
  const dispatch = useDispatch();

  const { pageIndex, pageSize, sort, query, total } = useSelector(
    (state) => state.checkpoints.data.tableData
  );

  const loading = useSelector((state) => state.checkpoints.data.loading);
  const data = useSelector((state) => state.checkpoints.data.checkpointsList);

  useEffect(() => {
    fetchData();
  }, [pageIndex, pageSize, sort]);

  const tableData = useMemo(
    () => ({ pageIndex, pageSize, sort, query, total }),
    [pageIndex, pageSize, sort, query, total]
  );

  const fetchData = () => {
    dispatch(getCheckpoints({ pageIndex, pageSize, sort, query }));
  };

  const columns = useMemo(() => [
    {
      Header: '',
      accessor: 'name',
      sortable: true
      // Cell: (props) => {
      //   const row = props.row.original;
      //   return <NameColumn row={row} />;
      // }
    },
    {
      Header: 'CheckpointId',
      accessor: 'checkpointId',
      sortable: true
    },

    {
      Header: 'City',
      accessor: 'city',
      sortable: true
    },
    {
      Header: 'Latitude',
      accessor: 'latitude'
    },
    {
      Header: 'Longitude',
      accessor: 'longitude'
    },
    {
      Header: 'Geohash',
      accessor: 'geohash'
    },
    {
      Header: 'Description',
      accessor: 'description'
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
          title="Checkpoints List"
          entity="checkpoints"
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

export default Checkpoints;
