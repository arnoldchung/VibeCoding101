# 세 앱으로 따라 하는 수업 준비

수업은 150분이며, **앱 하나**를 선택합니다. 일반 채팅의 파일 첨부 대신 로컬 프로젝트 폴더를 읽고 수정할 수 있는 화면을 사용합니다. CLI·터미널·VS Code·Node.js 설치는 필수가 아닙니다.

## 공통 순서

1. 개인 노트북에 앱 사전 설치·로그인. 계정에서 로컬 프로젝트의 파일을 읽고 수정할 수 있는지 확인합니다. 설치·로그인이 어려우면 수업 시작 때 강사와 함께 확인합니다.
2. GitHub 계정·GitHub Desktop 설치와 로그인을 확인하고, 강사 저장소를 **내 계정에 Fork → Desktop으로 내 Fork를 Clone**합니다. [저장·복구 따라 하기](GITHUB.md)를 참고합니다.
3. **Clone한 폴더 안의 exercises/minesweeper**를 앱의 로컬 프로젝트로 엽니다. Desktop은 Clone 저장소 전체를 관리하고, AI 앱은 그 안의 실습 폴더를 엽니다.
4. “AGENTS.md와 docs/PARTICIPANT.md를 읽고 현재 작업 경로, 네 TODO 함수, 제가 열 index.html의 실제 위치를 알려 주세요. 아직 수정하지 마세요.” 요청.
5. 실제 작업 폴더의 index.html을 브라우저로 열어 클릭·깃발·리셋 확인.
6. 한 규칙씩 계획 → 구현 → 변경 확인 → 브라우저 새로고침·새 게임 → **Desktop에서 Commit → Push**를 반복합니다. 문제가 생기면 가장 최근의 내 커밋을 Revert하는 방법을 사용합니다.
7. 기존 Skill과 직접 작성한 game-check 적용. 실행 검사와 미실행 항목 구분.
8. 마지막 30분은 Clone 저장소 안의 새 **my-app** 폴더를 앱에서 열고 핵심 기능 하나를 구현·시연·커밋합니다.

설치가 막히면 짝과 Clone 경로로 진행합니다. ZIP은 화면 실행용 대안이며 그 폴더 자체에는 Git 이력이 없어 Commit·Revert가 되지 않습니다. ZIP 수정본을 옮길 때는 Clone 안의 같은 위치로 복사하고, AI 앱과 브라우저도 Clone 위치로 다시 엽니다.

## ChatGPT · Codex 앱

