import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import styles from "./Search.module.css";
const { Search } = Input;
const SearchEngine = () => (
  <Space direction="horizontal" style={{paddingTop: "1rem"}}>
    <div  className={styles.search} style={{ position: 'relative' }}>
      <input
        type="text"
        style={{
          width: '200px',
          padding: '8px',
          fontSize: '14px',
          border: '1px solid #ccc',
          borderRadius: '20px',
          outline: 'none',
          color: "grey",
          backgroundColor: "black"
        }}
        placeholder="Chat..."
      />
      <span
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#555',
          cursor: 'pointer',
        }}
      >
      </span>
    </div>
  </Space>
);
export default SearchEngine;