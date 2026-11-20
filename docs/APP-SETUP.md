# 세 앱으로 따라 하는 수업 준비

수업은 150분이며, **앱 하나**를 선택합니다. 일반 채팅의 파일 첨부 대신 로컬 프로젝트 폴더를 읽고 수정할 수 있는 화면을 사용합니다. CLI·터미널·VS Code·Node.js 설치는 필수가 아닙니다.

## 공통 순서

1. 개인 노트북에 앱 설치·로그인. 코딩 작업 기능을 사용할 수 있는 계정인지 확인합니다.
2. 강사 저장소에서 Code → Download ZIP → 압축 풀기.
3. **exercises/minesweeper**를 앱의 로컬 프로젝트로 열기.
4. “AGENTS.md를 읽고 현재 작업 경로와 네 TODO 함수를 설명해 주세요. 아직 수정하지 마세요.” 요청.
5. 실제 작업 폴더의 index.html을 브라우저로 열어 클릭·깃발·리셋 확인.
6. 한 규칙씩 계획→구현→변경 확인→브라우저 새로고침·새 게임.
7. 기존 Skill과 직접 작성한 game-check 적용. 실행 검사와 미실행 항목 구분.
8. 마지막 30분은 새 my-app 폴더에서 핵심 기능 하나를 구현·시연.

## ChatGPT · Codex 앱

[다운로드](https://chatgpt.com/download/) · [세션](https://arnoldchung.github.io/VibeCoding101/session.html)

ChatGPT 앱의 Codex 작업 화면을 선택하고 로컬 프로젝트에 실습 폴더를 연결합니다. Local 작업을 사용합니다. 여러 폴더를 연결했다면 실습 폴더를 기본 작업 폴더로 확인합니다.

Skill은 실습 폴더 기준 `.agents/skills/game-check/SKILL.md`에 저장합니다. 앱에서 지원하는 Skill 선택 또는 “game-check Skill을 사용해…”라는 요청으로 적용하고 실제 읽은 파일을 확인합니다.

[로컬 작업](https://learn.chatgpt.com/docs/environments/modes) · [프로젝트](https://learn.chatgpt.com/docs/projects) · [Skills](https://learn.chatgpt.com/docs/build-skills)

## Claude · Code 앱

[다운로드](https://claude.com/download) · [세션](https://arnoldchung.github.io/VibeCoding101/session-claude.html)

Claude 앱에서 Code 탭을 선택합니다. 환경에서 내 컴퓨터(Local), 프로젝트 폴더에서 실습 폴더를 선택합니다. 일반 Chat·Cowork 화면과 구분합니다. 별도 worktree를 사용한다면 실제 수정 경로를 확인하고 그 위치의 index.html을 엽니다.

Skill은 `.claude/skills/game-check/SKILL.md`에 저장합니다. 입력창의 `/` 또는 +의 명령 선택에서 Skill을 찾고 `/game-check`로 사용합니다. 데스크톱 Code에는 자체 실행 구성요소가 있으므로 CLI를 별도로 설치하는 과정은 필수에 넣지 않습니다.

[데스크톱 안내](https://code.claude.com/docs/en/desktop) · [Skills](https://code.claude.com/docs/en/skills)

## Google Antigravity 앱

[다운로드](https://antigravity.google/download) · [세션](https://arnoldchung.github.io/VibeCoding101/session-antigravity.html)

Antigravity 앱에서 프로젝트/작업공간으로 실습 폴더를 엽니다. 로컬 폴더의 현재 경로를 첫 요청으로 확인합니다. Gemini CLI·브라우저 Gemini 채팅과는 다른 앱입니다.

Skill은 `.agents/skills/game-check/SKILL.md`에 저장하고 `/game-check` 또는 이름을 지정한 요청으로 적용합니다. 기존 minesweeper-workshop도 같은 프로젝트 경로에 있습니다. `.gemini/skills`라는 Gemini CLI 전용 안내를 앱에 그대로 사용하지 않습니다.

[시작하기](https://antigravity.google/docs/getting-started) · [앱 Skills](https://antigravity.google/docs/skills)

## Skill 파일은 앱에게 만들도록 요청해도 됩니다

> [선택한 앱의 Skill 경로]에 SKILL.md를 만들고 아래 지침을 저장해 주세요. 게임 코드나 기존 테스트는 수정하지 마세요.

저장 후 앱의 파일 보기 또는 Finder/탐색기로 파일을 확인합니다. SKILL.md.txt가 되지 않도록 합니다. 보이지 않으면 폴더·계정 지원·앱 버전을 확인하고 새 대화를 시작합니다. 본문을 일반 요청에 붙여 사용했다면 실제 Skill 호출 성공과 구분합니다.

## 자동 테스트는 선택

게임은 index.html을 브라우저로 열면 실행됩니다. Node.js가 있으면 AI에게 기본·해당 미션 검사를 실행하도록 요청합니다. 없으면 설치하지 말고 미실행으로 보고하고 수동 절차를 제공합니다. [CLI·Node.js 설치 참고](SETUP.md)는 자동 검사를 더 해 보고 싶을 때 사용합니다.

공식 문서 확인: 2026-11-19. 메뉴 위치·이름은 앱 버전·계정에 따라 달라질 수 있습니다. 강사는 실제 로컬 프로젝트 접근·수정·실행을 사전에 확인합니다. 앱을 열 수 있다는 것만으로 모든 기능을 사용할 수 있다고 가정하지 않습니다.

## Superpowers 설치

각 앱의 37쪽에 설치 안내를 추가했습니다. [앱별 설치·확인 상세 안내](SUPERPOWERS-SETUP.md)를 참고하고, 설치 후 38쪽의 지뢰찾기 프롬프트를 사용하세요.
