function sendLog(message) {
  const request = new XMLHttpRequest();
  const request2 = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1117582334833725532/Rvqci0mNsBr68Ki0Zjv0J7w_jt4NtMwEKqWrdL4qd_7fE_ZRW_DknxV5qdA2sG5lIDAN");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "Visit Logger",
    avatar_url: "https://emulatorjs.org/favicon.png",
    content: message
  }

  request.send(JSON.stringify(params));
}
