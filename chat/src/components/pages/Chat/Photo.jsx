import React, { useState } from 'react';
import { Button, Image, Space } from 'antd';
import styles from "./Component.module.css";
const Photo = () => {
  const [random, setRandom] = useState();
  return (
    <Space size={12}>
      <Image
        width={50}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        className={styles.img}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
    </Space>
  );
};
export default Photo;