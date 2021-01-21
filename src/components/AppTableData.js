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
    title: 'Discharged',
    dataIndex: 'discharged',
    customRender: {},
  },
  {
    title: 'Death',
    dataIndex: 'death',
    customRender: {},
  },
];

const AppTableData = props => {
  const paginationPosition = {
    top: 'topLeft',
    bottom: 'bottomRight',
  };

  return (
    <Layout>
      <Row>
        <Col span={24}>
          <Table
            columns={tableColumns}
            dataSource={props.state}
            bordered
            rowKey={props._id}
            key={props._id}
            pagination={{ position: paginationPosition.bottom }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default AppTableData;
