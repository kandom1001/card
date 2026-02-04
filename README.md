# 电子贺卡

一个用 React 写的简单电子贺卡，点击卡片可翻转打开/关闭。

## 运行

```bash
npm install
npm run dev
```

在浏览器打开终端显示的本地地址（通常是 http://localhost:5173）即可查看。

## 自定义

在 `src/App.jsx` 里修改 `GreetingCard` 的 props 即可改文案：

- `title` - 封面主标题（如「新年快乐」）
- `subtitle` - 封面副标题（如英文祝福）
- `message` - 内页祝福语
- `from` - 落款（如「来自你的朋友」）
