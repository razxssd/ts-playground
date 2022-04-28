export interface IUser {
  name: string;
  id: number;
  permission: IPermission;
  age: number
}

export interface IPermission {
  admin_page: boolean;
  user_list_page: boolean;
}
