import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GetAmazonRecord } from '../store/actions/MailTmActions';

const TestPage = props => {
  useEffect(() => {
    const getRrcord = async () => {
      await props.GetAmazonRecord();
    };
    getRrcord();
  }, []);
  return (
    <>
      <div className="button-checkbox" style={{ opacity: 1 }}>
        <h2>Testing a link</h2>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { GetAmazonRecord })(TestPage);
