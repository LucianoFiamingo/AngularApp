export interface Message {
  Id: number,
  Name: string,
  Text: string;
}
export interface User {
  Id: number,
  Name: string;
}
export interface MyResponse {
  Success: number,
  Message: string,
  Data: any;
}
