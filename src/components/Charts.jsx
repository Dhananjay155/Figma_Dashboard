/* eslint-disable react/prop-types */
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SplitChart = ({ data }) => (
  <div style={{ width: '100%', height: 300 }}>
    <h4>Units Processed Today</h4>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="passed" fill="#002BC5" />
        <Bar dataKey="rejected" fill="#00D7C4" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const RejectionPieChart = ({ data }) => {
  const COLORS = ['#002BC5', '#00D7C4'];

  return (
    <div style={{ width: '100%', height: 350 }}>
      <h4>Rejection Reasons</h4>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />z
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
