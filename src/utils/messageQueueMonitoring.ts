import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

const spyFunction = (msg: SpyData) => {
  if (msg.module !== 'WebSocketModule') {
    const direction =
      msg.type === 0 ? 'native -> javascript' : 'javascript -> native';

    let message = {
      ...msg,
      type: msg.type === 0 ? 'native -> javascript' : 'javascript -> native',
    };
    console.debug(
      `${msg.module}: ${direction}, method: ${msg.method}, ${JSON.stringify(
        msg.args,
      )}`,
      message,
    );
  }
};

MessageQueue.spy(spyFunction);
