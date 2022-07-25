import React from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';
import ChartContainer from '../../components/reports/ChartContainer';
import { useTypedSelector as useProjectTypedSelector } from '../../selectors/projects';
import { useTypedSelector as useGatewayTypedSelector } from '../../selectors/gateways';
import { useTypedSelector as useReportTypedSelector } from '../../selectors/reports';

import { ALL_GATEWAYS_OPTION } from '../../constants/gateways';
import { ALL_PROJECTS_OPTION } from '../../constants/projects';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const getGroupedData = (reports, groupBy, groups) => {
  const groupedData = [];
  if (groups.length === 0) return [];
  groups.forEach((element) => {
    const key = element[groupBy === 'project' ? 'projectId' : 'gatewayId'];
    const value = { name: element.name, value: 0 };
    groupedData[key] = value;
  });
  reports.forEach((item) => {
    const key = item[groupBy === 'project' ? 'projectId' : 'gatewayId'];
    groupedData[key].value += item.amount;
  });
  const optmizedData = Object.values(groupedData).map((item) => {
    return {
      ...item,
      value: Math.round((item.value + Number.EPSILON) * 100) / 100,
    };
  });
  return optmizedData;
};

function ChartView() {
  const { data: projects, selectedProjectId } = useProjectTypedSelector(
    (state) => state.projects
  );
  const { data: gateways, selectedGatewayId } = useGatewayTypedSelector(
    (state) => state.gateways
  );
  const { data } = useReportTypedSelector((state) => state.reports);

  const projectData =
    selectedProjectId === ALL_PROJECTS_OPTION.value
      ? getGroupedData(data, 'project', projects)
      : [];
  const gatewayData =
    selectedGatewayId === ALL_GATEWAYS_OPTION.value
      ? getGroupedData(data, 'gateway', gateways)
      : [];

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Legend verticalAlign="top" align="center" />
          {projectData.length && (
            <Pie
              data={projectData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
            />
          )}
          {gatewayData.length && (
            <Pie
              data={gatewayData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={110}
              outerRadius={130}
              fill="#82ca9d"
              label
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default ChartView;
