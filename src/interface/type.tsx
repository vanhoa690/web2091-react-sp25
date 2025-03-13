export interface Iproduct{
    id:number|string,
    name:string,
    price:number,
    image:string
}
export type ProductForm = Omit<Iproduct, "id">
export interface Iuser{
    id:number|string,
    name:string,
    email:string,
    password:string
}
export type RegisterForm = Omit<Iuser, "id">
export type LoginForm = Pick<Iuser, "email"|"password">
