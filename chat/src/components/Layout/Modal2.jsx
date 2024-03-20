import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import styles from "./Layout.module.css";
import { useAuth } from "../context/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Modal2 = ({ setIsModalOpen, isModalOpen }) => {
  const [search, setsearch] = useState(null);
  const [users, setusers] = useState(null);
  const [selectedUser , setselectedUser] = useState(null);
  const [ok , setok] = useState(null);
  const [name , setname] = useState(null);
  const [groupChat , setGroupChat] = useState(null);
  const navigate = useNavigate();
  const [auth, setauth] = useAuth();
  const handleOk = () => {
    setIsModalOpen(false);
    setok(true);
    navigate("/dashboard/group");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchUser = async () => {
      let response = await fetch(
        `http://localhost:8080/api/v1/user/?search=${search}`,
        {
          method: "GET",
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      if (response.ok) {
        response = await response.json();
        if (response.success) {
          if (response.users.length > 0) {
            setusers(response.users);
          } else {
            setusers(null);
          }
          // console.log(response);
        } else {
          setusers([]);
        }
      }
    };

    fetchUser();
  }, [search]);

  const handleUser = (ID) => {
    const user = users?.find((element) => element._id === ID);
    setsearch(user?.email);
    if (selectedUser){
      setselectedUser([...selectedUser , user?.email]);
    }
    else {
      setselectedUser([user?.email]);
    }
    
    setusers(null);
  };

  const handleSelectedUser = (ID)=>{
    const selected = selectedUser?.filter((id)=> id !== ID);
    setselectedUser(selected);
    setsearch(null);
  }

  // sending chat name and sending users
  useEffect(()=> {
    const init = async()=> {
      try {
        let response = await fetch("http://localhost:8080/api/v1/chat/group" , {
          method : "POST" ,
          headers : {
            "Content-Type" : "application/json" ,
            Authorization : auth?.token
          } ,
          body : JSON.stringify({selectedUser , name})
        })

        if (response.ok){
          // console.log(response);
          response = await response.json();
          // console.log(response);
          if (response.fullGroupChat){
            setGroupChat(response.fullGroupChat.users);
          }
          
          toast.success("Group created successfuly");
        }
      } catch (err) {
        console.log(err);
        toast.error("Got error in group creation");
      }
    }
    init();
    // setok(null);
  } , [ok]);
  return (
    <>
      <Modal
        title="Group chat"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div>
          <input
              type="text"
              className={styles.inputfield}
              placeholder="Group name..."
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
            <input
              type="text"
              className={styles.inputfield}
              placeholder="search user..."
              value={search}
              onChange={(event) => setsearch(event.target.value)}
            />
          </div>

          <div className="d-flex gap-2 flex-wrap ">
            {selectedUser?.map((user , index) => (
              <div
                className={styles.selectedUser}
                id={index}
                
              >
                {user} <i class="fa-solid fa-xmark" onClick={()=> handleSelectedUser(user)}></i>
              </div>
            ))}
          </div>

          <div className="d-flex gap-2 flex-wrap flex-column p-1">
            {users?.map((user) => (
              <div
                className={styles.users}
                id={user._id}
                onClick={() => handleUser(user._id)}
              >
                {user.email}{" "}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Modal2;
