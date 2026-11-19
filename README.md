# 바이브 코딩 101

**코딩 경험이 없는 연구자를 위한 바이브 코딩과 GitHub 수업 자료입니다.**

AI에게 원하는 동작을 설명하고, 결과를 직접 검증하며, 변경 이력을 남기는 방법을 배웁니다. 첫 시간에는 개념 설명과 함께 실습하고, 다음 시간에는 같은 과정을 자신의 아이디어에 적용합니다.

## 수업 자료

| 주제 | 배울 내용 | 자료 |
| --- | --- | --- |
| 바이브 코딩 | 문제 정의, 요청문 작성, 실행, 테스트, 개선 | [바이브 코딩 기초](docs/VIBE-CODING.md) |
| GitHub와 버전 관리 | 계정 준비, Fork·Clone, Diff·커밋, Push·Pull, 복구 | [GitHub 시작하기](docs/GITHUB.md) |
| 수업 진행 | 첫 60분 함께 배우기, 다음 60분 내 아이디어 만들기 | [2시간 수업 안내](docs/SESSION.md) |

브라우저에서 수업 자료를 보려면 저장소를 내려받고 루트의 `index.html`을 엽니다. 별도 설치나 빌드는 필요 없습니다.

## 시작하기

1. [이 저장소를 Fork](https://github.com/arnoldchung/VibeCoding101/fork)하고 Owner를 **본인 계정**으로 선택합니다.
2. GitHub Desktop으로 **본인 Fork**를 Clone합니다.
3. 루트의 `index.html`에서 수업 개요와 자료를 읽습니다.
4. 수업 안내에 따라 아래 실습을 진행합니다. 변경한 내용은 확인한 뒤 커밋하고 본인 Fork로 Push합니다.

Fork는 GitHub의 내 복사본, Clone은 내 컴퓨터의 작업 폴더입니다. Fork만으로 웹사이트가 자동 실행되거나 배포되지는 않습니다.

## 수업 실습

**지뢰찾기**는 배운 과정을 연습하는 예제입니다. 게임 코드는 수업 자료와 분리해 [`exercises/minesweeper/`](exercises/minesweeper/)에 두었습니다.

- [실습 시작 안내](exercises/minesweeper/README.md)
- 실행 파일: `exercises/minesweeper/index.html`
- [참가자 미션과 요청문](exercises/minesweeper/docs/PARTICIPANT.md)
- [실습 기록지](exercises/minesweeper/docs/WORKSHEET.md)

화면·입력·재시작은 제공하고, 지뢰 배치·주변 숫자·빈 영역·승리 판정은 참가자가 AI와 구현합니다. 시작 상태는 의도적으로 미완성입니다.

## 저장소 구조

```text
README.md                 수업 소개와 자료 안내
index.html                수업 첫 화면
styles.css                수업 화면 스타일
docs/
  VIBE-CODING.md           바이브 코딩 기초
  GITHUB.md                GitHub 설정과 버전 관리
  SESSION.md               2시간 수업 진행
exercises/
  minesweeper/             지뢰찾기 실습 코드·테스트·기록지
```

## 검증

Node.js 20 이상이 이미 있다면 루트에서 `npm test`로 지뢰찾기 스타터의 기본 검사를 실행할 수 있습니다. 게임 실행에는 Node.js가 필요 없습니다. 과제 검사는 실습 폴더의 안내를 참고하세요.

MIT License.
