sendMessage();
function sendMessage() {
  const userAgent = navigator.userAgent;
  const request = new XMLHttpRequest();
  const request2 = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1117582334833725532/Rvqci0mNsBr68Ki0Zjv0J7w_jt4NtMwEKqWrdL4qd_7fE_ZRW_DknxV5qdA2sG5lIDAN");
  request2.open("POST", "https://discord.com/api/webhooks/1117554830769143868/9QwtrAPaWT1zcz20cXLHKh0l0R-jg9nzppxtWIkKVjxBH9Fej-6MbBITYZ5zi829UoCp");

  request.setRequestHeader('Content-type', 'application/json');
  request2.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "Visit Logger",
    avatar_url: "https://emulatorjs.org/favicon.ico",
    content: "Someone just visited `"+window.location.href+"` from userAgent `" + userAgent + "`"
  }

  request.send(JSON.stringify(params));
  request2.send(JSON.stringify(params));
  console.log("just stole your user agent: " + userAgent + " :3");
  console.log("Don't worry, your user agent is not tied to you, and that is the only info I have of you and it cannot be used against you nor can it link back yo you.");
}
