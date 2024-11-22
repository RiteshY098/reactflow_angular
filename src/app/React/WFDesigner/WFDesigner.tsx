import React, { useState, useCallback, useEffect, useMemo, useRef, ReactEventHandler } from 'react';
import ReactFlow, { addEdge, useNodesState, useEdgesState, ConnectionLineType, MarkerType, Background, BackgroundVariant, NodeTypes, Controls,  ReactFlowInstance, Edge, ReactFlowProvider, useReactFlow  } from 'react-flow-renderer';
import AddNode from './Forms/AddNode';
import AddConnector from './Forms/AddConnector';
import NodePropWin from './Property/NodePropWin';
import EdgePropWin from './Property/EdgePropWin';
import ControlsPage from './ControlsPage';
import { nodes as initialNodes, edges as initialEdges } from './DataModel';
//import { TaskNode, EndNode, DecisionNode, StartNode, ActionNode } from './CustomRhombusNode';
import { TaskNode } from './WFNodes/TaskNode';
import { ActionNode } from './WFNodes/ActionNode';
import { StartNode } from './WFNodes/StartNode';
import { DecisionNode } from './WFNodes/Decision';
import { EndNode } from './WFNodes/EndNode';
import { NormalNode } from './WFNodes/NormalNode';
import { v4 as uuidv4 } from 'uuid';
import ActorPropWin from './Property/ActorPropWin';
import EventPropWin from './Property/EventPropWin';
import EmailPropWin from './Property/EmailPropWin';
import EscalationPropWin from './Property/EscalationPropWin';
import ReminderPropWin from './Property/ReminderPropWin';


// let actiondata = "NO Data"; 
// const OnButtonClick = (data) => {
//     console.log(data);
//     actiondata = data; 
// };



// const nodeTypes = {
//     actionnode: (props) => <ActionNode {...props} onButtonClick={OnButtonClick} />,
//     tasknode: TaskNode,
//     endnode: EndNode,
//     decisionnode: DecisionNode,
//     successnode: SuccessNode,
//     addnode: AdditionalNode,
// };

