# ACMHP Slack Workspace Design Guide

Bilingual Channel Architecture for Committee & Membership

ACMHP Slack 工作区设计指南 — 委员会与会员双语频道架构

---

## Overview / 概览

This workspace is designed around two tiers:

- **Open channels** for all ACMHP members (community, events, resources)
- **Private committee channels** for the ~20 volunteers managing grants, governance, research, and operations

All channel descriptions are bilingual (English / 中文). Channel names use English for searchability; Chinese names appear in descriptions and topics.

---

## Step 0: Clean Up Existing Channels / 清理现有频道

Before creating new channels, tidy up the defaults that came with the workspace.

| Channel | Action |
|---------|--------|
| `#all-acmhp` | **Rename** to `#announcements` — this becomes your org-wide announcement channel. Update the purpose to the bilingual description below. |
| `#new-channel` | **Archive** — it serves no purpose and will confuse new members. |
| `#social` | **Keep** — update purpose to bilingual description below. |

---

## Tier 1: Open Channels (All Members) / 开放频道（全体会员）

Visible to every ACMHP member. Low barrier to participate. Builds community and keeps everyone informed.

### #announcements / 公告与通知

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Official ACMHP announcements — events, governance updates, milestones, and member recognition. |
| **Purpose (中文)** | ACMHP官方公告 — 活动、治理更新、里程碑及会员表彰。 |
| **Topic** | Post permissions: Committee only \| 发布权限：仅委员会成员 \| React with :white_check_mark: to acknowledge |
| **Notes** | Renamed from `#all-acmhp`. Posting restricted to admins. |

### #introductions / 自我介绍

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Welcome new members! Share who you are, your practice background, and what brought you to ACMHP. |
| **Purpose (中文)** | 欢迎新成员！分享你的背景、专业领域，以及加入ACMHP的原因。 |
| **Topic** | Introduce yourself in English, 中文, or both! :earth_asia: 用英文、中文或双语介绍自己！ |
| **Notes** | New channel |

### #events / 活动信息

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Upcoming ACMHP events — peer supervision sessions, seminars, book club, body-mind healing workshops, AGM, and external events of interest. |
| **Purpose (中文)** | ACMHP活动信息 — 同辈督导、研讨会、读书会、身心疗愈工作坊、年度大会及相关外部活动。 |
| **Topic** | :date: Check pinned post for the full 2026 event calendar \| 查看置顶消息获取2026年完整活动日历 |
| **Notes** | New channel |

### #resources / 资源分享

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Share articles, research papers, tools, training opportunities, and clinical resources relevant to CALD mental health practice. |
| **Purpose (中文)** | 分享与多元文化心理健康实践相关的文章、研究论文、工具、培训机会和临床资源。 |
| **Topic** | Use threads to discuss shared resources :thread: 请使用话题讨论分享的资源 |
| **Notes** | New channel |

### #peer-support / 同伴支持

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Peer consultation, practice reflections, and professional support for CALD practitioners. A safe space for sharing challenges and insights. |
| **Purpose (中文)** | 同辈咨询、实践反思及多元文化从业者的专业支持。安全空间，分享挑战与见解。 |
| **Topic** | :warning: No client-identifying info \| 请勿发布可识别来访者身份的信息 \| Confidentiality first 保密优先 |
| **Notes** | New channel. Clinical boundary reminder pinned. |

### #social / 闲聊天地

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Off-topic chat, celebrations, food recommendations, memes, and getting to know each other beyond work. :tada: |
| **Purpose (中文)** | 工作以外的闲聊、庆祝、美食推荐、趣图，认识彼此更多面 :tada: |
| **Notes** | Existing channel — update purpose |

---

## Tier 2: Committee Channels (Private) / 委员会频道（私密）

Private channels for the ~20 committee volunteers. Operational coordination, decision-making, and project management.

### #committee / 委员会

| Field | Content |
|-------|---------|
| **Purpose (EN)** | General committee discussion — quick decisions, cross-workstream coordination, and anything that doesn't fit a specific channel. |
| **Purpose (中文)** | 委员会综合讨论 — 快速决策、跨工作流协调及其他议题。 |
| **Topic** | :house: Committee home base \| 委员会大本营 \| Use specific channels for grants, events, governance where possible |
| **Notes** | Private. New channel. |

### #grants / 资助与基金

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Grant identification, application drafting, budget construction, deadlines, and funding strategy. Track all active and upcoming applications here. |
| **Purpose (中文)** | 资助识别、申请撰写、预算编制、截止日期及资金策略。在此追踪所有进行中和即将到来的申请。 |
| **Topic** | :clipboard: Active: CCHH Small Stream (due TBC) \| Lyra Taylor #0080 \| Volunteer Grants 2025-26 EOI sent |
| **Notes** | Private. New channel. |

