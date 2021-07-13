

export interface appState {
    items:[],
    liked:[],
    amount:number,
    amountLiked:number,
}
interface Payload {
    name: string
}
export type actionInterface = Add | Like | Remove
export enum UserActionsTypes{
    ADD = "ADD",
    LIKE="LIKE",
    REMOVE="REMOVE"
}

interface Add {
    type: UserActionsTypes.ADD,
    item: Payload
}
interface Like {
    type: UserActionsTypes.LIKE,
    item: {  }
}
interface Remove {
    type: UserActionsTypes.REMOVE,
    item:string
}