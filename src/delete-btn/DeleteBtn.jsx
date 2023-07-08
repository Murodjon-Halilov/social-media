const DeleteBtn = () => {
  const deleteChat = async () => {
    try {
      const response = await fetch("http://192.168.0.107:5000/api/v1/ohio", { method: "DELETE" });
      if (response.status === 204) {
        alert('Deleted Succesfully!');
      } else {
        const errorData = await response.json();
        console.log(errorData)
      }
    } catch (error) {
      console.error(error);
    }
  };
  {
    return (
      <div>
        <button type="submit" onClick={deleteChat}>
            <i className="fa fa-trash"></i>
        </button>
      </div>
    );
  }
};

export default DeleteBtn;
