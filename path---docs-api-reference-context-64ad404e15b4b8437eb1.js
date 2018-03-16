webpackJsonp([21208922568419],{643:function(n,e){n.exports={data:{markdownRemark:{html:'<p>A Bottender Context encapsulates many helpful methods into a single object like session, client from <a href="https://github.com/Yoctol/messaging-apis">messaging-apis</a>, event, etc., which makes you easier to develop a chatbot system on different platform.</p>\n<h2 id="general-methods"><a href="#general-methods" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>General Methods</h2>\n<table>\n<thead>\n<tr>\n<th align="center">Property</th>\n<th align="center">Return</th>\n<th align="center">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center">platform</td>\n<td align="center">string</td>\n<td align="center">The name of the platform.</td>\n</tr>\n<tr>\n<td align="center">client</td>\n<td align="center">Messenger: \n<a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-messenger">MessengerClient</a>\n<br>\n LINE: \n<a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-line">LineClient</a>\n<br>\n Slack: \n<a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-slack">SlackClient</a>\n<br>\n Telegram: \n<a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-telegram">TelegramClient</a>\n<br>\n Viber: \n<a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-viber">ViberClient</a>\n<br>\n Console: ConsoleClient</td>\n<td align="center">The client instance.\n<br>\n Return value depends on your platform.</td>\n</tr>\n<tr>\n<td align="center">event</td>\n<td align="center">Messenger: MessengerEvent\n<br>\n LINE: LineEvent\n<br>\n Slack: SlackEvent\n<br>\n Telegram: TelegramEvent\n<br>\n Viber: ViberEvent\n<br>\n Console: ConsoleEvent</td>\n<td align="center">The event instance.\n<br>\n Return value depends on your platform.</td>\n</tr>\n<tr>\n<td align="center">session</td>\n<td align="center">Object</td>\n<td align="center">The session state of the context.</td>\n</tr>\n<tr>\n<td align="center"><a href="#typingmilliseconds">typing</a></td>\n<td align="center">Promise</td>\n<td align="center">Delay and show indicators for milliseconds.</td>\n</tr>\n<tr>\n<td align="center"><a href="#sendtexttext-options">sendText</a></td>\n<td align="center">Promise</td>\n<td align="center">Send text to the owner of the session.</td>\n</tr>\n</tbody>\n</table>\n<h2 id="messenger"><a href="#messenger" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Messenger</h2>\n<p>These are other methods on Messenger. See more details at <a href="https://bottender.js.org/docs/APIReference-MessengerContext">APIReference-MessengerContext</a>.</p>\n<h2 id="line"><a href="#line" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LINE</h2>\n<p>These are other methods on LINE. See more details at <a href="https://bottender.js.org/docs/APIReference-LineContext">APIReference-LineContext</a>.</p>\n<h2 id="slack"><a href="#slack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Slack</h2>\n<p>These are other methods on Slack. See more details at <a href="https://bottender.js.org/docs/APIReference-SlackContext">APIReference-SlackContext</a>.</p>\n<h2 id="telegram"><a href="#telegram" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Telegram</h2>\n<p>These are other methods on Telegram. See more details at <a href="https://bottender.js.org/docs/APIReference-TelegramContext">APIReference-TelegramContext</a>.</p>\n<h2 id="viber"><a href="#viber" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Viber</h2>\n<p>These are other methods on Telegram. See more details at <a href="https://bottender.js.org/docs/APIReference-TelegramContext">APIReference-TelegramContext</a>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>Let\'s use <a href="https://github.com/Yoctol/bottender/blob/master/examples/messenger-hello-world/index.js">example</a> with Messenger platform.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// platform</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Messenger</span>\n\n  <span class="token comment" spellcheck="true">// send text message to user</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="typingmilliseconds"><a href="#typingmilliseconds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>typing(milliseconds)</code></h3>\n<table>\n<thead>\n<tr>\n<th>Param</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>milliseconds</td>\n<td><code>Number</code></td>\n<td>First, User will see bot is typing. Second, wait for milliseconds. Then bot\'s typing mode will close.</td>\n</tr>\n</tbody>\n</table>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">typing</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// bot turn on typing mode and wait 0.1 secs then close.</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="sendtexttext-options"><a href="#sendtexttext-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>sendText(text, options)</code></h3>\n<p>similar as <a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-messenger#sendtextuserid-text--options">client.sendText(userId, text [, options])</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// MessengerBot</span>\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> userId <span class="token operator">=</span> context<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// they are doing same things</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello Messenger\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> <span class="token string">\'Goodbye Messenger\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// LineBot</span>\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> userId <span class="token operator">=</span> context<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// they are doing same things</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello LINE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">pushText</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> <span class="token string">\'Goodbye LINE\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',frontmatter:{title:"Context",date:"December 04, 2017",author:null},fields:{path:"docs/APIReference-Context.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/APIReference-Context/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---docs-api-reference-context-64ad404e15b4b8437eb1.js.map