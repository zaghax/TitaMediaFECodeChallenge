export interface userDataTypes {
    firstName?: string,
    id?: string,
    lasName?: string,
    picture?: string,
    title?: string
}

export interface postDataTypes {
    id?: string,
    image?: string,
    likes?: number,
    owner?: userDataTypes,
    publishDate?: string,
    tags?: string[],
    text?: string
}

export interface responseDataTypes {
    data: userDataTypes[] | postDataTypes[],
    limit: number,
    page: number,
    total: number,
    error: string
}