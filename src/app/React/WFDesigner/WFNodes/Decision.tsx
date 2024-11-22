import React from 'react';
import { Handle, Position } from 'react-flow-renderer';



export const DecisionNode = ({ data }: any) => {
    return (
        <div style={{ width: 120, height: 80, backgroundColor: '#fafc74', border: 'solid 2px orange', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', textAlign: 'center' }}>
            <Handle type="target" position={Position.Top} style={{ background: 'orange' }} />
            <div style={{ marginTop: 20 }}>{data.label}</div>
            <Handle type="source" position={Position.Bottom} style={{ background: 'orange' }} />
        </div>
    );
};
