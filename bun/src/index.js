console.log(`Starting bun server!`);

function OnFetch(Request) {
  const url = new URL(Request.url);

	console.log(`Request received from ${Request.url}`)

	return new Response(`Hello from bun!\nThis is ${__filename} on port ${Server.port}.`)
}

function OnError(Error) {
	console.log(Error)
	console.log(Error.stack)

  return new Response(
		`<pre>${Error}\n${Error.stack}</pre>`, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

const Server = Bun.serve({
  port: 6969,

  fetch: OnFetch,
  error: OnError,
});

console.log(`Bun server started on ${Server.hostname}:${Server.port}`);
