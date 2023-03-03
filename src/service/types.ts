// data因为请求数据不同 所以会有不同的类型
export interface IDataType<T = any> {
  code: number
  data: T
}
