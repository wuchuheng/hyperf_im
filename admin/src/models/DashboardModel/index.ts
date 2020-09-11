import {ConnectStatusState} from "@/models/Connect";
import {
  TodayReportItemState,
  TodayReportState,
  DashboardModelState,
  DashboardModelType
} from "./Type";
import Service from "./Service";

export {
  TodayReportItemState,
  TodayReportState,
  DashboardModelState,
  DashboardModelType
}

const Index: DashboardModelType = {
  namespace: 'dashboard',
  state: {
    todayReport: {
      groupItems: [], // 所有项
      selectedItems: [], //已经选中
      preSelectedItems: [] //预选中
    }
  },
  effects: {
    * query({payload}, {call, put}) {
    },
    /**
     *  预选中
     */
    * preSelectItems({payload}, {call, put, select}) {
      const dashboardState = yield select((state: ConnectStatusState) => (state.dashboard));
      dashboardState.todayReport.preSelectedItems = payload;
      yield put({
        type: 'save',
        payload: dashboardState
      })
    },
    /**
     *  初始化选项组
     */
    * initTodayGroupItems({payload}, {call, put, select}) {
      const dashboardState = yield select((state: ConnectStatusState) => state.dashboard);
      if (dashboardState.todayReport.groupItems.length === 0) {
        const newDashboardState = yield call(Service.statuInculdeGroupItems, dashboardState);
        yield put({ type: 'save', payload: newDashboardState })
      }
    },
    /**
     * 初始化默认选中项
     */
    * initTodaySelectItems({payload}, {call, put, select}) {
      const dashboardState = yield select((state: ConnectStatusState) => state.dashboard);
      if (dashboardState.todayReport.selectedItems.length === 0) {
        const newDashboardState = yield call(Service.initTodaySelectItems, dashboardState);
        yield put({ type: 'save', payload: newDashboardState })
      }
    },
    /**
     * 初始化预选中项
     */
    * initTodayPreSelectItems({payload}, {call, put, select}) {
      const dashboardState = yield select((state: ConnectStatusState) => state.dashboard);
      const newDashboardState: DashboardModelState = {
        todayReport:{
          ...dashboardState,
          preSelectedItems: dashboardState.TodayReport.selectedItems
        }
      };
      yield put({ type: 'save', payload: newDashboardState })
    },
    /**
     * 搜索选项
     */
   * searchTodaySelectItems ({payload}, {call, put, select}) {
      const dashboardState = yield select((state: ConnectStatusState) => state.dashboard);
      const newDashboardState = {
        ...dashboardState,
        todayReport:{
          ...dashboardState.todayReport,
          groupItems: payload
        }
      }
      yield put({ type: 'save', payload: newDashboardState })
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
        if (pathname === '/dashboard') {
          dispatch({
            type: 'initTodaySelectItems'
          })
        }
      });
    },
    keyEvent({dispatch}) {
    },
  }
};

export default Index;
