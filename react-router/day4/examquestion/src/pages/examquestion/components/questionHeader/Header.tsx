import React from 'react'
import style from './Header.module.scss'
import { Card, Form, Select } from "antd"

const Header: React.FC = () => {
  return (
      <Card className={style.header} title="教师出题" bordered={false} style={{ borderRadius: '2px' }}>
          <Form
              layout="inline"
          >
              <Form.Item
                  className={style.formItem}
                  label="年级："
                  name="grade"
              >
                  <Select placeholder="年级">
                      <Select.Option value="1">高中</Select.Option>
                      <Select.Option value="2">初中</Select.Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  className={style.formItem}
                  label="学科："
                  name="subject"
              >
                  <Select placeholder="学科">
                      <Select.Option value="1">语文</Select.Option>
                      <Select.Option value="2">数学</Select.Option>
                      <Select.Option value="3">英语</Select.Option>
                      <Select.Option value="4">物理</Select.Option>
                      <Select.Option value="5">化学</Select.Option>
                      <Select.Option value="6">生物</Select.Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  className={style.formItem}
                  label="题类："
                  name="questionType"
              >
                  <Select placeholder="题类">
                      <Select.Option value="1">高考题</Select.Option>
                      <Select.Option value="2">中考题</Select.Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  className={style.formItem}
                  label="知识点："
                  name="knowledgePoint"
              >
                  <Select placeholder="知识点">
                      <Select.Option value="1">集合的概念与表示方法</Select.Option>
                      <Select.Option value="2">集合的基本运算</Select.Option>
                  </Select>
              </Form.Item>

          </Form>
      </Card>
  )
}

export default Header