import {UserModelState, UserModelType} from './Type'
import {login} from "@/api/authorizations";
import {isTokenExpired, setToken, removeToken} from '@/utils/auth';
import {ConnectStatusState} from "@/models/Connect";
import {checkRes} from '../Server';

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
      const res  = checkRes(yield call(login, payload));
      console.log(res);
      const tokenInfo = JSON.stringify(res);
      yield call(setToken, tokenInfo);
      yield put({ type: 'save', payload: { ...userState, isLogin: true } });
      return true;
    },
    // 从令牌进行登录
    * loginFromCacheToken({payload}, {call, put, select}) {
        const isGoingToLoign = yield call(isTokenExpired);
         if(!isGoingToLoign) {
           const userState  = yield select((state: ConnectStatusState) => state.user);
           yield put({ type: 'save', payload: { ...userState, isLogin: true } });
           return true;
         } else {
           return false;
         }
    },
    // 登出
    * logout({payload}, {call, put, select}) {
      const userState  = yield select((state: ConnectStatusState) => state.user);
      yield put({ type: 'save', payload: { ...userState, isLogin: false } });
      yield call(removeToken);
      return true;
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
    setup() {

    }
  }
}

export default UserModel;
