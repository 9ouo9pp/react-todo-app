const TextInput = ({ ref, todo, onInputChange }) => {
 return (
  <input
   ref={ref}
   style={{
    fontSize: "20px",
    padding: "8px",
   }}
   type="text"
   value={todo}
   onChange={onInputChange}
   autoFocus
  />
 );
};

export default TextInput;
