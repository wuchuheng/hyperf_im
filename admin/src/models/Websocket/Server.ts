export function testWs(ws: WebSocket) {
   return new Promise((resolve, reject) => {
    ws.send('send data from ');
    const handleMessage = (e: any) => {
      console.log('recieve data from effect' +  e.data);
      ws.removeEventListener('message', handleMessage)
      resolve();
    };
    const key = ws.addEventListener('message', handleMessage);
  });
 }

/**
 * websocket 断开处理
 */
export const onCloseWebsocket = (dispatch: any) => {
  dispatch({
    type: 'disConnect'
  });
}
