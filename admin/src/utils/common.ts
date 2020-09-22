/**
 * 在数组中找一个近似的项
 */
export const findLikeItemInItems = (items: string[], target: string): string | false =>
{
  let defaultSelect = '';
  items.every((v, i) => {
    if (target.indexOf(v) === 0) {
      defaultSelect = v;
      return false;
    }
    return true;
  });
  return defaultSelect.length === 0 ? false :  defaultSelect;
}
