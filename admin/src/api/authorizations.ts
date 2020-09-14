import request from "@/utils/request";

// 登录
export async function login(params: any): Promise<any>
{
  const {username, password} = params;

  return request('/authorizations', {
    method: 'POST',
    data: {username, password}
  });
}
