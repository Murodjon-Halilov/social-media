import { useContext, useEffect, useState } from "react";
import {
  MessageBox,
  AutherName,
  DateBox,
  TimeBox,
  DeleteMsg,
  MainMsgBox,
  EditButton,
} from "./Message.style";
import { MessageAndAuthContext } from "../contextFolder/messageContext";
import EditModal from "../edit-modal/EditModal";

const Message = () => {
  const { usersData } = useContext(MessageAndAuthContext);

  const msgData = usersData ? usersData.reverse() : "";

  const editFunction = async function (userData) {
    const res = await fetch(`http://192.168.0.107:5000/api/v1/ohio/${userData._id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    
    // const data = await res.json();
    // return data;
  };

  const deleteMessage = async function(userData) {
    const res = await fetch(`http://192.168.0.107:5000/api/v1/ohio/${userData._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    
    // const data = await res.json();
    // console.log(data)
    // return data;
  }

  return msgData
    ? msgData.map((userData) => (
        <div key={userData._id}>
          <DateBox>
            {new Date(userData.time)
              .toDateString()
              .split(" ")
              .slice(1, 4)
              .join(" ")}
          </DateBox>

          <EditModal />

          <MainMsgBox>
            <MessageBox>
              <AutherName>{userData.author}</AutherName>
              {userData.message}
              <TimeBox>
                {new Date(userData.time)
                  .toString()
                  .split(" ")
                  .splice(4, 1)
                  .join()}
              </TimeBox>
            </MessageBox>

            <>
              <DeleteMsg onClick={() => deleteMessage(userData)}>
                <i className="fa fa-trash"></i>
              </DeleteMsg>
              <br />
              <EditButton>
                <i className="fa fa-pen"></i>
              </EditButton>
            </>
          </MainMsgBox>
        </div>
      ))
    : "";
};

export default Message;
