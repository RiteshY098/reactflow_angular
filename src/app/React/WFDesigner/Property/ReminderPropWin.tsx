// SideWindow.js
import React from 'react';

const ReminderPropWin = ({data}: any) => {
  return (
    <div style={{width:250, height: 590 ,border: "solid 2px cyan", borderRadius: 5, backgroundColor: '#eee'}}> 
    <h3 style={{padding: 10}}>Reminder Label of node : {data.label} </h3>
    </div>
  );
};

export default ReminderPropWin;
