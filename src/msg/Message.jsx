import { useContext, useEffect, useState } from "react";
import { MessageBox, AutherName, DateBox, TimeBox } from "./Message.style";
import { MessageAndAuthContext } from "../contextFolder/messageContext";

const Message = ( { newDate } ) => {
  const { usersData } = useContext(MessageAndAuthContext);

  
  const msgData = usersData ? usersData.reverse() : "";

  return msgData
    ? msgData.map((userData) => (
        <div key={userData._id}>
          <DateBox>{new Date(userData.time).toDateString().split(' ').slice(1, 4).join(' ')}</DateBox>
          <MessageBox>
            <AutherName>{userData.author}</AutherName>
            {userData.message}
            <TimeBox>
              {new Date(userData.time).toString().split(' ').splice(4, 1).join()}
            </TimeBox>
          </MessageBox>
        </div>
      ))
    : "";
};

export default Message;
