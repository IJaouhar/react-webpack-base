export enum UserRoleEnum {
    pl3 = 'PL3',
    ts = 'TS',
    viewer = 'VIEWER',
    pl5 = 'PL5',
    keyUser = 'KEY_USER',
}

export enum Shifts {
    morning = 'morning',
    afternoon = 'afternoon',
    night = 'night',
}

export enum GrooveStatus {
    proposed = 'PROPOSED',
    accepted = 'ACCEPTED',
    shipped = 'SHIPPED',
    cancelled = 'CANCELLED',
}

export enum TransportStatus {
    ON_TIME = 'ON_TIME',
    SLIGHTLY_DELAYED = 'SLIGHTLY_DELAYED',
    DELAYED = 'DELAYED',
    UNDEFINED = 'UNDEFINED',
}

export enum TransportIncidenceStatus {
    OPEN = 'OPEN',
    CLOSE = 'CLOSE',
}

export enum UserTabType {
    web = 'WEB_USER',
    mobile = 'MOBILE_USER',
    groups = 'USER_GROUPS',
}
