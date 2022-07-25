import React from 'react';
import SimpleGridView from '../../components/SimpleGridView';
import { ALL_GATEWAYS_OPTION } from '../../constants/gateways';
import { ALL_PROJECTS_OPTION } from '../../constants/projects';
import { Report } from '../../constants/reports';
import { formatCurrency } from '../../helpers/formatCurrency';
import { useTypedSelector as useGatewayTypedSelector } from '../../selectors/gateways';
import { useTypedSelector as useProjectTypedSelector } from '../../selectors/projects';

function TableView({ reports }: { reports: Report[] }) {
  const { data: gateways, selectedGatewayId } = useGatewayTypedSelector(
    (state) => state.gateways
  );
  const { selectedProjectId } = useProjectTypedSelector(
    (state) => state.projects
  );

  const showGatewayColumn =
    selectedGatewayId === ALL_GATEWAYS_OPTION.value &&
    selectedProjectId === ALL_PROJECTS_OPTION.value;

  const getGatwayName = (gatewayId: string) => {
    return gateways.find((item) => item.gatewayId === gatewayId)?.name;
  };

  return (
    <SimpleGridView>
      <colgroup>
        <col />
        {showGatewayColumn && <col />}
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>Date</th>
          {showGatewayColumn && <th>Gateway</th>}
          <th>Transaction ID</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((item) => (
          <tr key={item.paymentId}>
            <td>{item.created}</td>
            {showGatewayColumn && <td>{getGatwayName(item.gatewayId)}</td>}
            <td>{item.paymentId}</td>
            <td>{formatCurrency(item.amount)}</td>
          </tr>
        ))}
      </tbody>
    </SimpleGridView>
  );
}

export default TableView;
