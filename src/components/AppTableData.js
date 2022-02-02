import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table, Select } from 'antd';
const { Option } = Select;

const tableColumns = [
  {
    title: 'State',
    dataIndex: 'state',
  },
  {
    title: 'Confirmed Cases',
    dataIndex: 'confirmedCases',
  },
  {
    title: 'Active Cases',
    dataIndex: 'casesOnAdmission',
  },
  {
    title: 'Discharged',
    dataIndex: 'discharged',
  },
  {
    title: 'Death',
    dataIndex: 'death',
  },
];

const AppTableData = ({ data, countryStates }) => {
  const paginationPosition = {
    top: 'topLeft',
    bottom: 'bottomRight',
  };

  return (
    <>
      <Row style={{ paddingBottom: '1rem' }} justify="end">
        <Col xs={24} lg={6} xl={6}>
          <Select
            style={{ width: '100%' }}
            size="large"
            placeholder="Filter by state"
            showSearch
          >
            {countryStates &&
              countryStates.states.map((state, index) => (
                <Option key={index} value={state.name}>
                  {state.name}
                </Option>
              ))}
          </Select>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            columns={tableColumns}
            dataSource={data}
            bordered
            rowKey={record => record._id}
            key={record => record._id}
            pagination={{ position: paginationPosition.bottom }}
          />
        </Col>
      </Row>
    </>
  );
};

AppTableData.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AppTableData;
