import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedColumns } from './actions';

const Table = () => {
  const dispatch = useDispatch();
  const selectedColumns = useSelector((state) => state.selectedColumns);
  const allColumns = ['Date', 'App Name', 'AD Request', 'AD Response', 'Impression', 'Clicks', 'Revenue', 'Fill Rate', 'CTR'];
  const data = useSelector((state) => state.data);

  const handleColumnToggle = (column) => {
    let updatedColumns;
    if (selectedColumns.includes(column)) {
      updatedColumns = selectedColumns.filter((col) => col !== column);
    } else {
      updatedColumns = [...selectedColumns, column];
    }
    dispatch(setSelectedColumns(updatedColumns));
  };

  const renderTableHeaders = () => {
    return allColumns.map((column) => (
      <th key={column}>
        <label>
          <input
            type="checkbox"
            checked={selectedColumns.includes(column)}
            onChange={() => handleColumnToggle(column)}
          />
          {column}
        </label>
      </th>
    ));
  };
// console.log(renderTableHeaders);

  const renderTableData = () => {
    // Render table data based on selectedColumns
    if (!Array.isArray(data)) {
      return null; // or handle the error appropriately
    }

    return data.map((row, index) => (
      <tr key={index}>
        {selectedColumns.map((column) => (
          <td key={column}>{row[column]}</td>
        ))}
      </tr>
    ));
  };
// console.log(renderTableData);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border divide-y divide-gray-200">
      <thead>
        <tr>{renderTableHeaders()}</tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
    </div>
  );
};

export default Table;
