// 检查响应
export function checkRes(res: any)
{
  if (res == 'null') {
    throw res;
  }
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    throw res;
  }
}
