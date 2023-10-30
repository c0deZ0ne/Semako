
export interface IAuthState {
    user: User|null,
    isAuthenticated: boolean,
    error: string|null,
} 

export type User = {
    name:string
    email:string
    image:string
    avatar:string,
    passeord:string,
    phone:string,
    pin:string
}
   
export interface IRegisterSate {
  email:string;
  username:string,
  image:string
  password:string,
  name:string,
  avatar:string
  phone:string,
  pin:string
  }

  export interface RegisterUsers {
    users: IRegisterSate[];
  }


  export interface IAuthAction {
    type:string,
    payload: User|null,
  }