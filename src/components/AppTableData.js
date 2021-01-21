import React from 'react';
import { Row, Col, Table, Layout } from 'antd';

const tableColumns = [
  {
    title: 'State',
    dataIndex: 'state',
    customRender: {},
  },
  {
    title: 'Confirmed Cases',
    dataIndex: 'confirmedCases',
    customRender: {},
  },
  {
    title: 'Active Cases',
    dataIndex: 'casesOnAdmission',
    customRender: {},
  },
  {
    title: 'Death',
    dataIndex: 'death',
    customRender: {},
  },
  {
    title: 'Discharged',
    dataIndex: 'discharged',
    customRender: {},
  },
];

const AppTableData = () => {
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <Table columns={tableColumns} />
        </Col>
      </Row>
    </Layout>
  );
};

export default AppTableData;
