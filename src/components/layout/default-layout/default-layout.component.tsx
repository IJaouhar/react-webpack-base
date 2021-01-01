import React, { ReactNode } from 'react';
import './default-layout.component.scss';

interface LayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return <main className="main-wrapper">{children}</main>;
};

export default DefaultLayout;
