# 바이브 코딩 101

여러분의 아이디어를 작동하는 도구로 만드는 2시간 30분 워크숍입니다. 코딩 경험이 없어도 참여할 수 있습니다.

## 온라인으로 열기

- [수업 안내](https://arnoldchung.github.io/VibeCoding101/)
- [세션 슬라이드](https://arnoldchung.github.io/VibeCoding101/session.html)
- [시작 설문](https://www.menti.com/alt4urxjua9d)

세션 슬라이드는 51장입니다. **이전·다음 버튼, 방향키, Space, 목차**로 이동하고 **F**로 전체 화면을 켜거나 끕니다.

## 오늘 배울 네 가지

1. **바이브 코딩 이해:** AI가 할 일과 내가 결정할 일
2. **프롬프트 작성:** 목적·맥락·요구사항·제약·성공 조건 전달
3. **Skills 활용:** 필요한 Skill 찾기, 지침 읽기, 적용 결과 확인
4. **나만의 Skill 제작:** `SKILL.md` 작성·사용·수정·재검사

Plan·Edit·Auto의 차이, Skills 마켓, Superpowers와 수업 관련 인기 Skills도 살펴봅니다. 모드의 이름과 권한은 도구마다 다릅니다.

## 수업 구성

함께 배우고 지뢰찾기를 만드는 **120분**, 각자의 앱을 만들고 공유하는 **30분**으로 진행합니다.

| 시간 | 활동 | 완료 확인 |
| --- | --- | --- |
| 0–10분 | 시작 설문·바이브 코딩 소개 | AI와 사람의 역할 이해 |
| 10–35분 | VS Code·Node.js·CLI 설치, 로그인·작업 폴더 | 첫 대화와 보드 실행 |
| 35–50분 | 지뢰찾기 요구사항·프롬프트·Plan/Edit/Auto | 구현 범위와 성공 조건 합의 |
| 50–80분 | 지뢰찾기 네 규칙을 한 가지씩 구현·검사 | 작동한 미션과 테스트 결과 기록 |
| 80–95분 | Skills·마켓 이해, 준비된 Skill 활용 | 지뢰찾기 검사 보고서 비교 |
| 95–110분 | 나만의 game-check SKILL.md 작성·호출·개선 | 두 요청·한 줄 수정·재검사 |
| 110–120분 | 결과 공유·GitHub 기록 시연 | 대표 동작과 변경 기록 설명 |
| 120–145분 | 나만의 작은 앱 제작·테스트·수정 | 한 화면·핵심 기능 하나 실행 |
| 145–150분 | 짧은 시연·마무리 | 확인한 결과와 남은 과제 공유 |

## 준비물과 시작하기

- **필수:** 노트북·충전기·인터넷·웹 브라우저·사용할 AI 계정·프로그램 설치 권한
- **함께 설치:** VS Code, Node.js LTS, Codex CLI. 기본 시연은 이 경로입니다.
- **대체 선택:** Claude Code 또는 Gemini CLI가 이미 작동하면 해당 도구를 사용해도 됩니다. 세 도구를 모두 설치할 필요는 없습니다.
- **선택:** GitHub 계정과 GitHub Desktop. 처음에는 로그인 없이 ZIP 다운로드로 참여할 수 있습니다.

**[설치부터 첫 실행까지](docs/SETUP.md)**를 수업 중 함께 따라 합니다. 설치·로그인·폴더 준비를 이미 안다고 가정하지 않습니다. 사용할 AI 계정의 CLI 이용 가능 여부는 미리 확인하고, 수업에서는 브라우저 계정 로그인 경로를 사용합니다. 구독 로그인과 API 키 과금은 별개입니다.

1. VS Code 설치 → 저장소 ZIP 다운로드·압축 풀기
2. VS Code에서 `exercises/minesweeper` 폴더 열기 → 새 터미널 열기
3. Node.js LTS 설치 → node·npm 버전 확인
4. Codex CLI 설치 → 로그인 → 프로젝트 설명 요청
5. 같은 폴더의 `index.html`을 브라우저로 열기

설치가 5분 이상 막히면 짝과 함께 진행합니다. GitHub 기록은 110–120분에 시연하고 준비된 참가자는 따라 합니다. ZIP 수정본과 Clone 폴더는 별개이므로 수정 파일을 같은 상대 경로로 옮겨야 합니다. [GitHub 안내](docs/GITHUB.md)와 [150분 진행표](docs/SESSION.md)를 참고하세요.

## 시작 설문과 QR 코드

[시작 설문 슬라이드](https://arnoldchung.github.io/VibeCoding101/session.html#slide-2)에는 QR 코드, 참여 버튼, Mentimeter 프레젠테이션을 넣었습니다.

1. 오늘 바이브코딩 세미나에 나오시게 된 이유?
2. 저의 바이브코딩 경험 수준은?

[<img src="assets/mentimeter_qr_code.png" width="180" alt="Mentimeter 시작 설문 참여 QR 코드">](https://www.menti.com/alt4urxjua9d)

휴대폰으로 QR 코드를 스캔하거나 [참여 링크](https://www.menti.com/alt4urxjua9d)를 여세요. 질문 전환은 Mentimeter 프레젠테이션에서 진행합니다.

Skills 이해도와 내 앱 아이디어 설문은 아직 자리 표시입니다. `session.html`의 `MENTI-2`, `MENTI-3` 주석 위치에 설문 링크·QR·공식 임베드를 추가할 수 있습니다. 시작 설문은 `MENTI-1`, QR 이미지 파일은 `assets/mentimeter_qr_code.png`입니다.

## 실습 자료

### 나만의 Skill 만들기

[실습 안내·기록지](exercises/skills/README.md)와 [game-check 예제](exercises/skills/game-check/SKILL.md)를 사용합니다. 지뢰찾기의 규칙과 테스트를 확인하는 지침을 작성하고 두 요청으로 호출한 뒤 한 줄을 고쳐 다시 검사합니다.

VS Code에서 연 minesweeper 폴더를 기준으로 저장합니다. 예제는 자동 설치되지 않습니다.

- Codex: `.agents/skills/game-check/SKILL.md` → `$game-check`
- Claude Code: `.claude/skills/game-check/SKILL.md` → `/game-check`

[idea-to-spec](exercises/skills/idea-to-spec/SKILL.md)은 마지막 30분의 새 앱 기획을 위한 선택 예제입니다.

### 지뢰찾기

[시작 안내](exercises/minesweeper/README.md) · [참가자 미션](exercises/minesweeper/docs/PARTICIPANT.md) · [기록지](exercises/minesweeper/docs/WORKSHEET.md)

실행 파일은 `exercises/minesweeper/index.html`입니다. 화면·입력·재시작은 제공되며, 게임 규칙은 참가자가 AI와 구현합니다. 공통 제작 구간에서 지뢰 배치 → 숫자 → 빈 영역 → 승리 순서로 구현합니다. 진행이 느리면 1–2를 우선하고 나머지는 짝과 이어 갑니다. 스타터는 의도적으로 미완성입니다.

## 파일 안내와 로컬 실행

| 경로 | 내용 |
| --- | --- |
| `index.html`, `styles.css` | 간결한 수업 안내 페이지 |
| `session.html`, `session.css`, `session.js` | 화면 공유용 슬라이드 |
| `assets/mentimeter_qr_code.png` | 시작 설문 QR 원본 |
| `docs/` | 설치·바이브 코딩·GitHub·150분 수업 진행 안내 |
| `exercises/skills/` | Skill 제작 예제와 기록지 |
| `exercises/minesweeper/` | 지뢰찾기 스타터와 테스트 |
| `.nojekyll` | GitHub Pages에서 원본 정적 파일 제공 |

Clone 또는 ZIP 다운로드 후 `index.html`이나 `session.html`을 브라우저에서 여세요. 빌드나 외부 라이브러리 설치는 필요 없습니다. GitHub의 파일 보기 화면에서는 HTML이 실행되지 않습니다. Mentimeter 임베드와 외부 링크에는 인터넷 연결이 필요합니다.

이미 Node.js 20 이상이 설치되어 있다면 루트에서 `npm test`로 지뢰찾기 스타터의 기본 검사를 실행할 수 있습니다. 게임 실행에는 Node.js가 필요하지 않습니다. 미완성 미션의 검사는 실습 안내를 따르세요.

GitHub Pages는 `main` 브랜치의 루트에서 배포됩니다. Push 후 온라인 반영까지는 시간이 걸릴 수 있습니다.

MIT License.
