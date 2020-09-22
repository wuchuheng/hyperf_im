// 复制字符串
export function copyStringToClipboard(str: string) :void
{
  let el = document.createElement('textarea') as HTMLTextAreaElement;
  el.value = str;
  el.setAttribute('readonly', '');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
