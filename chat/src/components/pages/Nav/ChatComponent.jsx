import React from 'react'
import { FloatButton } from "antd";
import Float from "../Chat/Float";
import styles from "./Nav.module.css";

const ChatComponent = () => {
  return (
    <div>
      <div className={styles.chat}
          >
            <div className={styles.max}>How are you ?</div>
            <div className={styles.susan}>I'm great and you ?</div>
            <div className={styles.max}>I'm also fine</div>
            <div className={styles.susan}>What are you doing ?</div>
            <div className={styles.max}>Nothing</div>
            <div className={styles.max}>You ?</div>
            <div className={styles.susan}>Same 😂</div>
            <div className={styles.max}>🤣🤣🤣🤣</div>
            
          </div>
          <FloatButton.BackTop />
          {/* <Float /> */}
    </div>
  )
}

export default ChatComponent
