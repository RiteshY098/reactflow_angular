
import React from 'react';

const EscalationPropWin = ({data}: any) => {
  return (
    <div style={{width:250, height: 590 ,border: "solid 2px cyan", borderRadius: 5, backgroundColor: '#eee'}}> 
    <h3 style={{padding: 10}}> escalation Label of node : {data.label} </h3>
    </div>
  );
};

export default EscalationPropWin;