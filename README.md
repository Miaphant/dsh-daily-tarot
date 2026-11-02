# 每日塔罗 · Daily Tarot

DeepSeek Harness 桌面端社区插件：点击牌背，观看真正的 3D 翻牌动画，随机揭晓韦特塔罗牌面与中文解读。

## 功能

- 22 张真实韦特大阿尔卡那牌面，图片内嵌，运行时无需联网。
- 随机正位 / 逆位，逆位会旋转牌图。
- 每天最多抽 **10 次**，每次独立随机，可能重复。
- 显示剩余次数，当天记录可回看，回看不消耗次数。
- 整体、工作 / 学习、关系 / 情感、今日行动四项内置牌义解读。
- 支持键盘操作与减少动态效果设置。

## 安装

先安装 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)，确保 `dsh` 命令可用。下载 Release 中的 `.tgz` 后运行：

```bash
dsh plugin --profile desktop add ./dsh-daily-tarot-1.1.1.tgz
```

也可以将本仓库下载或克隆到本机，以绝对路径安装：

```bash
dsh plugin --profile desktop add /absolute/path/to/dsh-daily-tarot
```

安装后点击侧栏 **每日塔罗**；如果入口没有立即出现，重启 Harness。

官方桌面端通常使用 `desktop` profile；若使用自定义 profile，将命令里的 `desktop` 替换为对应名称。

## 使用与次数

1. 从三张牌背中任选一张，播放翻牌并显示解读。
2. 点击「重新洗牌 · 再抽一次」开始下一次。
3. 点击「今日记录」中的牌名回看。

每天的日期依据本机时区；次数和记录保存在 Harness 界面的本地存储中。当天记录会保留，次日额度重置。刷新或重新打开面板不会重置次数。清除应用本地数据或更换设备会重置记录；它是本地使用限制，不是跨设备账户配额。

解读来自内置中文牌义规则，不调用 DeepSeek 模型，不需要 API Key。抽牌仅供娱乐与自我觉察。

## 开发

需要 Node.js 18 或更高版本，无额外构建依赖：

```bash
node scripts/build.mjs
node --test test/plugin.test.cjs
```

编辑 `src/client.template.js` 后重新构建 `client.js`。已提交可运行的 `client.js`，用户安装无需构建。插件使用宿主提供的 React 与界面插槽。

本版本已在 DeepSeek Harness 桌面端实测；Harness 仍处于技术预览阶段，界面接口变化可能需要后续适配。

## 卸载

```bash
dsh plugin --profile desktop remove dsh-daily-tarot
```

卸载不主动删除浏览器本地记录。

## 许可证与署名

代码：[MIT](LICENSE)，作者 **Miaphant**。

牌面：Pamela Colman Smith / Rider–Waite–Smith 原版。来源与公共领域说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 和 [SOURCES.json](SOURCES.json)。

独立社区插件，与 DeepSeek 官方无隶属关系或背书关系。
