import React from 'react';
import { Row, Col, Table, Layout } from 'antd';

const tableColumns = [
  {
    title: 'State',
    dataIndex: 'state',
    scopedSlots: { customRender: 'state' },
  },
  {
    title: 'Confirmed Cases',
    dataIndex: 'confirmedCases',
    scopedSlots: { customRender: 'confirmedCases' },
  },
  {
    title: 'Active Cases',
    dataIndex: 'casesOnAdmission',
    scopedSlots: { customRender: 'casesOnAdmission' },
  },
  {
    title: 'Discharged',
    dataIndex: 'discharged',
    scopedSlots: { customRender: 'discharged' },
  },
  {
    title: 'Death',
    dataIndex: 'death',
    scopedSlots: { customRender: 'death' },
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
          >
          </Table>
        </Col>
      </Row>
    </Layout>
  );
};

export default AppTableData;
