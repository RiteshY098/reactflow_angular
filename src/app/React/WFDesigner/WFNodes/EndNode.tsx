import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

export const EndNode = ({ data }: any) => {
    return (
        <div style={{ width: 70, height: 70, backgroundColor: 'lightgreen', border: 'solid 2px Green', borderRadius: '50%', textAlign: 'center', }}>
            <Handle type="target" position={Position.Top} style={{ background: 'green' }} />
            <div style={{ marginTop: 20, }}>{data.label}</div>
            <Handle type="source" position={Position.Bottom} style={{ background: 'black' }} />
        </div>
    );
};