[다운로드](https://chatgpt.com/download/) · [세션](https://arnoldchung.github.io/VibeCoding101/session.html)

ChatGPT 앱의 Codex 작업 화면을 선택하고 로컬 프로젝트에 실습 폴더를 연결합니다. Local 작업을 사용합니다. 여러 폴더를 연결했다면 실습 폴더를 기본 작업 폴더로 확인합니다.

Skill은 실습 폴더 기준 `.agents/skills/game-check/SKILL.md`에 저장합니다. 앱에서 지원하는 Skill 선택 또는 “game-check Skill을 사용해…”라는 요청으로 적용하고 실제 읽은 파일을 확인합니다.

[로컬 작업](https://learn.chatgpt.com/docs/environments/modes) · [프로젝트](https://learn.chatgpt.com/docs/projects) · [Skills](https://learn.chatgpt.com/docs/build-skills)

## Claude · Code 앱

[다운로드](https://claude.com/download) · [세션](https://arnoldchung.github.io/VibeCoding101/session-claude.html)

Claude 앱에서 Code 탭을 선택합니다. 환경에서 내 컴퓨터(Local), 프로젝트 폴더에서 실습 폴더를 선택합니다. 일반 Chat·Cowork 화면과 구분합니다. 수업에서는 별도 복사본(Worktree) 옵션을 켜지 않고 시작합니다. 이미 켰다면 실제 수정 경로를 확인하고 그 위치의 index.html을 엽니다.

Skill은 `.claude/skills/game-check/SKILL.md`에 저장합니다. 입력창의 `/` 또는 +의 명령 선택에서 Skill을 찾고 `/game-check`로 사용합니다. 데스크톱 Code에는 자체 실행 구성요소가 있으므로 CLI를 별도로 설치하는 과정은 필수에 넣지 않습니다.

[데스크톱 안내](https://code.claude.com/docs/en/desktop) · [Skills](https://code.claude.com/docs/en/skills)

## Google Antigravity 앱

[다운로드](https://antigravity.google/download) · [세션](https://arnoldchung.github.io/VibeCoding101/session-antigravity.html)

Antigravity 앱에서 프로젝트/작업공간으로 실습 폴더를 엽니다. 로컬 폴더의 현재 경로를 첫 요청으로 확인합니다. Gemini CLI·브라우저 Gemini 채팅과는 다른 앱입니다.

Skill은 `.agents/skills/game-check/SKILL.md`에 저장하고 `/game-check` 또는 이름을 지정한 요청으로 적용합니다. 기존 minesweeper-workshop도 같은 프로젝트 경로에 있습니다. `.gemini/skills`라는 Gemini CLI 전용 안내를 앱에 그대로 사용하지 않습니다.

[시작하기](https://antigravity.google/docs/getting-started) · [앱 Skills](https://antigravity.google/docs/skills)

## 나만의 Skill 파일 위치 · 슬라이드 43–47

**기준 폴더는 저장소 맨 위가 아니라 앱에서 연 `exercises/minesweeper`입니다.** 아래 폴더 하나를 선택한 앱에 맞춰 만들고 그 안에 파일을 저장합니다.

```text
minesweeper/
  .agents/skills/game-check/SKILL.md   ← ChatGPT · Codex / Antigravity
  .claude/skills/game-check/SKILL.md   ← Claude · Code
```

경로의 `/`는 폴더 안으로 들어간다는 뜻입니다. `game-check`는 Skill 하나의 폴더이며, `SKILL.md`에 이름·용도·작업 절차를 적습니다. 두 경로를 모두 만들 필요는 없습니다. 예제인 `exercises/skills/game-check/SKILL.md`는 참고 자료이며 자동으로 설치되지 않습니다.

숨김 폴더를 직접 만들기 어려우면 앱에 요청합니다. [전체 예제](../exercises/skills/game-check/SKILL.md)를 열어 전체 내용을 복사합니다. 아래 `[경로]`를 선택한 앱의 경로로 바꾸고 요청 끝에 예제 내용을 붙여 넣습니다. “앞 슬라이드의 내용”이라고만 쓰면 앱은 내용을 알 수 없습니다.

> 현재 작업 중인 minesweeper 폴더 기준으로 [경로] 파일을 만들고 제가 전달한 이름·설명·검사 절차를 함께 저장해 주세요. 게임 코드와 기존 테스트는 수정하지 마세요.

1. 앱의 파일 보기에서 내용과 실제 위치를 확인합니다. 파일 이름은 `SKILL.md`이며 `SKILL.md.txt`가 아닙니다.
2. 같은 프로젝트에서 새 대화를 열고 Skill 선택 기능에서 `game-check`를 확인합니다.
3. Codex는 “game-check Skill을 사용해 미션 1을 점검해 주세요”, Claude·Antigravity는 `/game-check 미션 1을 점검해 주세요`로 사용합니다.
4. 보이지 않으면 실제 프로젝트 경로·이름·앱 버전을 확인합니다. 이름이 같은 다른 Skill이 있다면 읽은 파일 경로도 확인합니다.

파일 첨부나 일반 채팅 업로드만으로 로컬 프로젝트 Skill이 등록되지는 않습니다. 본문을 일반 요청에 붙여 사용했다면 Skill로 불러온 결과와 구분해 기록합니다.

## 자동 테스트는 선택

게임은 index.html을 브라우저로 열면 실행됩니다. Node.js가 있으면 AI에게 기본·해당 미션 검사를 실행하도록 요청합니다. 없으면 수업 중 설치를 진행하지 않고 미실행으로 보고한 뒤 수동 절차를 제공합니다. 첫 클릭이 안전하다는 관찰만으로 지뢰가 정확히 10개라고 판단하지 않습니다. [CLI·Node.js 설치 참고](SETUP.md)는 자동 검사를 더 해 보고 싶을 때 사용합니다.

공식 문서 확인: 2026-11-19. 메뉴 위치·이름은 앱 버전·계정에 따라 달라질 수 있습니다. 강사는 실제 로컬 프로젝트 접근·수정·실행을 사전에 확인합니다. 앱을 열 수 있다는 것만으로 모든 기능을 사용할 수 있다고 가정하지 않습니다.

## Superpowers 설치

각 앱의 40쪽에 설치 안내를 추가했습니다. [앱별 설치·확인 상세 안내](SUPERPOWERS-SETUP.md)를 참고하고, 설치 후 41쪽의 지뢰찾기 프롬프트를 사용하세요.
