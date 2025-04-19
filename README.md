# KRDS-uiux

이 레포지토리는 [KRDS-uiux/krds-uiux](https://github.com/KRDS-uiux/krds-uiux) 레포지토리의 포크입니다. 이 레포지토리가 원본 레포지토리와 다른 파일은 아래와 같습니다:

- `embed.js`
- `resources/cdn/krds.min.embed.css`
- 지금 읽고 계시는 `README.md`

원본 레포지토리의 `resources/cdn/krds.min.css` 파일은 아이콘을 **https://www.krds.go.kr/resources/img/component/icon/**, 즉 추가적인 HTTPS 요청을 통해 불러옵니다. 해당 도메인이 CDN에 있는 것도 아닌데, 도대체 왜 아이콘을 외부 도메인에 의존해야 하는지 납득이 어려웠습니다. 이를 해결하고자, 이 레포지토리의 `embed.js` 파일은 실행 시 `resources/cdn/krds.min.embed.css` 에서 불러오는 **모든 외부 아이콘을 Base64 형태로 인라인으로 삽입합니다.** 이렇게 하면 외부 도메인에 의존하지 않고도 KRDS를 정상적으로 사용할 수 있습니다.

**요약하자면, KRDS를 사용하시려면 `resources/cdn/krds.min.embed.css` 및 `resources/cdn/krds.min.js` 파일을 불러오시면 됩니다.**  
그러나 솔직히 말하자면, 현재의 KRDS는 <u>설치 후 바로 사용</u> 한다는 느낌을 받기 어렵습니다. 특유의 JS 로직 때문에 Svelte 등과 연동하기도 어렵고요. 그래서 추후 시간이 된다면 Svelte + Vite 조합에 KRDS를 바로 사용할 수 있는 패키지를 만들고자 합니다. 물론 시간이 된다면요...

제작 : [임세훈](https://sh9351.me) (행안부에도 저를 아시는 분이 계실겁니다...)