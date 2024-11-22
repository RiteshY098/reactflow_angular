import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { FcBusinessman, FcCalendar, FcSms } from 'react-icons/fc';
import { LuBarChart2 } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";

export const TaskNode = ({ data, onButtonClick, onReminderClick, onEscalationClick }: any) => {
    const styleforactor: any = {
        border: "solid 1px green",
        paddingHorizontal: 15,
        fontSize: 10,
        borderRadius: 10,
        backgroundColor: 'gold',
        alignContent: 'center',
        justifyContent: 'center',
        width: 60,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 5,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const styleforescalation: any = {
        border: "solid 1px green",
        paddingHorizontal: 15,
        fontSize: 10,
        borderRadius: 10,
        backgroundColor: 'skyblue',
        alignContent: 'center',
        justifyContent: 'center',
        width: 60,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 5,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const styleforreminder: any = {
        border: "solid 1px green",
        paddingHorizontal: 20,
        fontSize: 10,
        borderRadius: 10,
        backgroundColor: 'lightgreen',
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
        <>
            <div style={{ marginTop: 0, marginLeft: -65, position: 'relative' }}>
                <div style={styleforactor} onClick={() => onButtonClick(data)}>
                    <FcBusinessman style={{ paddingTop: 2, paddingRight: 2 }} />
                    Actor
                </div>
                <div style={styleforescalation} onClick={() => onEscalationClick(data)}>
                    <LuBarChart2 style={{ paddingTop: 2, paddingRight: 2 }} />
                    Escalation
                </div>
                <div style={styleforreminder} onClick={() => onReminderClick(data)}>
                    <LuClock4 style={{ paddingTop: 2, paddingRight: 2 }} />
                    Reminder
                </div>
            </div>
            <div style={{ width: 140, height: 70, textOverflow: 'ellipsis', backgroundColor: 'lightblue', border: 'solid 2px blue', borderRadius: '15%', textAlign: 'center', marginTop: -64 }}>
                <Handle id="t1" type="target" position={Position.Top} style={{ background: 'blue' }} />
                <Handle id="s2" type="source" position={Position.Bottom} style={{ background: 'black' }} />
                <Handle id="t2" type="target" position={Position.Left} style={{ background: 'blue' }} />
                <Handle id="s1" type="source" position={Position.Right} style={{ background: 'black' }} />
                <div style={{ marginTop: 20 }}>{data.label}</div>
            </div>
        </>
    );
};