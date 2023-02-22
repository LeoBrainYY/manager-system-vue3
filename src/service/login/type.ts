export interface IAccount {
  name: string
  password: string
}

// 登录时data的数据类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}

// data因为请求数据不同 所以会有不同的类型
export interface IDataType<T = any> {
  code: number
  data: T
}
