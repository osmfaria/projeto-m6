export declare type IUser = {
  name: string
  email: string
  password: string
  cpf: string
  phone: string
  birthdate?: Date
  description?: string
  isAdmin?: boolean
}

export declare type IUserUpdate = {
  name?: string
  email?: string
  password?: string
  cpf?: string
  phone?: string
  birthdate?: Date
  description?: string
}



