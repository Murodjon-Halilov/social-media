import { useContext } from "react";
import { MessageBox, AutherName, DateBox, TimeBox } from "./Message.style";
import { MessageAndAuthContext } from "../contextFolder/messageContext";

const Message = () => {
  const { usersData } = useContext(MessageAndAuthContext);

  const msgData = usersData ? usersData.reverse() : "";

  const date = new Date(1688825392154)

  console.log(date)

  return (
    msgData ? msgData.map((userData) => (
        <div key={userData._id}>
          <DateBox>
            {console.log(userData.time)}
          </DateBox>
        <MessageBox>
          <AutherName>{userData.author}</AutherName>
          {userData.message}
          <TimeBox>
          {userData.time.split(' ').splice(4, 1).join()}
        </TimeBox>
        </MessageBox>
        </div>
      ))
    : ""
    );
};

export default Message;
