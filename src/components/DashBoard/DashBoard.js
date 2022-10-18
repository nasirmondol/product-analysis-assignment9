import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import LineChart from '../LineChart/LineChart';
const chart = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
];

const DashBoard = () => {

    return (
        <div>
            <div>
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                <ComposedChart
                    width={400}
                    height={300}
                    data={chart}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                    <Scatter dataKey="" fill="red" />
                </ComposedChart>
                {/* </ResponsiveContainer> */}
            </div>
            <div>
                {/* <LineChart></LineChart> */}
            </div>
        </div>
    );
};

export default DashBoard;