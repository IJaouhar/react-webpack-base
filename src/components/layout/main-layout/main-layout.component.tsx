import Container from '@material-ui/core/Container';
import React from 'react';
import { Route } from '../../../config/app-routes';
import DefaultLayout from '../default-layout/default-layout.component';
import Header from '../header/header.component';
import './main-layout.component.scss';

interface LayoutProps {
    routes: Route[];
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header>
            </Header>
            <Container maxWidth={false} className="main-container">
                <DefaultLayout>{children}</DefaultLayout>
            </Container>
        </div>
    );
};

export default MainLayout;
