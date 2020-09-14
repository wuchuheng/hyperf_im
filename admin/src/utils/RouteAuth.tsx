import { Redirect } from 'umi'
import React from "react";
import {connect, UserModelState} from 'umi';
import {getToken, isTokenExpired} from "@/utils/auth";

class RouteAuth extends React.Component<any, any>
{
  constructor(props: any) {
    super(props);
  }

  // 尝试从缓存令牌进行登录
  tryLoginFromCashToken(): Promise<boolean>
  {
    return this.props.dispatch({
       type: 'user/loginFromCacheToken'
    });
  }

  render() {
    const { isLogin } = this.props.user;
    if (isLogin) {
      return <>{ this.props.children }</>;
    } else if (this.tryLoginFromCashToken())  {
      return <>{ this.props.children }</>;
    } else {
      return ( <Redirect to="/login" /> );
    }
  }
}

const mapPropsToState = ({user}: {user: UserModelState}) => {
  return {user};
}

export default connect(mapPropsToState)(RouteAuth);
