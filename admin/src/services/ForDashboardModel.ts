import {TodayReportItemState} from "@/models/DashboardModel";

export function mergeTodayReportItems(oldItems:TodayReportItemState[], newItems: TodayReportItemState[])
{
  return newItems.map((v, i) => {
    return new Promise(reject => {
      oldItems.map((ov) => {
          if (ov.title === v.title) {
            const value = ov.value;
            reject({...v, value: value})
          }
      });
      reject(v)
    });
  })
}
