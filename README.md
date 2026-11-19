# 바이브 코딩 101

여러분의 아이디어를 작동하는 도구로 만드는 2시간 워크숍입니다. 코딩 경험이 없어도 참여할 수 있습니다.

## 온라인으로 열기

- [수업 안내](https://arnoldchung.github.io/VibeCoding101/)
- [세션 슬라이드](https://arnoldchung.github.io/VibeCoding101/session.html)
- [시작 설문](https://www.menti.com/alt4urxjua9d)

세션 슬라이드는 38장입니다. **이전·다음 버튼, 방향키, Space, 목차**로 이동하고 **F**로 전체 화면을 켜거나 끕니다.

## 오늘 배울 네 가지

1. **바이브 코딩 이해:** AI가 할 일과 내가 결정할 일
2. **프롬프트 작성:** 목적·맥락·요구사항·제약·성공 조건 전달
3. **Skills 활용:** 필요한 Skill 찾기, 지침 읽기, 적용 결과 확인
4. **나만의 Skill 제작:** `SKILL.md` 작성·사용·수정·재검사

Plan·Edit·Auto의 차이, Skills 마켓, Superpowers와 수업 관련 인기 Skills도 살펴봅니다. 모드의 이름과 권한은 도구마다 다릅니다.

## 수업 구성

| 시간 | 활동 |
| --- | --- |
| 첫 0–10분 | 바이브 코딩과 작업 모드 이해 |
| 10–22분 | 프롬프트 작성과 다듬기 |
| 22–32분 | Skills 탐색과 활용 |
| 32–45분 | 나만의 `SKILL.md` 제작 실습 |
| 45–60분 | GitHub와 지뢰찾기로 요청·구현·검증·기록 연습 |
| 다음 60분 | 내 Skill로 앱 기획·구현·테스트·개선·시연 |

GitHub와 지뢰찾기는 배운 내용을 적용하는 마무리 실습입니다. 계정 로그인과 Fork·Clone은 수업 전에 준비합니다. 자세한 진행은 [2시간 수업 안내](docs/SESSION.md)를 참고하세요.

## 시작하기

1. 사용할 AI 코딩 도구와 GitHub에 로그인합니다.
2. [강사 저장소를 Fork](https://github.com/arnoldchung/VibeCoding101/fork)하고 **본인 계정**을 선택합니다.
3. GitHub Desktop으로 **본인 Fork**를 Clone합니다.
4. 온라인 세션 슬라이드 또는 내려받은 `session.html`을 엽니다.
5. 변경한 내용은 테스트와 Diff 확인 후 커밋하고 본인 Fork로 Push합니다.

Fork는 GitHub의 내 복사본, Clone은 내 컴퓨터의 작업 폴더입니다. Fork만으로 내 사이트가 자동 배포되지는 않습니다. [GitHub 설정과 버전 관리](docs/GITHUB.md)에서 자세히 확인할 수 있습니다.

## 시작 설문과 QR 코드

[시작 설문 슬라이드](https://arnoldchung.github.io/VibeCoding101/session.html#slide-2)에는 QR 코드, 참여 버튼, Mentimeter 프레젠테이션을 넣었습니다.

1. 오늘 바이브코딩 세미나에 나오시게 된 이유?
2. 저의 바이브코딩 경험 수준은?

[<img src="assets/mentimeter_qr_code.png" width="180" alt="Mentimeter 시작 설문 참여 QR 코드">](https://www.menti.com/alt4urxjua9d)

휴대폰으로 QR 코드를 스캔하거나 [참여 링크](https://www.menti.com/alt4urxjua9d)를 여세요. 질문 전환은 Mentimeter 프레젠테이션에서 진행합니다.

Skills 이해도와 내 앱 아이디어 설문은 아직 자리 표시입니다. `session.html`의 `MENTI-2`, `MENTI-3` 주석 위치에 설문 링크·QR·공식 임베드를 추가할 수 있습니다. 시작 설문은 `MENTI-1`, QR 이미지 파일은 `assets/mentimeter_qr_code.png`입니다.

## 실습 자료

### 나만의 Skill 만들기

[실습 안내·기록지](exercises/skills/README.md)와 [idea-to-spec 예제](exercises/skills/idea-to-spec/SKILL.md)를 사용합니다. 직접 작성한 지침을 서로 다른 요청 두 개로 테스트하고, 한 줄을 수정해 다시 확인합니다.

예제는 자동 설치되지 않습니다. 선택한 도구의 프로젝트 경로로 복사하세요.

- Codex: `.agents/skills/idea-to-spec/SKILL.md` → `$idea-to-spec`
- Claude Code: `.claude/skills/idea-to-spec/SKILL.md` → `/idea-to-spec`

### 지뢰찾기

[시작 안내](exercises/minesweeper/README.md) · [참가자 미션](exercises/minesweeper/docs/PARTICIPANT.md) · [기록지](exercises/minesweeper/docs/WORKSHEET.md)

실행 파일은 `exercises/minesweeper/index.html`입니다. 화면·입력·재시작은 제공되며, 게임 규칙은 참가자가 AI와 구현합니다. 첫 시간에는 지뢰 배치 한 미션에 집중합니다. 스타터는 의도적으로 미완성입니다.

## 파일 안내와 로컬 실행

| 경로 | 내용 |
| --- | --- |
| `index.html`, `styles.css` | 간결한 수업 안내 페이지 |
| `session.html`, `session.css`, `session.js` | 화면 공유용 슬라이드 |
| `assets/mentimeter_qr_code.png` | 시작 설문 QR 원본 |
| `docs/` | 바이브 코딩·GitHub·수업 진행 안내 |
| `exercises/skills/` | Skill 제작 예제와 기록지 |
| `exercises/minesweeper/` | 지뢰찾기 스타터와 테스트 |
| `.nojekyll` | GitHub Pages에서 원본 정적 파일 제공 |

Clone 또는 ZIP 다운로드 후 `index.html`이나 `session.html`을 브라우저에서 여세요. 빌드나 외부 라이브러리 설치는 필요 없습니다. GitHub의 파일 보기 화면에서는 HTML이 실행되지 않습니다. Mentimeter 임베드와 외부 링크에는 인터넷 연결이 필요합니다.

이미 Node.js 20 이상이 설치되어 있다면 루트에서 `npm test`로 지뢰찾기 스타터의 기본 검사를 실행할 수 있습니다. 게임 실행에는 Node.js가 필요하지 않습니다. 미완성 미션의 검사는 실습 안내를 따르세요.

GitHub Pages는 `main` 브랜치의 루트에서 배포됩니다. Push 후 온라인 반영까지는 시간이 걸릴 수 있습니다.

MIT License.
