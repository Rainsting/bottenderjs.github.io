webpackJsonp([82999037019505],{515:function(n,e){n.exports={data:{markdownRemark:{html:'<h2 id="requirements"><a href="#requirements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Requirements</h2>\n<p>Bottender highly depends on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">async function</a> syntax, so you must make sure your runtime meets the following requirements:</p>\n<ul>\n<li>node >= 7.6</li>\n</ul>\n<h2 id="installing-bottender"><a href="#installing-bottender" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing Bottender</h2>\n<p>To start using it, install <code class="language-text">bottender</code> globally from the npm registry:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">npm install -g bottender</code></pre>\n      </div>\n<p>or install by yarn:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">yarn global add bottender</code></pre>\n      </div>\n<h2 id="initialize"><a href="#initialize" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Initialize</h2>\n<p>After installed, we can start to create new bot with <code class="language-text">bottender init</code> command:</p>\n<p><img src="https://user-images.githubusercontent.com/3382565/42831197-41b3f436-8a20-11e8-80a9-d2cd4895e0f5.png"></p>\n<p>This will create a folder with a <code class="language-text">bottender.config.js</code> file within:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> ConsoleBot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleBot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">createRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We can skip over this file and jump to see the result of the execution:</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code class="language-sh">npm run dev</code></pre>\n      </div>\n<p><img src="https://user-images.githubusercontent.com/3382565/42831198-41e68f86-8a20-11e8-8b22-3378c37c4ed4.png"></p>\n<p>As you can see, we just got a bot that always reply "Hello World" in the console.</p>\n<h2 id="teach-bot-to-echo"><a href="#teach-bot-to-echo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Teach Bot to Echo</h2>\n<p>Open the file and edit the following lines of code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code class="language-diff">bot.onEvent(async context => {\n<span class="token deleted">- await context.sendText(\'Hello World\');</span>\n<span class="token inserted">+ if (context.event.isText) {</span>\n<span class="token inserted">+   await context.sendText(context.event.text);</span>\n<span class="token inserted">+ }</span>\n});</code></pre>\n      </div>\n<p>And the server will be restarted automatically.</p>\n<p><img src="https://user-images.githubusercontent.com/3382565/42831200-4215364c-8a20-11e8-9e19-cd0709bc1b13.png"></p>\n<p>That\'s it!</p>\n<h2 id="next-steps"><a href="#next-steps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Next Steps</h2>\n<p>You just created your first bot with Bottender! To dive deeper into bot development, you may want to determine the intents behind the user saying. For more information on intent understanding, <a href="./Guides-Intents">check out its documentation</a>.</p>',frontmatter:{title:"Getting Started",date:"October 17, 2017",author:null},fields:{path:"docs/GettingStarted.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/GettingStarted/"}}}});
//# sourceMappingURL=path---docs-getting-started-57357f4b6116ba254cd0.js.map