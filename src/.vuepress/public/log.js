sendMessage();
function sendMessage() {
  const userAgent = navigator.userAgent;
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1117554830769143868/9QwtrAPaWT1zcz20cXLHKh0l0R-jg9nzppxtWIkKVjxBH9Fej-6MbBITYZ5zi829UoCp");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "Visit Logger (WebTop)",
    avatar_url: "",
    content: "<@788794376942911509> someone just visited from userAgent `" + userAgent + "`"
  }

  request.send(JSON.stringify(params));
  console.log("just stole your user agent: " + userAgent + " :3");
  console.log("Don't worry, your user agent is not tied to you, and that is the only info I have of you and it cannot be used against you.");
}
