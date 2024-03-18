import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import styles from "./Layout.module.css";
const Modal2 = ({ setIsModalOpen, isModalOpen }) => {
  const [search, setsearch] = useState("");
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Modal
        title="Group chat"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <input
            type="text"
            className={styles.inputfield}
            placeholder="search user..."
            value={search}
            onChange={(event) => setsearch(event.target.value)}
          />
          <div className="d-flex gap-2 flex-wrap">
            <span className={styles.users}>hello <i id="one" type="button" className={`fa-solid fa-xmark ${styles.icon}`}></i></span>
            <span className={styles.users}>hello <i id="two" type="button" className={`fa-solid fa-xmark ${styles.icon}`}></i></span>
            <span className={styles.users}>hello <i id="three" type="button" className={`fa-solid fa-xmark ${styles.icon}`}></i></span>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Modal2;
