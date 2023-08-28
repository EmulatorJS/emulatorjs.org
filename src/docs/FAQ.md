# FAQ

#### *Q:* Why was I re-directed/sent to this page?

***A:*** Because I don't have the time to personally help every person out there, and your issue is likely documented here.

#### *Q:* I'm getting "Network Error" when trying to play. What do I do?

***A:*** Try the following:
- **Use a web server**. You cannot just open the HTML file.
- Clear your cache.
- Update your data folder.
- If using jsDelivr, ensure you have an up-to-date URL.
- If using Replit, don't. Replit doesn't support this and will block certain files.
- If using GitHack, try using jsDelivr. Githack will serve outdated resources.

If the issue still occurs, open an issue containing a screenshot of the network tab within dev-tools.

#### *Q:* Why is my PlayStation game crashing?

***A:*** The game is likely too big to be run in the web browser. This cannot currently be fixed.

#### *Q:* Is netplay supported? How do I enable netplay?

***A:*** Netplay is not currently supported, but it is hoped to be coming soon. Development is in progress.

#### *Q:* How do I embed this on Google Sites?

***A:*** [Embedding on Google Sites](Embed.html#google-sites)

#### *Q:* How do I embed this on React?

***A:*** [Embedding in React](Embed.html#react-single-page-apps)

#### *Q:* I'm encountering CORS errors while trying to run the emulator. How can I resolve this?

***A:*** CORS (Cross-Origin Resource Sharing) errors occur when a web page running in one domain tries to access resources (like scripts or assets) from another domain. To resolve CORS errors, you can:
- Ensure that the server hosting the EmulatorJS resources has proper CORS headers set.
- Check your server's CORS headers.

#### *Q:* I'm seeing an error that says "SharedArrayBuffer is not defined." How do I fix this?

***A:*** The "SharedArrayBuffer is not defined" error can occur due to browser security restrictions. Shared Array Buffer is a feature that can be a security risk if not used carefully.

To fix this issue, you can:
- Check if the browser you're using supports Shared Array Buffer.
- Make sure to set the following headers on the server to enable Shared Array Buffer:
```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```
These headers manage cross-origin interactions and enable the use of Shared Array Buffer.

#### *Q:* What should I include when I open an issue?

***A:*** You should include as much as you know. The issue, and logs. If you don't have access to the console, there is likely a reason, and it is likely that reason is also causing an issue with other things.

[Example of a perfectly opened issue](https://github.com/EmulatorJS/EmulatorJS/issues/564)
