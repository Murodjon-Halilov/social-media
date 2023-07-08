import { useContext } from "react";
import { MessageBox, AutherName } from "./Message.style";
import { MessageAndAuthContext } from "../contextFolder/messageContext";

const Message = () => {

  const {usersData} = useContext(MessageAndAuthContext);


  if(usersData) {
    usersData.map(userData => console.log(userData))
  }

  return (
    usersData ? usersData.map(userData => (
      <MessageBox key={userData._id}>
        <AutherName>{userData.author}</AutherName>
        {userData.message}
      </MessageBox>
    )) : ''
  )
}

export default Message