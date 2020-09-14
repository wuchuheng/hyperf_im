// @ts-ignore
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken()
{
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 是否过期
export function isTokenExpired(): boolean
{
  const tokenInfoJson = Cookies.get(TokenKey);
  if (!tokenInfoJson) {
    return true;
  }
  const  TokenInfo = JSON.parse(tokenInfoJson);
  const expiredStimestamp = (new Date(TokenInfo.expired_at).getTime()) / 1000;
  const currentTimestamp = (new Date().getTime()) / 1000;
  return expiredStimestamp > currentTimestamp ? false : true;
}
