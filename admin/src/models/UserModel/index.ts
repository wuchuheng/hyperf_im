import {UserModelState, UserModelType} from './Type'
import {login} from "@/api/authorizations";
import {setToken} from '@/utils/auth';
import {ConnectStatusState} from "@/models/Connect";

export {UserModelState};

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    isLogin: false,
    username: '',
    avatar: '',
    roles: []
  },
  effects: {
    // 登录
    * login({payload}, {call, put, select}) {
      const userState  = yield select((state: ConnectStatusState) => state.user);
      const res  = yield login(payload);
      const tokenInfo = JSON.stringify(res);
      yield call(setToken, tokenInfo);
      yield put({ type: 'save', payload: { ...userState, isLogin: true } });
      return true;
    },
    // 登出
    * logout({payload}, {call, put, select}) {
      const userState  = yield select((state: ConnectStatusState) => state.user);
      yield put({ type: 'save', payload: { ...userState, isLogin: false } });
      return true;
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
    setup() { }
  }
}

export default UserModel;