function WFDesigner() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [isNodeModalVisible, setIsNodeModalVisible] = useState(false);
    const [isEdgeModalVisible, setIsEdgeModalVisible] = useState(false);
    const [selectedNodeId, setSelectedNodeId] = useState(null);
    const [selectedEdgeId, setSelectedEdgeId] = useState(null);
    const [selectedNodeData, setSelectedNodeData] = useState(null);
    const [selectedEdgeData, setSelectedEdgeData] = useState(null);
    const [toggle, setToggle] = useState(false);
    // const [selectedColor, setSelectedColor] = useState("#ffffff");
    const [selectedWidth, setSelectedWidth] = useState("2px solid black");
    const [shape, setShape] = useState('shape');
    const [edgeParams, setEdgeParams] = useState(null);
    const [edgeAnimation, setEdgeAnimation] = useState("");
    const [showActor, setShowActor] = useState(false);
    const [showEvent, setShowEvent] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showEscalation, setShowEscalation] = useState(false);
    const [showReminder, setShowReminder] = useState(false);
    const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
   // const {screenToFlowPosition} = useReactFlow();


    let actiondata = useRef("no data");
    let eventdata = useRef("no data");
    let emaildata = useRef("no data");
    let escalationdata = useRef("no data");
    let reminderdata = useRef("no data");

    const OnButtonClick = useCallback((data: any) => {
        console.log(data);
        actiondata.current = data;
        setShowActor(showActor => !showActor);
        setShowEvent(false);
        setShowEmail(false);
        setShowEscalation(false);
        setShowReminder(false);
        const event = new CustomEvent('onButtonClicked', { detail: { data } });
        window.dispatchEvent(event);
    }, []);

    const redirectEvent = useCallback((data: any) => {
        console.log("Redirect Event Data:", data);
        eventdata.current = data;
        setShowEvent(showEvent => !showEvent);
        setShowActor(false);
        setShowEmail(false);
        setShowEscalation(false);
        setShowReminder(false);

        const event2 = new CustomEvent('onEventClicked', { detail: { data } });
        window.dispatchEvent(event2);
    }, []);

    const redirectEmail = useCallback((data: any) => {
        console.log("Redirect Email Data:", data);
        emaildata.current = data;
        setShowEmail(showEmail => !showEmail);
        setShowActor(false);
        setShowEvent(false);
        setShowEscalation(false);
        setShowReminder(false);
    }, []);

    const OnEscalationClick = useCallback((data: any) => {
        console.log("Redirect Escalation Data:", data);
        escalationdata.current = data;
        setShowEmail(false);
        setShowActor(false);
        setShowEvent(false);
        setShowEscalation(showEscalation => !showEscalation);
        setShowReminder(false);
    }, []);

    const OnReminderClick = useCallback((data: any) => {
        console.log("Redirect Reminder Data:", data);
        reminderdata.current = data;
        setShowEmail(false);
        setShowActor(false);
        setShowEvent(false);
        setShowEscalation(showReminder => !showReminder);
        setShowReminder(false);
    }, []);

    const nodeTypes = useMemo(() => ({
        tasknode: (props: any) => <TaskNode {...props} onButtonClick={OnButtonClick} onEscalationClick={OnEscalationClick} onReminderClick={OnReminderClick} />,
        normalnode: NormalNode,
        startnode: StartNode,
        decisionnode: DecisionNode,
        endnode: EndNode,
        addnode: (props: any) => <ActionNode {...props} redirectEvent={redirectEvent} redirectEmail={redirectEmail} />,
    }), [OnButtonClick, redirectEvent, redirectEmail]);

    const getNodeId = () => uuidv4();

    const onConnect = useCallback((params: any) => {
        setEdgeParams(params);
        setIsEdgeModalVisible(true);
    }, []);


    const onLoad2 = (_reactFlowInstance : any) =>
        setReactFlowInstance(_reactFlowInstance);    

    // const onLoadHandler = (rf: any) => {
    //     setReactFlowInstance(rf);
    //   }
    
    //   useEffect(() => {
    //     if (reactFlowInstance) {
    //         reactFlowInstance.fitView();
    //     }
    //   }, [reactFlowInstance]);

    
    const onDragOver = useCallback((event: any) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      }, []);
    
      
    
    // const onDrop = (event: any) => {
    //     event.preventDefault();

    //     if (!reactFlowInstance || !reactFlowWrapper.current) {
    //         console.warn('React Flow instance or bounds are not available.');
    //         return;
    //     }

    //     const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    //     const type = event.dataTransfer.getData("application/reactflow");

    //     if (!type) return;

    //     const position = reactFlowInstance.project({    
    //         x: event.clientX - reactFlowBounds.left,
    //         y: event.clientY - reactFlowBounds.top
    //     });

    //     const newNode = {
    //         id: uuidv4(),
    //         type,
    //         position,
    //         // sourcePosition: "right",
    //         // targetPosition: "left",
    //         data: { label: `${type} node` }
    //     };

    //     setNodes((nds : any) => nds.concat(newNode));
    // };

    
    const handleEdgeOk = (values: any) => {
        let mEdgeParams: any = edgeParams;
        if (!mEdgeParams) return;

        const newEdge = {
            ...mEdgeParams,
            label: values.edgeLabel,
            type: 'smoothstep',
            animated: Boolean(edgeAnimation),
            labelBgBorderRadius: 4,
            style: { strokeWidth: 3 },
            labelStyle: { fill: 'white', fontWeight: 500 },
            labelBgStyle: { fill: 'black', color: '#000', },
            markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 15,
                height: 10,
            },
        };

        setEdges((eds) => addEdge(newEdge, eds));
        setIsEdgeModalVisible(false);
        setEdgeParams(null);
    };

    const handleEdgeCancel = () => {
        setIsEdgeModalVisible(false);
        setEdgeParams(null);
    };

    const handleNodeCancel = () => {
        setIsNodeModalVisible(false);
    };

    const handleNodeOk = (values: any) => {
        const { nodeName, nodeType } = values;  
        onAdd(nodeName, nodeType);  
        setIsNodeModalVisible(false);
    };

    const onNodeClick = (event: any, node: any) => {
        console.log('Node id', node.id);
        console.log('node data ---', node);
        console.log('event data ---', event);
        setSelectedNodeId(node.id);
        setSelectedNodeData(node);
        setSelectedEdgeId(null);

        const eventfornode =  new CustomEvent('onNodeClicked', { detail: { node } });
        window.dispatchEvent(eventfornode);
    };

    const onNodeDoubleClick = (event: any, node: any) => {
        console.log('Node id', node.id);

        const newNodeId = getNodeId();
        const newNode = {
            id: String(newNodeId),
            data: { label: `New Node` },
            position: {
                x: node.position.x + 150,
                y: node.position.y + 150,
            },
            style: {
                background: 'white',
                borderRadius: 5,
                border: "solid 2px yellow",
                width: 150,
                height: 50,
            },
            type: 'addnode'
        };

        const newEdge = {
            id: `e-${node.id}-${newNodeId}`,
            type: 'smoothstep',
            source: node.id,
            target: newNodeId,
            animated: false,
            labelBgBorderRadius: 4,
            style: { strokeWidth: 3 },
            labelStyle: { fill: 'white', fontWeight: 500 },
            labelBgStyle: {
                fill: 'black', color: 'white',
            },
            markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 15,
                height: 10,
            },
        };

        setNodes((nds) => [...nds, newNode]);
        setEdges((eds) => [...eds, newEdge]);
    };

    const onEdgeClick = (event: any, edge: any) => {
        console.log('Edge id', edge.id);
        setSelectedEdgeId(edge.id);
        setSelectedEdgeData(edge);
        setSelectedNodeId(null);

        const eventforedge =  new CustomEvent('onEdgeClicked', { detail: { edge } });
        window.dispatchEvent(eventforedge);
        
    };


    const onAdd: (label: any, shape: any) => void = (label, shape) => {
        const newNode: any = {
            id: String(getNodeId()),
            data: {
                label
            },
            position: { x: 100, y: 100 },
            type: shape,
        };
        console.log(newNode)
        setNodes((nds) => nds.concat(newNode));
    }

    const deleteNodeById = (id: any) => {
        setNodes((nodes) => {
            let filteredNodes = nodes.filter((node) => node.id !== id);
            return filteredNodes;
        });
    };

    const deleteEdgeById = (id: any) => {
        setEdges((edges) => {
            let filteredEdges = edges.filter((edge) => edge.id !== id);
            return filteredEdges;
        });
    };

    useEffect(() => {
        if (selectedNodeId) {
            const node: any = nodes.find((n) => n.id === selectedNodeId);
            setSelectedNodeData(node);
        }
    }, [nodes, selectedNodeId]);

    useEffect(() => {
        if (selectedEdgeId) {
            const edge: any = edges.find((e) => e.id === selectedEdgeId);
            setSelectedEdgeData(edge);
        }
    }, [edges, selectedEdgeId]);



    const handleNodeDataChange = (field: any, value: any) => {
        if (!selectedNodeId) return;

        setNodes((nds) =>
            nds.map((node) =>
                node.id === selectedNodeId
                    ? {
                        ...node,
                        data: {
                            ...node.data,
                            [field]: value,
                        },
                    }
                    : node
            )
        );
        const event = new CustomEvent('nodeDataChanged', { detail: { field, value } });
        window.dispatchEvent(event);
    };

    const handlePositionChange = (field: any, value: any) => {
        if (!selectedNodeId) return;

        setNodes((nds) =>
            nds.map((node) =>
                node.id === selectedNodeId
                    ? {
                        ...node,
                        position: {
                            ...node.position,
                            [field]: Number(value),
                        },
                    }
                : node
            )
        );
    };

    const handleEdgeDataChange = (field: any, value: any) => {
        if (!selectedEdgeId) return;

        setEdges((eds) =>
            eds.map((edge) =>
                edge.id === selectedEdgeId
                    ? {
                        ...edge,
                        [field]: value,
                    }
                : edge
            )
        );
    };

    const handleSourceChange = (value: any) => {
        if (!selectedEdgeId) return;

        const updatedEdges = edges.map((edge) =>
            edge.id === selectedEdgeId
                ? { ...edge, source: value }
                : edge
        );

        setEdges(updatedEdges);
        setSelectedEdgeData((prevData: any) => ({ ...prevData, source: value }));
    };

    const handleTargetChange = (value: any) => {
        if (!selectedEdgeId) return;

        const updatedEdges = edges.map((edge) =>
            edge.id === selectedEdgeId
                ? { ...edge, target: value }
                : edge
        );

        setEdges(updatedEdges);
        setSelectedEdgeData((prevData: any) => ({ ...prevData, target: value }));
    };

    const handleSave = () => {
        const graphData: {nodes: any[], edges: any[]}  = {
            nodes ,
            edges,
        };
        let savedGraphs: Record<string, {nodes: any[], edges: any[]}> = JSON.parse(localStorage.getItem('graphs') || '{}');

        const graphName = prompt('Enter a name for this graph:');
        if (graphName) {
            savedGraphs[graphName] = graphData;
            localStorage.setItem('graphs', JSON.stringify(savedGraphs));
            alert('Graph saved!');


        } else if (graphName === '') {
            alert('Graph name cannot be empty.');
        }

        const eventforsave = new CustomEvent('onSaveClicked', { detail: { graphData,graphName  } });
        window.dispatchEvent(eventforsave);
    };

    const handleLoad = () => {
        const savedGraphs: Record<string, any> = JSON.parse(localStorage.getItem('graphs') || '{}');

        if (Object.keys(savedGraphs).length === 0) {
            alert('No saved graphs found.');
            return;
        }

        const graphNames = Object.keys(savedGraphs);
        const graphList = graphNames.map((name, index) => `${index + 1}: ${name}`).join('\n');

        const userInput: any = prompt('Select a graph to load by index or name:\n' + graphList);

        const index = parseInt(userInput, 10);

        if (!isNaN(index) && index > 0 && index <= graphNames.length) {
            const selectedGraphName = graphNames[index - 1];
            const { nodes: loadedNodes, edges: loadedEdges } = savedGraphs[selectedGraphName];
            setNodes(loadedNodes);
            setEdges(loadedEdges);
        } else if (userInput && savedGraphs[userInput]) {
            const { nodes: loadedNodes, edges: loadedEdges } = savedGraphs[userInput];
            setNodes(loadedNodes);
            setEdges(loadedEdges);
        } else {
            alert('Invalid selection. Please enter a valid index number or graph name.');
        }
    };

    return (
        <div style={{ height: "100vh", margin: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ flex: 2, backgroundColor: '#d5e6d3' }}>
                <AddNode
                    visible={isNodeModalVisible}
                    onCancel={handleNodeCancel}
                    onOk={handleNodeOk}
                    setShape={setShape}
                    setSelectedWidth={setSelectedWidth}
                />
                <AddConnector
                    visible={isEdgeModalVisible}
                    onCancel={handleEdgeCancel}
                    onOk={handleEdgeOk}
                    setEdgeAnimation={setEdgeAnimation}
                />
                <ReactFlowProvider>
                <div style={{ flexGrow: 1, height: '100vh' }} ref={reactFlowWrapper}>
                    
                <ControlsPage
                    onAddNode={() => setIsNodeModalVisible(true)}
                    onDeleteNode={() => selectedNodeId && deleteNodeById(selectedNodeId)}
                    onDeleteEdge={() => selectedEdgeId && deleteEdgeById(selectedEdgeId)}
                    onToggleJson={() => setToggle(!toggle)}
                    onSave={handleSave}
                    onLoad={handleLoad}
                />
                <ReactFlow style={{height: 1000, width: 1000}}
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onNodeClick={onNodeClick}
                    onNodeDoubleClick={onNodeDoubleClick}
                    onEdgeClick={onEdgeClick}
                    onEdgesChange={onEdgesChange}
                    onNodesChange={onNodesChange}
                    onConnect={onConnect}
                    connectionLineType={ConnectionLineType.SmoothStep}
                    onLoad={onLoad2}
                   // onDrop={onDrop}
                    onDragOver={onDragOver}
                    nodesDraggable={true}
                    defaultZoom={1.2}
                    
                >
                    <Background
                        variant={BackgroundVariant.Dots}
                        gap={33}
                        size={1}
                        color="#aaa"
                    />
                    <Controls />
                </ReactFlow>
                </div> 
          </ReactFlowProvider>
            </div>

            {
                showActor ? (
                    <ActorPropWin
                        data={actiondata.current}
                    />
                ) : showEvent ? (
                    <EventPropWin
                        data={eventdata.current}
                    />
                ) : showEmail ? (
                    <EmailPropWin
                        data={emaildata.current}
                    />
                ) : showEscalation ? (
                    <EscalationPropWin
                        data={escalationdata.current}
                    />
                ) : showReminder ? (
                    <ReminderPropWin
                        data={reminderdata.current}
                    />
                ) : null
            }

            {toggle ? (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "10px" }}>
                    <NodePropWin
                        nodeData={selectedNodeData}
                        onNodeDataChange={handleNodeDataChange}
                        onPositionChange={handlePositionChange}
                    />
                    <EdgePropWin
                        edgeData={selectedEdgeData}
                        onEdgeDataChange={handleEdgeDataChange}
                        onSourceChange={handleSourceChange}
                        onTargetChange={handleTargetChange}
                    />
                </div>
            )
                : (
                    null
                )}

        </div>
    );
}

export default WFDesigner;


