import React from 'react';
import { Handle, Position } from 'react-flow-renderer';


export const StartNode = ({ data }: any) => {
    return (
        <div style={{ width: 70, height: 70, backgroundColor: 'lightcoral', border: 'solid 2px red', borderRadius: '50%', textAlign: 'center', color: 'white' }}>
            <Handle type="target" position={Position.Top} style={{ background: 'red' }} />
            <div style={{ marginTop: 20 }}>{data.label}</div>
            <Handle type="source" position={Position.Bottom} style={{ background: 'black' }} />
        </div>
    );
};