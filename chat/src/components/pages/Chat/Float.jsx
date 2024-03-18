import { CommentOutlined, CustomerServiceOutlined , VideoCameraAddOutlined} from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd';
const Float = () => (
  <>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{
        right: 94,
      }}
      icon={<VideoCameraAddOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
  </>
);
export default Float;