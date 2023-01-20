export interface userDataTypes {
    firstName: string,
    id: string,
    lasName: string,
    picture: string,
    title: string
}

export interface usersDataTypes {
    data: userDataTypes[],
    limit: number,
    page: number,
    total: number
}

export interface errorTypes {
    error?: string
}