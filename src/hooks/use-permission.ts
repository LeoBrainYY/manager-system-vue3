import { useStore } from '@/store'

export function usePermission (pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  // 查找是否存在此权限
  return !!permissions.find((item) => item === verifyPermission)
}
