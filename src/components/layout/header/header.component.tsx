import React, { Fragment } from 'react';

interface HeaderProps {
    children: any;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return <Fragment>{children}</Fragment>;
};

export default Header;
