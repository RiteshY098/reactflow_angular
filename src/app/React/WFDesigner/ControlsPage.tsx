import React from 'react';
import { Button } from 'antd';

function ControlsPage({ onAddNode, onDeleteNode, onDeleteEdge, onToggleJson, onSave, onLoad }: any) {

  // const onDragStart = (event: any, nodeType: any) => {
  //   event.dataTransfer.setData('application/reactflow', nodeType);
  //   event.dataTransfer.effectAllowed = 'move';
  // };

  const styles : any = {
    aside: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      width: '200px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      margin: 10,
      zIndex: 10, 
      position: 'fixed',
    },
    description: {
      marginBottom: '10px',
      fontSize: '14px',
      color: '#333',
    },
    dndnode: {
      padding: '8px',
      marginBottom: '5px',
      borderRadius: '3px',
      cursor: 'move',
      textAlign: 'center',
      fontSize: '14px',
      color: '#fff',
    },
    input: {
      backgroundColor: '#4CAF50', // Green
    },
    output: {
      backgroundColor: '#2196F3', // Blue
    },
    default: {
      backgroundColor: '#FFC107', // Amber
    }
  };

  return (
    <>


      <div>
        <Button style={{ margin: 5, borderRadius: 25 }} type="primary" onClick={onAddNode}>
          Add Custom Node
        </Button>
        <Button
          style={{ margin: 5, borderRadius: 25 }}
          onClick={onDeleteNode}
          disabled={!onDeleteNode}
        >
          Delete Selected Node
        </Button>
        <Button
          style={{ margin: 5, borderRadius: 25 }}
          onClick={onDeleteEdge}
          disabled={!onDeleteEdge}
        >
          Delete Selected Edge
        </Button>
        <Button style={{ margin: 5, borderRadius: 25 }} type="primary" onClick={onToggleJson}>
          Edit details
        </Button>
        <Button style={{ margin: 5, borderRadius: 25 }} type="default" onClick={onSave}>
          Save
        </Button>
        <Button style={{ margin: 5, borderRadius: 25 }} type="default" onClick={onLoad}>
          Load
        </Button>
              
      {/* <aside style={styles.aside}>
        <div style={styles.description}>You can drag these nodes to the pane</div>
        <div
          style={{ ...styles.dndnode, ...styles.input }}
          onDragStart={(event) => onDragStart(event, 'input')}
          draggable
        >
          Input Node
        </div>
        <div
          style={{ ...styles.dndnode, ...styles.default }}
          onDragStart={(event) => onDragStart(event, 'default')}
          draggable
        >
          Default Node
        </div>
        <div
          style={{ ...styles.dndnode, ...styles.output }}
          onDragStart={(event) => onDragStart(event, 'output')}
          draggable
        >
          Output Node
        </div>
      </aside> */}
      </div>

    </>
  );
}
export default ControlsPage;







