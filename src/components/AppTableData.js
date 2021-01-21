import React from "react";
import { Table } from "antd";

const tableColumns = [
    {
        name: 'State',
        dataIndex: 'state',
        customRender: {}
    },
];

const AppTableData = () => {
  return (
    <div>
      <Table columns={tableColumns} />
    </div>
  );
};

export default AppTableData;
