import React from 'react';
import { ALL_GATEWAYS_OPTION } from '../../constants/gateways';
import { ALL_PROJECTS_OPTION } from '../../constants/projects';
import { useTypedSelector as useProjectTypedSelector } from '../../selectors/projects';
import { useTypedSelector as useGatewayTypedSelector } from '../../selectors/gateways';
import { useTypedSelector as useReportTypedSelector } from '../../selectors/reports';
import TableView from './TableView';
import GroupedGridView from './GroupedGridView';

function ListView() {
  const { data: projects, selectedProjectId } = useProjectTypedSelector(
    (state) => state.projects
  );
  const { data: gateways, selectedGatewayId } = useGatewayTypedSelector(
    (state) => state.gateways
  );
  const { data } = useReportTypedSelector((state) => state.reports);

  if (selectedProjectId === ALL_PROJECTS_OPTION.value) {
    return (
      <GroupedGridView reports={data} groupBy="project" groups={projects} />
    );
  }

  if (selectedGatewayId === ALL_GATEWAYS_OPTION.value) {
    return (
      <GroupedGridView reports={data} groupBy="gateway" groups={gateways} />
    );
  }

  if (
    selectedProjectId !== ALL_PROJECTS_OPTION.value &&
    selectedGatewayId !== ALL_GATEWAYS_OPTION.value
  ) {
    return <TableView reports={data} />;
  }
  return <div></div>;
}

export default ListView;
