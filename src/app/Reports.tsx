import React, { useEffect, useMemo, useState } from 'react';
import Button from '../components/Button';
import DropDown from '../components/DropDown/DropDown';
import H4 from '../components/H4';
import H6 from '../components/H6';
import Breadcrumbs from '../components/reports/Breadcrumbs';
import FilterContainer from '../components/reports/FilterContainer';
import ReportsContainer from '../components/reports/ReportsContainer';
import ReportTopBar from '../components/reports/ReportTopBar';
import TopBarHeader from '../components/reports/TopBarHeader';
import {
  useActions as useProjectActions,
  useTypedSelector as useProjectTypedSelector,
} from '../selectors/projects';
import {
  useActions as useGatewayActions,
  useTypedSelector as useGatewayTypedSelector,
} from '../selectors/gateways';
import { ALL_PROJECTS_OPTION } from '../constants/projects';
import { ALL_GATEWAYS_OPTION } from '../constants/gateways';
import ListView from './ListView/ListView';
import ListContainer from '../components/reports/ListContainer';
import { useActions as useReportsActions } from '../selectors/reports';
import ChartView from './ChartView/ChartView';

export const Reports: React.FC = () => {
  const [showBarChart, setShowBarChart] = useState(false);

  const { SetSelectedProject } = useProjectActions();
  const { SetSelectedGateway } = useGatewayActions();

  const { LoadReports } = useReportsActions();

  const { data: projects, selectedProjectId } = useProjectTypedSelector(
    (state) => state.projects
  );
  const { data: gateways, selectedGatewayId } = useGatewayTypedSelector(
    (state) => state.gateways
  );

  useEffect(() => {
    const projectId =
      selectedProjectId === ALL_PROJECTS_OPTION.value
        ? null
        : selectedProjectId;
    const gatewayId =
      selectedGatewayId === ALL_GATEWAYS_OPTION.value
        ? null
        : selectedGatewayId;
    LoadReports(projectId, gatewayId);
  }, [selectedProjectId, selectedGatewayId, LoadReports]);

  const projectsOptions = projects.map((item) => {
    return { value: item.projectId, text: item.name };
  });
  projectsOptions.unshift({ ...ALL_PROJECTS_OPTION });

  const selectedProject = useMemo(
    () => projectsOptions.find((item) => item.value === selectedProjectId),
    [projectsOptions, selectedProjectId]
  );

  const gatewaysOptions = gateways.map((item) => {
    return { value: item.gatewayId, text: item.name };
  });
  gatewaysOptions.unshift({ ...ALL_GATEWAYS_OPTION });

  const selectedGateway = useMemo(
    () => gatewaysOptions.find((item) => item.value === selectedGatewayId),
    [gatewaysOptions, selectedGatewayId]
  );

  return (
    <>
      <ReportTopBar>
        <TopBarHeader>
          <H4>Reports</H4>
          <H6>Easily generate a report of your transactions</H6>
        </TopBarHeader>
        <FilterContainer>
          <DropDown
            options={projectsOptions}
            selectedValue={selectedProjectId}
            onChange={(value) => SetSelectedProject(value)}
          />
          <DropDown
            options={gatewaysOptions}
            selectedValue={selectedGatewayId}
            onChange={(value) => SetSelectedGateway(value)}
          />
          <Button onClick={() => setShowBarChart(true)}>Generate report</Button>
        </FilterContainer>
      </ReportTopBar>
      <ReportsContainer>
        <div>
          <Breadcrumbs>
            {selectedProject?.text} | {selectedGateway?.text}
          </Breadcrumbs>
          <ListContainer>
            <ListView />
          </ListContainer>
        </div>
        {showBarChart && <ChartView />}
      </ReportsContainer>
    </>
  );
};
