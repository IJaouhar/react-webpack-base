import DashboardContainer from '../views/dashboard.container';

export interface Route {
    path: any;
    key: string;
    exact?: boolean;
    component: any;
}

const appRoutes: Route[] = [
    {
        path: '/',
        key: 'home',
        exact: true,
        component: DashboardContainer,
    }
];

export default appRoutes;
