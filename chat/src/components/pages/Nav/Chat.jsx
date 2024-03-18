import React from "react";
import Layout2 from "../../Layout/Layout2";
import Component from "../Chat/Component";
import styles from "./Nav.module.css";
import SearchEngine from "../Search/Search";
import Photo from "../Chat/Photo";
import ChatComponent from "./ChatComponent";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <Layout2 >
      <div className="d-flex gap-5">
        <div className={styles.chatPage}>
          <SearchEngine />
          <Component />
          <Component />
          <Component />
          <Component />
          <Component />
          <Component />
    
        </div>
        <div
          className={styles.mainChat}
          
        >
          <div className={styles.profile}>
            <div className={styles.photo}>
              <Photo />
              <div className={styles.description}>
                <div>
                  <b>susan</b>
                </div>
                <p style={{ color: "grey" }}>Owner</p>
              </div>
            </div>
            <div className={styles.setting}>
              <i className="fa-solid fa-phone-flip" id={styles.one}></i>
              <i className="fa-solid fa-video" id={styles.two}></i>
              <i
                className="fa-solid fa-ellipsis-vertical"
                id={styles.three}
              ></i>
            </div>
          </div>
          <div className={styles.chat}>
           <ChatComponent/>
          
          </div>
          <ChatInput/>
        </div>
        
      </div>
    </Layout2>
  );
};

export default Chat;
