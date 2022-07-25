import React from 'react';
import GroupContainer from '../../components/GroupContainer';
import { Report } from '../../constants/reports';
import { formatCurrency } from '../../helpers/formatCurrency';
import TableView from './TableView';

type GroupedGridViewProps = {
  reports: Report[];
  groupBy: string;
  groups: any[];
};

const GroupedGridView = ({
  reports,
  groupBy,
  groups,
}: GroupedGridViewProps) => {
  const groupedReports: any = {};
  if (groups.length === 0) return <></>;
  groups.forEach((element: any) => {
    const key = element[groupBy === 'project' ? 'projectId' : 'gatewayId'];
    const value = { ...element, reports: [], totalAmount: 0.0 };
    groupedReports[key] = value;
  });
  reports.forEach((item) => {
    const key = item[groupBy === 'project' ? 'projectId' : 'gatewayId'];
    groupedReports[key].reports.push({ ...item });
    groupedReports[key].totalAmount += item.amount;
  });

  return (
    <>
      {Object.keys(groupedReports).map((k) => {
        const group = groupedReports[k];
        return (
          <div key={k}>
            <GroupContainer>
              <div>{group.name}</div>
              <div>{formatCurrency(group.totalAmount)}</div>
            </GroupContainer>
            <TableView reports={group.reports} />
          </div>
        );
      })}
    </>
  );
};

export default GroupedGridView;
