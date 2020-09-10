import {ConnectStatusState} from "@/models/Connect";
import {
  TodayReportItemState,
  TodayReportState,
  DashboardModelState,
  DashboardModelType
} from "@/models/DashboardModel/Type";

export {
  TodayReportItemState,
  TodayReportState,
  DashboardModelState,
  DashboardModelType
}

const Index: DashboardModelType = {
  namespace: 'dashboard',
  state: {
    name: '',
    todayReport: {
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
        type: 'action',
        payload: dashboardState
      })
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    saveTodayReportInitItems(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname}) => {
      });
    },
    keyEvent({dispatch}) {
    },
  }
};

export default Index;
