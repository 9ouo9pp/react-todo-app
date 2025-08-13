const Title = ({ label }) => {
 return (
  <div
   className="title-wrap"
   style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
   }}
  >
   <h1
    style={{
     marginTop: 0,
    }}
   >
    {label}
   </h1>
  </div>
 );
};

export default Title;
