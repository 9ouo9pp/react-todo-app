import TodoItem from "./todoItem";

const TodoList = ({ todoList, onDelete }) => {
 return (
  <div
   style={{
    display: "flex",
    flexDirection: "column",
   }}
  >
   {todoList.map((todo, index) => (
    <TodoItem key={index} label={todo} onDelete={() => onDelete(todo)} />
   ))}
  </div>
 );
};

export default TodoList;
