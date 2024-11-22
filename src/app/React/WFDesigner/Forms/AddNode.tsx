
import React from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';

const { Option } = Select;

function AddNode({ visible, onCancel, onOk,  setShape, }: any) {
  return (
    <Modal
      title="Add New Node"
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={onOk} autoComplete="off" name="new node">
        <Form.Item label="Node Name" name="nodeName">
          <Input />
        </Form.Item>
        <Form.Item label="Node Type" name="nodeType">
          <Select placeholder="Select a node type" onChange={setShape}>
            <Option value="tasknode">Task Node</Option>
            <Option value="normalnode">Action Node</Option>
            <Option value="startnode">Start Node</Option>
            <Option value="decisionnode">Decision Node</Option>
            <Option value="endnode">End Node</Option>
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

export default AddNode;
