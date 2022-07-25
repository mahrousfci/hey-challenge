import React, { useEffect } from 'react';
import Container from '../components/Container';
import MainContent from '../components/MainContent';
import SideNavImg from '../components/SideNavImg';
import SideNavMenu from '../components/SideNavMenu';

import LogoImg from '../components/LogoImg';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import HeaderRight from '../components/HeaderRight';
import ListImg from '../components/ListImg';

import logo from '../assets/logo.svg';
import sideIcons from '../assets/sideIcons.svg';
import list from '../assets/list.svg';

import HeaderLeft from '../components/HeaderLeft';
import UserName from '../components/UserName';
import Avatar from '../components/Avatar';
import { Reports } from './Reports';
import { useActions as useProjectActions } from '../selectors/projects';
import { useActions as useGatewayActions } from '../selectors/gateways';
import { useActions as useReportsActions } from '../selectors/reports';

export const App: React.FC = () => {
  const { LoadAllProjects } = useProjectActions();
  const { LoadAllGateways } = useGatewayActions();
  const { LoadReports } = useReportsActions();
  useEffect(() => {
    LoadAllProjects();
    LoadAllGateways();
    LoadReports(null, null);
  }, [LoadAllProjects, LoadAllGateways, LoadReports]);

  return (
    <Container>
      <Header>
        <HeaderRight>
          <LogoImg alt="Logo" src={logo} />
          <ListImg src={list} />
        </HeaderRight>
        <HeaderLeft>
          <Avatar>JD</Avatar>
          <UserName>John Doe</UserName>
        </HeaderLeft>
      </Header>
      <MainContainer>
        <SideNavMenu>
          <SideNavImg src={sideIcons} />
        </SideNavMenu>
        <MainContent>
          <Reports />
        </MainContent>
      </MainContainer>
    </Container>
  );
};
