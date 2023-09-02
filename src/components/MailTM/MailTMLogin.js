import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Divider, Input, notification, Row } from 'antd';
import { connect } from 'react-redux';
import { LOGGER } from '../../config';
import { LoginMailTMAction } from '../../store/actions/MailTmActions';
import {
  LockOutlined,
  LoginOutlined,
  UserOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const MailTMLogin = props => {
  const { LoginMailTMAction } = props;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState({});

  const onLogin = async () => {
    if (data.address === '' && data.password === '') {
      notification.error({
        key: 'loginAlert',
        message: 'Error',
        description: 'Incorrect Login Details, Try again or Contact the Admin',
        duration: 0,
      });
      setLoading(false);
      return;
    }
    setLoading(true);
    LOGGER('data', data);
    const res = await LoginMailTMAction(data);
    if (!res.success) {
      notification.error({
        key: 'loginAlert',
        message: 'Error',
        description: res.message,
        duration: 0,
      });
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(loading);
        notification.close('loginAlert');
        history.push('/mail/dashboard');
      }, 2000);
    }
  };
  return (
    <div className="login">
      <div>Login</div>
      <div className="login__container">
        <Row>
          <Col xs={{ span: 24, offset: 0 }} xl={{ span: 6, offset: 9 }} lg={6}>
            <Card bordered={false}>
              <div className="login__inner">
                <div
                  className="moverheader__logo"
                  onClick={() => history.push('/')}
                >
                  {/*<img src={MoverLogo} alt="logo" />*/}
                </div>
                <h4>Welcome Back</h4>
                <form onSubmit={onLogin}>
                  <div className="form-group">
                    <Input
                      prefix={<UserOutlined />}
                      size="large"
                      placeholder="address"
                      name="address"
                      onChange={e =>
                        setdata({ ...data, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      size="large"
                      type="password"
                      prefix={<LockOutlined />}
                      name="password"
                      placeholder="Password"
                      onChange={e =>
                        setdata({ ...data, password: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Button
                      icon={<LoginOutlined />}
                      type="primary"
                      loading={loading}
                      onClick={onLogin}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ marginLeft: '10px' }}
                      icon={<HomeOutlined />}
                      type="default"
                      loading={loading}
                      onClick={() => history.push('/')}
                    >
                      Home
                    </Button>
                  </div>
                  <Divider>Notice</Divider>
                  <div className="login__notice">
                    <small>
                      Never send your password via email Never share your
                      password with anyone
                    </small>
                  </div>
                </form>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { LoginMailTMAction })(MailTMLogin);
