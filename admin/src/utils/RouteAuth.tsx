import { Redirect } from 'umi'
import React from "react";
import {connect, UserModelState} from 'umi';
import {getToken, isTokenExpired} from "@/utils/auth";
import LoadingSpinner from "@/components/LoadingSpinner";

class RouteAuth extends React.Component<any, any>
{

  constructor(props: any) {
    super(props);
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    // 如果用户没有登录并且可以从缓存令牌那边进行登录，则登录
    if (!this.props.user.isLogin && !isTokenExpired()) {
      this.props.dispatch({
        type: 'user/loginFromCacheToken'
      });
    }
  }

  render() {
    const { isLogin } = this.props.user;
    if (isLogin) {
      return <>{ this.props.children }</>;
    } else if (!isTokenExpired())  {
      return (<LoadingSpinner tip={'加载中...'} />);
    } else {
      return ( <Redirect to="/login" /> );
    }
  }
}

const mapPropsToState = ({user}: {user: UserModelState}) => {
  return {user};
}

export default connect(mapPropsToState)(RouteAuth);
