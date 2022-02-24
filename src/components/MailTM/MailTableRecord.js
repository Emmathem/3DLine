import React from 'react';
import { Table } from 'antd';
import { formatDateObjectHandler, GetFromNowDate } from '../../config';

const MailTableRecord = props => {
  const { fetching, data } = props;
  const mailcols = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
    },
    {
      title: 'From',
      dataIndex: 'from',
      render: (_text, record) => (
        <>
          <div>
            <h3 style={{ marginBottom: 0 }}>{record.from.name}</h3>
            <h4>{record.from.address}</h4>
          </div>
        </>
      ),
    },
    {
      title: 'Date Received',
      dataIndex: 'createdAt',
      render: (_text, record) => (
        <>
          {formatDateObjectHandler(record.createdAt, 'DD-MM-YYYY')} <br />
          <small style={{ color: 'green' }}>
            (
            {GetFromNowDate(record.createdAt, 'YYYY-MM-DDTHH:mm:ss', 'fromNow')}
            )
          </small>
        </>
      ),
    },
  ];
  return (
    <div>
      <Table
        loading={fetching}
        dataSource={data}
        rowKey={record => record.id}
        columns={mailcols}
        pagination={{
          total: data?.length,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default MailTableRecord;