### #governance / 治理与合规

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Meeting minutes, AGM preparation, ACNC compliance, Consumer Affairs Victoria obligations, constitution amendments, and committee elections. |
| **Purpose (中文)** | 会议纪要、年度大会准备、ACNC合规、维州消费者事务义务、章程修订及委员会选举。 |
| **Topic** | :scroll: AIR Act 2012 compliance \| ACNC annual reporting \| Quorum = [X] members |
| **Notes** | Private. New channel. |

### #events-planning / 活动策划

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Event logistics, venue booking, speaker coordination, promotional material, and post-event reviews. The behind-the-scenes of #events. |
| **Purpose (中文)** | 活动后勤、场地预订、演讲者协调、宣传材料及活动回顾。#events 频道的幕后工作区。 |
| **Notes** | Private. New channel. |

### #research / 研究项目

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Practice research coordination — Lyra Taylor EMDR project, culturally adapted cognition checklist development, literature reviews, and future research directions. |
| **Purpose (中文)** | 实践研究协调 — Lyra Taylor EMDR项目、文化适应认知清单开发、文献综述及未来研究方向。 |
| **Topic** | :microscope: Lead: Daria (Xuejiao) Li \| Current: EMDR culturally adapted cognition checklist |
| **Notes** | Private. New channel. |

### #finance / 财务

| Field | Content |
|-------|---------|
| **Purpose (EN)** | Budget tracking, reimbursement requests, financial reporting, and treasurer updates. Keep financial discussions consolidated here. |
| **Purpose (中文)** | 预算追踪、报销申请、财务报告及财务主管更新。所有财务讨论集中在此。 |
| **Notes** | Private. New channel. |

---

## Quick Reference / 快速参考

| Channel | Tier | Who | Key Use |
|---------|------|-----|---------|
| #announcements | Open | All members | Official updates |
| #introductions | Open | All members | New member welcomes |
| #events | Open | All members | Event info & RSVPs |
| #resources | Open | All members | Articles, tools, training |
| #peer-support | Open | All members | Practice consultation |
| #social | Open | All members | Casual chat |
| #committee | Private | Committee | General ops |
| #grants | Private | Committee | Funding applications |
| #governance | Private | Committee | Compliance & minutes |
| #events-planning | Private | Committee | Event logistics |
| #research | Private | Committee | Practice research |
| #finance | Private | Committee | Budget & reporting |

---

## Workspace Guidelines / 工作区使用指南

### :thread: Use Threads / 使用话题回复

Reply in threads to keep channels readable. Especially important in #resources and #peer-support where discussions can get deep.

请使用话题回复以保持频道整洁，尤其在资源分享和同伴支持频道。

### :earth_asia: Bilingual Welcome / 双语欢迎

Post in English, Chinese, or both — whatever feels natural. We value linguistic diversity as a strength.

可以用英文、中文或双语发帖——用你最自然的方式。我们视语言多样性为力量。

### :pushpin: Pin Important Items / 置顶重要信息

Pin key documents, deadlines, and decisions in each channel. Use pinned messages as a lightweight "channel wiki".

在每个频道置顶关键文档、截止日期和决策，作为频道的简易知识库。

### :white_check_mark: Emoji Reactions / 表情回应

- :white_check_mark: for acknowledgement
- :eyes: for "I've seen it"
- :raising_hand: for volunteering
- :question: for questions

Reduces message noise.

用 :white_check_mark: 确认、:eyes: 已阅、:raising_hand: 自愿参与、:question: 有疑问。减少不必要的消息。

### :bell: Notification Tips / 通知建议

- Mute #social if it gets noisy
- Set #announcements and your committee channels to "All messages"
- Everything else can be "Mentions only"

如果闲聊太多可静音#social。将#announcements和委员会频道设为"所有消息"，其他设为"仅提及"。

### :lock: Confidentiality / 保密原则

Never share client-identifying information in any channel. Committee channels are private but not encrypted — treat accordingly.

任何频道均不得分享可识别来访者身份的信息。委员会频道虽为私密但非加密，请谨慎处理。

---

## Setup Checklist / 设置清单

Follow these steps in Slack to implement this design:

- [ ] **1.** Rename `#all-acmhp` → `#announcements` (Channel settings → Edit)
- [ ] **2.** Archive `#new-channel` (Channel settings → Archive)
- [ ] **3.** Update `#social` purpose with bilingual description above
- [ ] **4.** Create 5 public channels: `#introductions`, `#events`, `#resources`, `#peer-support`
- [ ] **5.** Create 6 private channels: `#committee`, `#grants`, `#governance`, `#events-planning`, `#research`, `#finance`
- [ ] **6.** Copy bilingual purposes from this guide into each channel's description
- [ ] **7.** Set channel topics using the suggested topics above
- [ ] **8.** Invite committee members to all private channels
- [ ] **9.** Restrict posting in `#announcements` to workspace admins
- [ ] **10.** Pin a welcome message / confidentiality reminder in `#peer-support`

---

*ACMHP Slack Workspace Design Guide — Created March 2026*

*Australian Association of Culturally and Linguistically Diverse Mental Health Practitioners Inc.*
