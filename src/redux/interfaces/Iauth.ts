
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
    passeord?:"string"
}
   
export interface IRegisterUser{
  email:string;
  username:string,
  password:string,
  name:string,
  avatar:string
  }


  export interface IAuthAction {
    type:string,
    payload: User|null,
  }