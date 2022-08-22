export interface ProfileType {
    name: string | number,
    age: number,
    address?:{
        city: string,
        street: string,
        house: number
    }[],
    lessons?: string[],
    role?: "admin" | "user" | "guest" | null,
}