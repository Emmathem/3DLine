import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table, Select } from 'antd';
import { formatNumber } from '../config';
const { Option } = Select;

const AppTableData = ({ data, countryStates }) => {
  const paginationPosition = {
    top: 'topLeft',
    bottom: 'bottomRight',
  };
  // const [value, setValue] = useState(null);
  const [filterValue, setFilteValues] = useState([]);

  useEffect(() => {
    setFilteValues(data);
  }, []);

  const tableColumns = [
    {
      title: 'State',
      dataIndex: 'state',
    },
    {
      title: 'Confirmed Cases',
      dataIndex: 'confirmedCases',
      render: (_text, record) => <>{formatNumber(record.confirmedCases)}</>,
    },
    {
      title: 'Active Cases',
      dataIndex: 'casesOnAdmission',
      render: (_text, record) => <>{formatNumber(record.casesOnAdmission)}</>,
    },
    {
      title: 'Discharged',
      dataIndex: 'discharged',
      render: (_text, record) => <>{formatNumber(record.discharged)}</>,
    },
    {
      title: 'Death',
      dataIndex: 'death',
      render: (_text, record) => <>{formatNumber(record.death)}</>,
    },
  ];
  const filterRecord = value => {
    if (value === undefined) {
      setFilteValues(data);
      return;
    }
    const res = data.filter(res => res.state === value.split(' ')[0]);
    setFilteValues(res);
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
            allowClear
            onChange={value => filterRecord(value)}
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
            dataSource={filterValue}
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
  // countryStates: PropTypes.array,
};

export default AppTableData;
