import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { FcCalendar, FcSms } from 'react-icons/fc';

export const NormalNode = ({ data }: any) => {
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

        // <div style={{ display: 'flex' }}>
        //     <div style={{ marginTop: 0, marginLeft: -65, position: 'relative' }}>
        //         <div style={mystyle}  >
        //             <FcCalendar style={{ paddingTop: 2, paddingRight: 2 }} />
        //             Events
        //         </div>
        //         <div style={mystyle}  >
        //             <FcSms style={{ paddingTop: 2, paddingRight: 2 }} />
        //             Email
        //         </div>
        //     </div>

        //     <Handle    type="target"    position={Position.Top}   style={{ background: 'red' }}  id='t1'    />
        //     <Handle    type="source"    position={Position.Left}    id='s1'    />
        //     <Handle    type="source"    position={Position.Right}    id='s2'    />
            
        //     <div style={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center', flex: 1, width: "100%", position: 'absolute', paddingTop:8 }}>
        //         {data.label}
        //     </div>
        //     <Handle    type="source"    position={Position.Bottom}    id='s3'    />
        // </div>
        <>


        <div style={{ width: 150, height: 70, backgroundColor: 'lightgreen', border: 'solid 2px green', borderRadius: 5, textAlign: 'center', color: 'black' }}>
            <Handle id='t1' type="target" position={Position.Top} style={{ background: 'red' }} />
            <div style={{ marginTop: 20 }}>{data.label}</div>
            <Handle id='s1' type="source" position={Position.Bottom} style={{ background: 'black' }} />
            <Handle id='s2' type="source" position={Position.Left} style={{ background: 'black' }} />
            <Handle id='s3' type="source" position={Position.Right} style={{ background: 'black' }} />

        </div>

        <div style={{  marginLeft: -68, position: 'relative', marginTop: -69, marginBottom: 32 }}>
                <div style={mystyle}  >
                    <FcCalendar style={{ paddingTop: 2, paddingRight: 2 }} />
                    Events
                </div>
                <div style={mystyle}  >
                    <FcSms style={{ paddingTop: 2, paddingRight: 2 }} />
                    Email
                </div>
            </div>
        </>
    );
};