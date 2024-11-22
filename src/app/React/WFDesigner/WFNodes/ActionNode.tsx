// import React, { useState } from 'react';
// import { Handle, Position } from 'react-flow-renderer';
// import { FcCalendar, FcSms } from 'react-icons/fc';

// const ModalForEvent = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;
//     return (
//         <div style={modalOverlayStyle}>
//             <div style={modalContentStyle}>
//                 <h2>Event Details</h2>
//                 <p>Here you can add details about events.</p>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// const ModalForEmail = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;
//     return (
//         <div style={modalOverlayStyle}>
//             <div style={modalContentStyle}>
//                 <h2>Email Details</h2>
//                 <p>Here you can add details about mails.</p>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// const modalOverlayStyle = {
//  position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 300,
//     bottom: 300,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 500
// };

// const modalContentStyle = {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 5,
//     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//     textAlign: 'center',
// };

// export const AdditionalNode = ({ data }) => {
//     const [isModalOpenforEvent, setIsModalOpenforEvent] = useState(false);
//     const [isModalOpenforEmail, setIsModalOpenforEmail] = useState(false);
//     const [activeItem, setActiveItem] = useState(null);

//     const redirectEvent = () => {
//         setIsModalOpenforEvent(true);
//         setActiveItem('event');
//     };

//     const redirectEmail = () => {
//         setIsModalOpenforEmail(true);
//         setActiveItem('email');
//     };

//     const closeModal = () => {
//         setIsModalOpenforEvent(false);
//         setIsModalOpenforEmail(false);
//         setActiveItem(null);  // Clear the active item when modals are closed
//     };

//     const mystyle = {
//         border: "solid 1px green",
//         paddingHorizontal: 15,
//         fontSize: 10,
//         borderRadius: 10,
//         backgroundColor: 'lightblue',
//         alignContent: 'center',
//         justifyContent: 'center',
//         width: 60,
//         alignItems: 'center',
//         textAlign: 'center',
//         marginBottom: 5,
//         cursor: 'pointer',
//         transition: 'background-color 0.3s ease',
//     };

//     const highlightStyle = {
//         ...mystyle,
//         backgroundColor: 'lightblue',  // Highlight color when clicked
//         border: 'solid 1px blue',  // Change border color when clicked
//     };

//     return (
//         <div style={{ display: 'flex' }}>
//             <Handle
//                 type="target"
//                 position={Position.Top}
//                 style={{ background: 'red' }}
//                 id='t1'
//             />
//             <Handle
//                 type="source"
//                 position={Position.Left}
//                 id='s1'
//             />
//             <Handle
//                 type="source"
//                 position={Position.Right}
//                 id='s2'
//             />
            
//             <div style={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', flex: 1, width: "100%", position: 'absolute', paddingTop:8 }}>
//                 {data.label}
//             </div>
//             <Handle
//                 type="source"
//                 position={Position.Bottom}
//                 id='s3'
//             />
//             <div style={{ marginTop: 0, marginLeft: -65, position: 'relative' }}>
//                 <div
//                     style={activeItem === 'event' ? highlightStyle : mystyle}
//                     onClick={redirectEvent}
//                 >
//                     <FcCalendar style={{ paddingTop: 2, paddingRight: 2 }} />
//                     Events
//                 </div>
//                 <div
//                     style={activeItem === 'email' ? highlightStyle : mystyle}
//                     onClick={redirectEmail}
//                 >
//                     <FcSms style={{ paddingTop: 2, paddingRight: 2 }} />
//                     Email
//                 </div>
//             </div>
//             <ModalForEvent isOpen={isModalOpenforEvent} onClose={closeModal} />
//             <ModalForEmail isOpen={isModalOpenforEmail} onClose={closeModal} />
//         </div>
//     );
// };

import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { FcCalendar, FcSms } from 'react-icons/fc';

export const ActionNode = ({ data, redirectEvent, redirectEmail }: any) => {

    const handleRedirectEvent = () => {
        redirectEvent({ label: data.label });
    };

    const handleRedirectEmail = () => {
        redirectEmail({ label: data.label });
    };

    const mystyle: any = {
        border: "solid 1px green",
        paddingHorizontal: 15,
        fontSize: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        alignContent: 'center',
        justifyContent: 'center',
        width: 60,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 5,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };


    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginTop: 0, marginLeft: -65, position: 'relative' }}>
                <div style={mystyle} onClick={handleRedirectEvent} >
                    <FcCalendar style={{ paddingTop: 2, paddingRight: 2 }} />
                    Events
                </div>
                <div style={mystyle} onClick={handleRedirectEmail} >
                    <FcSms style={{ paddingTop: 2, paddingRight: 2 }} />
                    Email
                </div>
            </div>

            <Handle    type="target"    position={Position.Top}   style={{ background: 'red' }}  id='t1'    />
            <Handle    type="source"    position={Position.Left}    id='s1'    />
            <Handle    type="source"    position={Position.Right}    id='s2'    />
            
            <div style={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', flex: 1, width: "100%", position: 'absolute', paddingTop:8 }}>
                {data.label}
            </div>
            <Handle    type="source"    position={Position.Bottom}    id='s3'    />
        </div>
    );
};
