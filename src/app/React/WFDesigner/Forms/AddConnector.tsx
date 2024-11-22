import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';

const { Option } = Select;

function AddConnector({ visible, onCancel, onOk, setEdgeAnimation }: any) {
  return (
    <Modal
      title="Add Edge Label"
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={onOk} autoComplete="off" name="new edge">
        <Form.Item label="Edge Label" name="edgeLabel">
          <Input />
        </Form.Item>
        <Form.Item label="Edge Animation" name="edgeAnimation">
          <Select placeholder="Select animation type" onChange={setEdgeAnimation}>
            <Option value="">Static</Option>
            <Option value="true">Flow</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddConnector;



