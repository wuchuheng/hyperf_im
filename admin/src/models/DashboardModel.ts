import { Effect, ImmerReducer, Reducer, Subscription, Action } from 'umi';
import {ReactNode} from "react";
import {ConnectStatusState} from "@/models/Connect";
import {mergeTodayReportItems} from "@/services/ForDashboardModel";

export interface TodayReportItemState {
  icon: ReactNode;
  title: string;
  value: string;
}
export interface TodayReportState {
  selectedItems: TodayReportItemState []
  preSelectedItems: TodayReportItemState []
}

export interface DashboardModelState {
  name: string;
  todayReport: TodayReportState
}
export interface DashboardModelType {
  namespace: 'dashboard';
  state: DashboardModelState
  effects: {
    query: Effect;
    preSelectItems: Effect;
  };
  reducers: {
    save: Reducer<DashboardModelState>;
  };
  subscriptions: { setup: Subscription, keyEvent: Subscription };
}

const DashboardModel: DashboardModelType= {
  namespace: 'dashboard',
  state: {
    name: '',
    todayReport: {
      selectedItems: [], //已经选中
      preSelectedItems: [] //预选中
    }
  },
  effects: {
    *query({ payload }, { call, put }) {
    },
    /**
     *  预选中
     */
    *preSelectItems({ payload }, { call, put, select }) {
      const dashboardState = yield select((state: ConnectStatusState)=> (state.dashboard));
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
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          })
        }
      });
    },
    keyEvent({dispatch}) {
      // key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
    },
  }
};
export default DashboardModel;
