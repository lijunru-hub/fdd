---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.


---
name: prd-writer
description: Generate comprehensive product requirements documents. Use when starting a new feature or product initiative and need structured documentation.
argument-hint: [feature name]
---

# PRD Writer

## When to Use
- Starting a new feature or product initiative
- Need to document requirements for the engineering team
- Stakeholders need a detailed project overview
- Before beginning design or development work
- To align cross-functional teams on scope and goals

## What This Skill Does
Creates structured, comprehensive PRDs covering problem statement, proposed solution, requirements, success metrics, and implementation details.

## Instructions
Help me write a comprehensive PRD for [feature name]. Include:

1. Problem Statement
- Current situation
- User pain points
- Business impact

2. Proposed Solution
- Overview of the approach
- User stories
- Success metrics

3. Requirements
- Functional requirements
- Technical requirements
- Design requirements

4. Implementation
- Dependencies
- Timeline estimate
- Resources needed

5. Risks and Mitigations

Your context:
[Add product context, feature details, and constraints here]

## Best Practices
- Be specific about the problem and user pain points
- Include quantitative success metrics
- Define scope clearly (what's in scope and out of scope)
- Consider technical constraints upfront
- Add detailed user stories for key flows
- Include acceptance criteria

## Example
**Input:** Building a notification center for SaaS app, target users are power users who miss important updates
**Output:** Full PRD with problem statement, user stories, functional/technical requirements, success metrics (reduce missed notifications by 40%), timeline, and risk assessment

---
name: wechat-subscription-guide
description: Invoke this skill when planning, analyzing requirements, designing architecture, or developing WeChat Mini Programs that involve subscription messages, notifications, or timed reminders. Essential for PRD analysis, database schema design for notifications, and implementing WeChat's subscription message capabilities.
---

# 微信小程序订阅消息指南 (WeChat Subscription Message Scheduler)
## 1. 微信小程序订阅消息配置开发指导
### 1.1 订阅消息配置
> **重要警示 (CRITICAL)**: 在开始编写任何代码之前，必须先询问用户是否已拥有 **订阅消息模板 ID** 和 **模板详细内容**（如 `thing1`, `date2` 等字段定义）。
> 如果用户未提供，**必须立即停止开发流程**，并引导用户去微信公众平台创建模板。
> **原因**：云函数的发送逻辑和前端的请求参数完全依赖于模板的具体字段结构。没有这些信息，生成的代码将无法工作。

如果用户没有提供订阅消息模板 ID和模板内容。请务必先提示用户要求其进行订阅消息的创建，并提供ID和模板
1. **登录微信公众平台**：使用管理员账号登录 [微信公众平台](https://mp.weixin.qq.com/)。
2. **进入“订阅消息”页面**：在左侧导航栏中，点击“订阅消息”进入订阅消息配置页面。
3. **添加订阅消息模板**：点击“添加订阅消息模板”，填写模板名称、模板内容、相关字段（如用户姓名、订单号等），并提交。
4. **获取模板 ID**：添加成功后，系统会生成一个模板 ID，用于后续调用。
5. **拷贝模板 ID**：将模板 ID 复制到小程序端代码中，用于后续调用 API 发送消息。 参考 ./reference/wechat-subscription-message.md 将提供的消息转换为模板代码
### 1.2 小程序客户端处理指导

#### 场景一：订阅消息权限申请融入业务流程
**适用场景**：一次性任务，如“提交订单”、“预约单次提醒”。

**核心原则**：
1. **隐形植入**：将订阅请求埋点在核心业务按钮（如“开始任务”）的点击事件中。
2. **流程连贯**：无论用户是否同意订阅，都必须保证业务逻辑（如提交表单）能继续执行, 如果必须使用到通知的功能请提示用户授权才能保证功能完整性

**代码示例**：
```javascript
handleStartTask() {
  const TEMPLATE_ID = 'your_template_id';
  wx.requestSubscribeMessage({
    tmplIds: [TEMPLATE_ID],
    complete: (res) => {
      // 无论订阅成功与否，都执行业务逻辑
      this.executeTaskLogic();
    }
  });
}
```

#### 场景二：需要多次订阅消息权限申请用于满足业务需求
**适用场景**：例如需要长期循环提醒的任务，如“每天打卡提醒”、“库存监控”。因微信限制每次授权只能发一次，用户需多次点击累积授权次数。

**设计原则**：
1. **就近原则**：独立订阅按钮应直接嵌入在**当前业务操作视图**中（如任务详情卡片内），而不是放在单独的“设置”页面。
2. **可视化反馈**：按钮文案应体现“增加次数”的含义（如“+1次提醒”），并实时展示当前剩余可通知次数。

**代码示例**：
```wxml
<!-- WXML: 任务详情卡片内 -->
<view class="task-card">
  <view>剩余提醒次数：{{remindCount}}</view>
  <!-- 嵌入在业务视图中的独立按钮，方便用户快速连续点击 -->
  <button size="mini" bindtap="handleAddChance">增加提醒次数 (+1)</button>
</view>
```

```javascript
// JavaScript
handleAddChance() {
  wx.requestSubscribeMessage({
    tmplIds: ['TEMPLATE_ID'],
    success: (res) => {
      if (res['TEMPLATE_ID'] === 'accept') {
        this.setData({ remindCount: this.data.remindCount + 1 });
        wx.showToast({ title: '次数+1' });
      }
    }
  });
}
```

### 注意事项
**权限限制**: 必须在用户点击事件中调用，不能在回调或生命周期中调用。
### 小程序云端处理指导
1. 创建云函数: 在小程序项目中创建一个云函数，用于处理订阅消息的发送逻辑。
2. 关于如何处理模板数据、接口参数、示例代码请务必参考 ./reference/wechat-subscription-message.md


## 2. 如何基于订阅消息实现定时发送订阅消息功能

本方案通过参数配置即可覆盖单次提醒、循环提醒及无限循环提醒。

### 核心逻辑
1.  **开始时间 (Start Time)**: 任务触发的时间，采用标准时间字符串格式（如 `2023-10-21 10:32:32`）。
2.  **通知次数 (Count)**:
    *   **指定次数**: 设置 `maxCount` 为正整数（如 1, 2, 3, ……），发送指定次数后任务自动结束 (`status` 变为 `finish`)。
    *   **无限循环**: 设置 `maxCount` 为 **-1**，任务将无限期执行，直到用户或系统主动将任务状态设置为 `finish`。
3.  **时间格式**: 所有时间字段均使用 `YYYY-MM-DD HH:mm:ss` 格式字符串，便于数据库直接查看和调试。

### 业务流程
1. **创建通知任务**：在小程序客户端填写并提交任务参数：开始时间、通知间隔、通知次数、模板 ID、用户 ID 等，随后调用云函数 `createSubTask` 将任务持久化至云数据库。
调用成功后，小程序端可立即获得任务 ID，用于后续查询或取消。
2.  **定时扫描**: 云函数 `SubtaskScheduler` 每分钟触发一次，查询数据库中所有状态为 `ACTIVE` 且 开始时间小于等于当前时间的任务。
3.  **消息发送**: 对每个触发任务，调用微信订阅消息 API 发送消息，更新任务的已发送次数（`sentCount`）。
4.1  **任务结束**: 当任务已发送次数（`sentCount`）达到 `maxCount`（或用户主动将状态设为 `FINISH`），将任务状态设为 `FINISH`。
4.2  **主动任务结束**: 小程序客户调用云函数 `cancelSubTask` 并传入任务 ID，将任务状态设为 `FINISH`。

### 数据库设计 (Schema)
建议在云数据库创建集合 `subscription_tasks`。
```json
{
  "_id": "task_id_example",
  "_openid": "user_openid",
  "status": "ACTIVE", // ACTIVE | FINISH
  "startTime": "2023-10-21 10:32:32", // 提醒开始时间
  "nextRemindTime": "2023-10-21 10:32:32", // 下一次提醒时间(初始化时与startTime相同)
  "interval": 60, // 通知间隔，单位：秒
  "maxCount": 5, // 最大通知次数，-1 表示无限循环
  "sentCount": 0, // 已发送次数
  "templateId": "wechat_template_id", // 订阅消息模板ID
  "externargs": { // 额外数据，用于模板信息填充
    "arg1": "xxx",
    "arg2": "xxx",
  }
}
```

### 云函数实现模板
创建 createSubTask、SubtaskScheduler、cancelSubTask 三个云函数。
#### createSubTask
1. 生成任务 ID
2. 将任务参数（开始时间、通知间隔、下一次提醒时间(和开始时间相同)、通知次数、模板 ID、用户 ID 等）存储到数据库中,并设置任务状态为 `ACTIVE`。
3. 并返回任务 ID 给小程序端。
#### cancelSubTask
1. 接收任务 ID 作为参数，将数据库中对应任务的状态设为 `FINISH`。
#### SubtaskScheduler
1. 每分钟触发一次，查询数据库中所有状态为 `ACTIVE` 且 开始时间小于等于当前时间的任务。
2. 对每个触发任务，调用微信订阅消息 API 发送消息，并更新任务信息
参考代码片段:
**数据库过滤**
```javascript
const _ = db.command
const now = new Date()

// status = 'ACTIVE' AND nextRemindTime <= now
// 限制每次处理的数量，防止超时
const tasks = await db.collection('subscription_tasks')
  .where({
    status: 'ACTIVE',
    nextRemindTime: _.lte(now)
  })
  .limit(30)
  .get()
```

**发送订阅消息**
需要用户ID、模板ID、模板数据等
关于如何处理模板数据、接口参数、示例代码请务必参考 ./reference/wechat-subscription-message.md

**任务状态更新**
1.  发送成功后，更新任务的 `nextRemindTime` 为下一次提醒时间（当前时间 + 通知间隔），并增加 `sentCount` 已发送次数。
2.  当任务已发送次数（`sentCount`）达到 `maxCount`（或用户主动将状态设为 `FINISH`），将任务状态设为 `FINISH`。

#### 配置定时触发器
为SubtaskScheduler云函数 创建 config.json, 配置每分钟定时器
```json
{
  "permissions": {
    "openapi": [
      "subscribeMessage.send"
    ]
  },
  "triggers": [
    {
      "name": "myTimer",
      "type": "timer",
      "config": "0 * * * * * *"
    }
  ]
}
```
**定时触发器配置说明**：
- `"0 * * * * * *"` 表示每分钟的第0秒执行一次
- 可以根据需要调整执行频率

**注意**: 配置或者修改触发器配置文件之后需要提醒用户在微信小程序开发页面对应云函数下的config.json文件右键点击上传触发器

# 微信小游戏订阅消息发送·云调用 API 文档
## 一、云调用说明
云调用是微信云开发提供的在云函数中调用微信开放接口的能力，需要在云函数中通过`wx-server-sdk` 使用。
需在`config.json` 中配置`subscribeMessage.send` API 的权限。

## 二、接口方法
```javascript
openapi.subscribeMessage.send
```

## 三、请求参数
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| touser | string | - | 是 | 接收者（用户）的 openid |
| templateId | string | - | 是 | 所需下发的订阅模板 id |
| page | string | - | 否 | 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数（示例 index?foo=bar）。该字段不填则模板无跳转 |
| data | Object | - | 是 | 模板内容，格式形如 `{ 'key1': { 'value': any }, 'key2': { 'value': any } }` |
| miniprogramState | string | formal | 否 | 跳转小程序类型：developer 为开发版；trial 为体验版；formal 为正式版；默认为正式版 |
| lang | string | zh_CN | 否 | 进入小程序查看的语言类型，支持 zh_CN(简体中文)、en_US(英文)、zh_HK(繁体中文)、zh_TW(繁体中文)，默认为 zh_CN |

## 四、返回值
返回 JSON 数据包：
| 属性 | 类型 | 说明 |
| ---- | ---- | ---- |
| errCode | number | 错误码 |
| errMsg | string | 错误信息 |

**errCode 合法值**
| 值 | 说明 |
| ---- | ---- |
| 0 | 成功 |

## 五、异常说明
抛出异常的 JSON 结构：
| 属性 | 类型 | 说明 |
| ---- | ---- | ---- |
| errCode | number | 错误码 |
| errMsg | string | 错误信息 |

**异常 errCode 合法值**
| 值 | 说明 |
| ---- | ---- |
| 40003 | touser 字段 openid 为空或者不正确 |
| 40037 | 订阅模板 id 为空不正确 |
| 43101 | 用户拒绝接受消息，如果用户之前曾经订阅过，则表示用户取消了订阅关系 |
| 47003 | 模板参数不准确，可能为空或者不满足规则，errmsg 会提示具体是哪个字段出错 |
| 41030 | page 路径不正确，需要保证在现网版本小程序中存在，与 app.json 保持一致 |

## 六、请求示例
```javascript
const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: 'OPENID',
      page: 'index',
      lang: 'zh_CN',
      data: {
        number01: {
          value: '339208499',
        },
        date01: {
          value: '2015年01月05日',
        },
        site01: {
          value: 'TIT创意园',
        },
        site02: {
          value: '广州市新港中路397号',
        },
      },
      templateId: 'TEMPLATE_ID',
      miniprogramState: 'developer',
    });
    return result;
  } catch (err) {
    return err;
  }
};
```
# 订阅消息参数值内容限制说明

| 参数类别          | 参数说明 | 参数值限制                                                                 | 说明                                                                 |
|-------------------|----------|----------------------------------------------------------------------------|----------------------------------------------------------------------|
| thing.DATA        | 事物     | 20个以内字符                                                               | 可汉字、数字、字母或符号组合                                         |
| number.DATA       | 数字     | 32位以内数字                                                               | 只能数字，可带小数                                                     |
| letter.DATA       | 字母     | 32位以内字母                                                               | 只能字母                                                             |
| symbol.DATA       | 符号     | 5位以内符号                                                               | 只能符号                                                             |
| character_string.DATA | 字符串 | 32位以内数字、字母或符号                                                   | 可数字、字母或符号组合                                               |
| time.DATA         | 时间     | 24小时制时间格式（支持+年月日），支持填时间段，两个时间点之间用“~”符号连接 | 例如：`15:01`，或：`2019年10月1日 15:01`                            |
| date.DATA         | 日期     | 年月日格式（支持+24小时制时间），支持填时间段，两个时间点之间用“~”符号连接 | 例如：`2019年10月1日`，或：`2019年10月1日 15:01`                      |
| amount.DATA       | 金额     | 1个币种符号+10位以内纯数字，可带小数，结尾可带“元”                         | 可带小数                                                             |
| phone_number.DATA | 电话     | 17位以内，数字、符号                                                       | 电话号码，例：`+86-0766-6688866`                                     |
| car_number.DATA   | 车牌     | 8位以内，第一位与最后一位可为汉字，其余为字母或数字                         | 车牌号码：粤A8Z888挂                                                 |
| name.DATA         | 姓名     | 10个以内纯汉字或20个以内纯字母或符号<br>中文和字母混合按中文名算，10个字内 | 中文名10个汉字内；纯英文名20个字母内；中文和字母混合按中文名算，10个字内 |
| phrase.DATA       | 汉字     | 5个以内汉字                                                               | 5个以内纯汉字，例如：配送中                                           |
| enum.DATA         | 枚举值   | 只能上传枚举值范围内的字段值                                               | 调用接口获取参考枚举值                                               |

---

## 符号与格式说明

- 符号表示除中文、英文、数字外的常见符号，不能带有换行等控制字符。
- 时间格式支持 `HH:MM:SS` 或者 `HH:MM`。
- 日期包含年月日，支持 `y年m月d日`、`y年m月`、`m月d日` 格式，或者用 `-`、`/`、`.` 符号连接，如 `2018-01-01`、`2018/01/01`、`2018.01.01`、`2018-01`、`01-01`。
- 每个模板参数都会以类型为前缀，例如第一个数字模板参数为 `number01.DATA`，第二个为 `number02.DATA`。

---

## 示例
### 模板内容示例

```
姓名: {{name01.DATA}}
金额: {{amount01.DATA}}
行程: {{thing01.DATA}}
日期: {{date01.DATA}}
```

### 对应的 JSON 示例

```json
{
    "touser": "OPENID",
    "template_id": "TEMPLATE_ID",
    "page": "index",
    "data": {
        "name01": {
            "value": "某某"
        },
        "amount01": {
            "value": "¥100"
        },
        "thing01": {
            "value": "广州至北京"
        },
        "date01": {
            "value": "2018-01-01"
        }
    }
}
```
