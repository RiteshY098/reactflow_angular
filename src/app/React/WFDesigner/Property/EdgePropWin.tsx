import React from 'react';
import { Input } from 'antd';

function EdgePropWin({ edgeData, onEdgeDataChange, onSourceChange, onTargetChange }: any) {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "10px", backgroundColor: '#dcdfe3', borderRadius: 3 }}>
      <h3>Edge Information</h3>
      {edgeData ? (
        <>
          <div><strong>ID:</strong> {edgeData.id}</div>
          <div><strong>Source:</strong>
            <Input
              value={edgeData.source}
              onChange={(e) => onSourceChange(e.target.value)}
            />
          </div>
          <div><strong>Target:</strong>
            <Input
              value={edgeData.target}
              onChange={(e) => onTargetChange(e.target.value)}
            />
          </div>
          <div><strong>Label:</strong>
            <Input
              value={edgeData.label || ""}
              onChange={(e) => onEdgeDataChange("label", e.target.value)}
            />
          </div>
        </>
      ) : (
        <p>No edge selected</p>
      )}
    </div>
  );
}

export default EdgePropWin;


