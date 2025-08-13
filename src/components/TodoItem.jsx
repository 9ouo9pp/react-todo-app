import Button from "./Button";

const TodoItem = ({ label, onDelete }) => {
 return (
  <div
   style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
   }}
  >
   <div
    style={{
     flex: 1,
     fontSize: "20px",
     marginRight: "16px",
    }}
   >
    {label}
   </div>
   <Button label="삭제" onClick={onDelete} />
  </div>
 );
};

export default TodoItem;
