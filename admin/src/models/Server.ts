// 检查响应
export function checkRes(res: any)
{
  if (res == 'null') {
    throw res;
  }
  if (res.status && res.status >= 400) {
    throw res;
  } else {
    return res;
  }
}
