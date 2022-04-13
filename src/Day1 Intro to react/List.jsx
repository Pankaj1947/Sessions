//component ==> function => takes any properties as arguments
// return react element

 const List = (Props)=>{
     return (
         <>
         <h1>{Props.heading}</h1>
          <p>{Props.lebel}</p>
        </>
          

     )
 };

 export const List2=()=>{
     return <h2>List 2</h2>
 }

 export default List;