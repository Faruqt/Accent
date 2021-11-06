import React from "react";


function List(props){
    return (
        <div className="note">
            <h1 >  Property Address: {props.address} </h1>
            <p > Erected Board Type: {props.board}</p>
            <p > Total Fee Charged: {props.fee}</p>
        </div>
    )
}


const Accent = (props) => {
  let fee;
  props.fees && ([fee]= props.fees)

  const estates  = props.agentz;
  if (!estates || estates.length === 0) return <h2 className='list-head'> Sorry, No property managed by this client was found</h2>;
  return (
     <>
      <h2 className='list-head'>Properties managed by Accent Estate Agents</h2>
      {estates.map((estate) => <List 
          key={estate.id}
          address={estate.address}
          board={estate.board}
          fee={estate.fee}
        /> 
      )}
      {props.fees && <h1 className='total'>Grand Total : {fee.total}  </h1>}
    </>
  );
};
export default Accent;
