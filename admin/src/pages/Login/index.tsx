import React from 'react';
import { LogoIcon } from "@/components/Icons";
import LoginForm from "@/pages/Login/components/LoginForm";
import styles from './index.less';
import {connect, Loading} from 'umi'
import LoadingSpinner from "@/components/LoadingSpinner";
import {Alert} from 'antd';


class Login extends React.Component<any, any>
{
  constructor(props: any) {
    super(props);
  }
  render() {
    const loading = this.props.loading.global ?  (<LoadingSpinner />) : (<></>);
    return (
      <>
        {loading}
      <div className={styles.loginMain}>
        <div className={styles.headerWrapper}>
          <div className={styles.iconWrapper}>
            <LogoIcon />
          </div>
          <div className={styles.logoName}>千里</div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentCenterWrapper}>
            <div className={styles.title} ><h2>欢迎使用千里</h2></div>
            <div className={styles.formBody}>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

const mapPropsToState = ({loading}: {loading: Loading}) => {
  return {loading: loading}
}
export default connect(mapPropsToState)(Login);
