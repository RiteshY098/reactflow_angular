import React from 'react';
import { Input } from 'antd';

function NodePropWin({ nodeData, onNodeDataChange, onPositionChange }: any) {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "10px", marginTop: 20, backgroundColor: '#dcdfe3', borderRadius: 3 }}>
      <h3>Node Information</h3>
      {nodeData ? (
        <>
          <div><strong>ID:</strong> {nodeData.id}</div>
          <div><strong>Label:</strong>
            <Input
              value={nodeData.data.label}
              onChange={(e) => onNodeDataChange("label", e.target.value)}
            />
          </div>
          <div><strong>Position:</strong>
            <div>
              X: <Input
                type="number"
                value={nodeData.position.x}
                onChange={(e) => onPositionChange("x", e.target.value)}
              />
            </div>
            <div>
              Y: <Input
                type="number"
                value={nodeData.position.y}
                onChange={(e) => onPositionChange("y", e.target.value)}
              />
            </div>
          </div>
        </>
      ) : (
        <p>No node selected</p>
      )}
    </div>
  );
}

export default NodePropWin;

