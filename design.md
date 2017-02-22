## Sites
- 蘋果
- ETToday 東森
- UDN 聯合
- 中國時報
- 自由時報
- Yahoo!
- 風傳媒
- 端傳媒
- 天下 (專)
- 運動筆記
- Dong 網
- 遠見
- 運動視界
- 報導者
- 女人迷
- 科技報橘
- 數位時代
- 電獺少女

## Structure
```js
News {
  title: string,
  content: string,
  authors: string[],
  medias: {
    url: string,
    photographers: string[],
    isVideo: boolean,
  }[]?,
  date: Date,
  sources: string?,
  categories: string?,
  social: {
    facebook: {
      likes: number?,
      shares: number?,
    }?,
  },
  url: string,
  platform: string,
  isStory: boolean,
  subtitle: string?,
}
```
