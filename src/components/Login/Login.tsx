import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Layout, Form, Tooltip, Input, Button, Spin } from "antd";
import { useHistory } from "react-router-dom";
import { Store } from "rc-field-form/lib/interface";

import { FullHeightLayout } from "../AppContent/AppContent.styled";
import { FormWithReducedMarginBottom, LoginRow } from "./Login.styled";
import { layout, tailLayout } from "./Login.constants";
import { login } from "./__redux/Login.actions";
import { LoginFormValues, LoginParams } from "./Login.types";
import { loading as loadingSelector } from "./__redux/Login.selectors";

const { Content } = Layout;

const Login: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(loadingSelector);
  const history = useHistory();

  return (
    <FullHeightLayout>
      <Content>
        <LoginRow align="middle" justify="center">
          <Col>
            <Spin spinning={loading} size="large">
              <Card
                title="Login"
                bordered={false}
                headStyle={{ textAlign: "center" }}
              >
                <FormWithReducedMarginBottom
                  {...layout}
                  name="basic"
                  onFinish={(values: Store) => {
                    const formValues = values as LoginFormValues;

                    const params: LoginParams = {
                      history,
                      ...formValues
                    };

                    dispatch(login(params));
                  }}
                >
                  <Tooltip placement="right" title={`"MyTona"`}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!"
                        }
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Tooltip>

                  <Tooltip placement="right" title={`"password"`}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!"
                        }
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Tooltip>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </FormWithReducedMarginBottom>
              </Card>
            </Spin>
          </Col>
        </LoginRow>
      </Content>
    </FullHeightLayout>
  );
};

export default Login;
