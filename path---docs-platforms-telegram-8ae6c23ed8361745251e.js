webpackJsonp([87932082906105],{659:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Telegram is a multi-platform instant messaging system. It treasures the security and privacy of the users. Furthermore, as a flexible platform, Telegram allows developers to create bots. Telegram launches lots of <a href="https://core.telegram.org/bots/api">bot APIs</a> for third-party developers to build Telegram bots to serve their own needs in no time.<br>\nThis guide will focus on major concept of building a Telegram bot by Bottender. For more detail about Telegram bot, please check <a href="https://core.telegram.org/bots">Official Telegram Bot Introduction</a>.</p>\n<h2 id="requirements"><a href="#requirements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Requirements</h2>\n<p>To start building a Telegram Bot, there are two requirements you need to satisfy.</p>\n<ul>\n<li>Token</li>\n<li>Webhook URL</li>\n</ul>\n<h3 id="get-token"><a href="#get-token" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Get token</h3>\n<p>You have to generate a token by talking to <a href="https://telegram.me/botfather">BotFather</a>. It is an official bot which will help you create new bots or change settings for existing ones.<br>\nCheck <a href="https://core.telegram.org/bots#6-botfather">Official Telegram Bot Introduction</a> for more details about it.</p>\n<h3 id="webhook-url"><a href="#webhook-url" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Webhook URL</h3>\n<p>Your bot receives updates via an outgoing webhook which is a specific <code>URL</code>. When there are any updates for the bot, Telegram will send an HTTPS request to the webhook <code>URL</code>.</p>\n<h2 id="build-your-first-telegram-bot"><a href="#build-your-first-telegram-bot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build your first Telegram bot</h2>\n<p>After setting up the webhook <code>URL</code> and getting the authorization token, you should fill them in <a href="https://github.com/Yoctol/bottender/tree/master/examples/telegram-hello-world/index.js">telegram-hello-world</a>. The following is part of sample code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">\'__FILL_URL_HERE__\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TelegramBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  accessToken<span class="token punctuation">:</span> <span class="token string">\'__FILL_YOUR_TOKEN_HERE__\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Run your server and talk to the Telegram bot. It works!</p>\n<h3 id="full-example"><a href="#full-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Full example</h3>\n<p>Here is the complete example for <a href="https://github.com/Yoctol/bottender/tree/master/examples/telegram-hello-world/index.js">telegram-hello-world</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> TelegramBot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender/express\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TelegramBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  accessToken<span class="token punctuation">:</span> <span class="token string">\'__FILL_YOUR_TOKEN_HERE__\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">createServer</span><span class="token punctuation">(</span>bot<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'server is running on 5000 port...\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>After running up the bot server, you can use <a href="./Guides-Commands">bottender CLI</a> command to setup webhook.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ bottender telegram webhook set -w <YOUR_WEBHOOK_URL></code></pre>\n      </div>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<p>Bottender supplies several types of event. You are able to access them via <code>context.event</code>.<br>\nFor more information, check <a href="./APIReference-Event">Event Reference</a>.</p>\n<h3 id="telegram-specific-context-event"><a href="#telegram-specific-context-event" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Telegram-specific context event</h3>\n<ul>\n<li>isText</li>\n<li>isPhoto</li>\n<li>isAudio</li>\n<li>isVoice</li>\n<li>isVideo</li>\n<li>callbackQuery</li>\n<li>...</li>\n</ul>\n<p>more on <a href="./APIReference-Event">Event Reference</a>.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isPhoto<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">\'I know this is a photo.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>\n    context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>callbackQuery <span class="token operator">===</span> <span class="token string">\'A_DEVELOPER_DEFINED_CALLBACK_QUERY\'</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">\'I know this is a callback query.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">\'I do not understand.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="send-apis"><a href="#send-apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Send APIs</h2>\n<p>After your bot receives the request from Telegram, you can use context send APIs to interact with users.</p>\n<h3 id="telegram-specific-context-send-api"><a href="#telegram-specific-context-send-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Telegram-specific context send API</h3>\n<ul>\n<li>sendMessage</li>\n<li>sendPhoto</li>\n<li>sendVideo</li>\n<li>sendContact</li>\n<li>...</li>\n</ul>\n<p>more on <a href="./APIReference-Context">Context Reference</a>.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">\'Hello World!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendPhoto</span><span class="token punctuation">(</span><span class="token string">\'http://example.com/pic.png\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendContact</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    phone_number<span class="token punctuation">:</span> <span class="token string">\'886123456789\'</span><span class="token punctuation">,</span>\n    first_name<span class="token punctuation">:</span> <span class="token string">\'first name\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References</h2>\n<ul>\n<li><a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-telegram">Messaging-apis-telegram</a></li>\n<li><a href="https://telegram.org">Official Telegram Page</a></li>\n<li><a href="https://core.telegram.org/bots">Official Telegram Bot Introduction</a></li>\n<li><a href="https://core.telegram.org/bots/api">Official Telegram Bot API</a></li>\n</ul>',frontmatter:{title:"Telegram",date:"December 25, 2017",author:null},fields:{path:"docs/Platforms-Telegram.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Platforms-Telegram/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---docs-platforms-telegram-8ae6c23ed8361745251e.js.map