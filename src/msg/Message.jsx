import { useContext, useEffect, useState } from "react";
import {
  MessageBox,
  AutherName,
  DateBox,
  TimeBox,
  DeleteMsg,
  MainMsgBox,
  EditButton,
  MsgText,
} from "./Message.style";
import EditModal from "../edit-modal/EditModal";
import { MessageAndAuthContext } from "../contextFolder/messageContext";

const Message = ({ userData }) => {
  const [openModal, setOpenModal] = useState(false);
  const { setUsersData } = useContext(MessageAndAuthContext);

  const deleteMessage = async function (id) {
    // const res = await fetch(
    //   `http://192.168.0.107:5000/api/v1/ohio/${userData._id}`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userData),
    //   }
    // );

    // const data = await res.json();
    // console.log(data)
    // return data;

    const res = await fetch(`http://localhost:3002/messages/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      await fetch(`http://localhost:3002/messages`)
        .then((res) => res.json())
        .then((data) => {
          setUsersData(data);
        });
    }
  };

  return (
    <div>
      <DateBox>
        {new Date(userData.time)
          .toDateString()
          .split(" ")
          .slice(1, 4)
          .join(" ")}
      </DateBox>

      {openModal && (
        <EditModal userData={userData} closeModal={() => setOpenModal(false)} />
      )}
      <MainMsgBox>
        <MessageBox>
          <AutherName>{userData.author}</AutherName>
          <MsgText>{userData.message}</MsgText>
          <TimeBox>
            {new Date(userData.time).toString().split(" ").splice(4, 1).join()}
          </TimeBox>
        </MessageBox>
        <>
          <DeleteMsg onClick={() => deleteMessage(userData.id)}>
            <i className="fa fa-trash"></i>
          </DeleteMsg>
          <br />
          <EditButton onClick={() => setOpenModal(true)}>
            <i className="fa fa-pen"></i>
          </EditButton>
        </>
      </MainMsgBox>
    </div>
  );
};

export default Message;
