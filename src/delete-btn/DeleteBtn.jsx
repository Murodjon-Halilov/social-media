import { DeleteButton } from "./DeleteBtn.style";

const DeleteBtn = () => {
  const deleteChat = async () => {
    try {
      const response = await fetch("http://192.168.0.107:5000/api/v1/ohio", { method: "DELETE" });
      if (response.status === 204) {
        // alert('Deleted Succesfully!');
      } else {
        const errorData = await response.json();
        console.log(errorData)
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // eslint-disable-next-line no-lone-blocks
  {
    return (
      <div>
        <DeleteButton type="submit" onClick={deleteChat}>
            <i className="fa fa-trash"></i>
        </DeleteButton>
      </div>
    )
  }
};

export default DeleteBtn;
