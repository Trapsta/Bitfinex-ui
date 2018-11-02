//const ws = require('ws');
import store from '../store';

const config =  {
  bitfinex: {
    websocketPath: 'wss://api.bitfinex.com/ws/2'
  }
}


export const ws = new WebSocket(config.bitfinex.websocketPath)

export default getData => new Promise(async (resolve, reject) => {

  // if (!store.getState().connected) {
  //   ws.close();
  // }


  store.subscribe( () => {

    var connected = store.getState().connected;
    if(  !connected ) {
      console.log('closing connection');
      ws.close();
    }


  });


  ws.onopen = () => {
    ws.send(JSON.stringify({
      event: 'subscribe',
      channel: 'book',
      symbol: 'tBTCUSD'
    }))

    ws.send(JSON.stringify({
      event: 'subscribe',
      channel: 'trades',
      symbol: 'tBTCUSD'
    }))

    ws.send(JSON.stringify({
      event: 'subscribe',
      channel: 'ticker',
      symbol: 'tBTCUSD'
    }))

    let channels = {
      book: null,
      trades: null,
      ticker: null
    }

    ws.onmessage = msg => {
      const response = JSON.parse(msg.data);
      //console.log(response);
      


      if (response.event === "info") return resolve()

      if (response.event === "subscribed") {
        const { channel, chanId } = response
        channels[response.channel] = chanId

        return
      }

      const channelId = response[0]

      if (channelId === channels.book) {
        const payload = response[1]
        //console.log(data);




        store.dispatch({ type: 'BOOK_LOADED', payload })

        //dispatch(bookOrderExecuted(data))
      } else if (channelId === channels.trades) {
        // const event = response[1]
        // const data = response[2]

        

        if (response[1] !== "hb") {
        	const payload = response[2]
        	store.dispatch({ type: 'TRADES_LOADED', payload  })
        }

        // if (event === 'te') {
        //   //dispatch(tradeExecuted(data))
        // } else if (event === 'tu') {
        //   //dispatch(tradeUpdated(data))
        // }
      } else if (channelId === channels.ticker) {
      	//console.log()
      	//console.log(response);      

        if (response[1] !== "hb") {
        	const payload = response[1]
        	store.dispatch({ type: 'TICKER_LOADED', payload })
        }
      }
    }
  }



})


export function disconnectServer() {

  //disconnect = true;
  //console.log(disconnect);
}




