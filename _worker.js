const API_HOST = "discord.com";

async function handleRequest(request, ctx) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const search = url.search;
  const pathWithParams = pathname + search;
  
  return forwardRequest(request, pathWithParams);
}

async function forwardRequest(request, pathWithSearch) {
  const originRequest = new Request(request);
  return await fetch(`https://${API_HOST}${pathWithSearch}`, originRequest);
}

export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, ctx);
  }
};
