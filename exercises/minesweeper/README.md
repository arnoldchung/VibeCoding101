# 지뢰찾기 바이브 코딩 워크숍

**Fork하고, AI와 한 기능씩 구현하고, 테스트한 뒤 커밋하는 한국어 실습용 스타터입니다.**

이 저장소는 완성된 지뢰찾기 게임이 아닙니다. 9 × 9 보드, 클릭, 깃발, 키보드 조작, 다시 시작, 상태 표시가 준비되어 있습니다. 참가자는 `src/engine.js`의 네 함수를 완성합니다. 현재 스타터에는 지뢰가 없으며, 클릭한 한 칸만 열립니다. 이 동작은 버그가 아니라 과제를 남겨 둔 상태입니다.

## 5분 안에 시작하기

1. [이 저장소 Fork하기](https://github.com/arnoldchung/VibeCoding101/fork)를 눌러 **Owner를 본인 계정**으로 선택합니다.
2. 본인 Fork의 `Code` 메뉴에서 주소를 복사하고 GitHub Desktop의 `File > Clone Repository > URL`에 붙여 넣습니다. **강사 저장소가 아닌 본인 Fork를 Clone**하세요.
3. Clone한 폴더의 `exercises/minesweeper/index.html`을 브라우저에서 엽니다. **Node.js, npm install, API 키가 필요 없습니다.**
4. 보드 클릭·깃발·다시 시작을 확인합니다. `exercises/minesweeper` 폴더를 AI 코딩 도구에서 엽니다.
5. `feature/mine-placement` 브랜치를 만들고 [미션 1](docs/PARTICIPANT.md#미션-1-지뢰-배치)을 시작합니다.

설치가 어려우면 [브라우저 대안](docs/PARTICIPANT.md#설치가-어려운-경우)을 참고하세요. Fork 자체는 앱을 실행하거나 배포하는 기능이 아닙니다.

## 제공하는 것과 구현할 것

| 이미 제공 | 참가자가 구현 |
| --- | --- |
| 반응형 한국어 화면, 9 × 9 보드 | 1. `placeMines`: 지뢰 10개, 중복 금지, 첫 클릭 안전 |
| 열기·깃발 입력 연결, 깃발 최대 10개 | 2. `countAdjacentMines`: 주변 8칸의 지뢰 수 |
| 리셋, 열린 칸·깃발 수, 패배 처리 | 3. `expandEmptyArea`: 0과 연결된 빈 영역 열기 |
| 키보드 이동, F, Enter/Space, 모바일 깃발 모드 | 4. `hasWon`: 모든 안전 칸이 열렸는지 판정 |

숫자는 주변 8칸의 지뢰 수입니다. 승리는 깃발 개수가 아니라 **모든 안전 칸을 여는 것**으로 판단합니다. 처음 클릭한 칸만 안전하게 보호하며 주변 8칸까지 보호하는 것은 선택 확장입니다.

## 파일 지도

```text
index.html                 화면 구조
styles.css                 색·간격·보드 모양
src/engine.js              게임 규칙, TODO 1~4
src/app.js                 클릭·키보드와 화면 연결
tests/starter.test.cjs     제공된 기능의 검사
tests/missions.test.cjs    구현할 미션의 수용 기준
docs/PARTICIPANT.md        단계별 요청문과 테스트
docs/INSTRUCTOR.md         2시간 진행안과 시연 계획
docs/VERSION-CONTROL.md    Fork·커밋·Push·PR·복구
docs/WORKSHEET.md          참가자 기록지
.agents/skills/            Codex용 프로젝트 Skill
.claude/skills/            Claude Code용 같은 Skill
```

## AI에게 첫 요청

> 이 프로젝트는 지뢰찾기 수업용 스타터입니다. AGENTS.md와 src/engine.js를 먼저 읽어 주세요. 미션 1의 placeMines만 구현해 주세요. 서로 다른 칸에 정확히 mineCount개를 놓고 첫 클릭 좌표는 제외하세요. 외부 라이브러리 없이 rng를 이용해 유한한 단계로 배치하세요. 다른 미션을 미리 풀지 말고, 변경 내용과 확인할 테스트를 설명해 주세요.

전체 게임을 한 번에 요청하기보다 **수용 기준 → 한 함수 구현 → 실행 확인 → 커밋** 순서로 진행하세요. AI가 말한 테스트 결과와 본인이 관찰한 결과를 구분합니다.

## 테스트 (Node.js 20 이상이 있는 경우만)

`exercises/minesweeper` 폴더에서 다음을 실행합니다. 패키지 설치는 필요 없습니다.

```sh
npm test                 # 기본 제공 기능: 스타터에서도 통과해야 함
npm run test:missions    # 미션 검사: 처음에는 의도적으로 실패함
```

예를 들어 미션 1만 확인하려면:

```sh
node --test --test-name-pattern="미션 1" tests/missions.test.cjs
```

과제 테스트를 통과시키려고 삭제하거나 기대값을 바꾸지 마세요. 테스트 코드도 완전한 검증을 보장하지 않으므로 브라우저에서 실제 조작을 확인하세요. [수동 확인표](docs/PARTICIPANT.md#수동-확인표)도 제공합니다.

## 실습을 확장하는 방법

수업에서는 미션 1~2를 함께 연습합니다. 이후 이 실습을 계속한다면 미션 3~4와 자신만의 개선을 추가할 수 있습니다. 전체 2시간 수업의 진행은 [수업 안내](../../docs/SESSION.md)를 따르며, 후반에는 다른 아이디어로 앱을 만들어도 됩니다.

[참가자 가이드](docs/PARTICIPANT.md) · [강사용 진행안](docs/INSTRUCTOR.md) · [버전 관리](docs/VERSION-CONTROL.md) · [워크시트](docs/WORKSHEET.md)

## 범위

외부 API·로그인·네트워크 요청·데이터 업로드 없이 브라우저에서 동작합니다. 게임 진행과 미션 체크는 새로고침하면 초기화됩니다. `npm test`에는 과제 검사를 넣지 않았으며, 강사용 정답 구현도 이 기본 브랜치에는 포함하지 않았습니다.

MIT License. 자유롭게 Fork하고 수정할 수 있습니다.

[바이브 코딩 101 수업 자료로 돌아가기](../../README.md)
