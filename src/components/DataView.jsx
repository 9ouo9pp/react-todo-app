import Title from "./Title";
import TodoList from "./TodoList";

const dataViewWrapStyle = {
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 justifyContent: "center",
 backgroundColor: "#eee",
 padding: "32px",
 borderRadius: "8px",
};

const DataView = ({ todoList, onDelete }) => {
 return (
  <div style={dataViewWrapStyle}>
   <Title label="할 일 목록" />
   <TodoList todoList={todoList} onDelete={onDelete} />
  </div>
 );
};

export default DataView;
