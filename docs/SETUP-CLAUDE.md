# Claude Code 버전 · 설치부터 첫 실행까지

[전용 세션 슬라이드](https://arnoldchung.github.io/VibeCoding101/session-claude.html)와 함께 사용합니다. 설치→지뢰찾기 공통 제작→Skills→내 앱 제작의 150분 흐름입니다.

기본 경로는 **VS Code + Node.js LTS + Claude Code**입니다. 이 문서는 수업 중 10–35분에 함께 따라 합니다. 코드 편집·프로그램 실행·AI 요청을 서로 구별해 봅니다.

## 1. 준비물

노트북, 충전기, 인터넷, 웹 브라우저, 사용할 AI 계정, 프로그램 설치 권한을 준비합니다. Claude Code 이용이 포함된 계정으로 로그인합니다. 구독 로그인과 Console/API 이용은 과금 경로가 다릅니다. GitHub 계정과 Desktop은 마지막 기록 실습을 위한 선택 사항입니다.

## 2. VS Code 설치

[공식 다운로드](https://code.visualstudio.com/download)에서 운영체제에 맞게 설치합니다. Mac은 앱을 Applications로 이동하고, Windows는 설치 파일의 안내를 따릅니다. 실행 창이 열리면 완료입니다.

## 3. 스타터 내려받기

[수업 저장소](https://github.com/arnoldchung/VibeCoding101)의 Code → Download ZIP을 선택합니다. 압축을 풀고 찾기 쉬운 위치로 옮깁니다. VS Code의 File → Open Folder에서 압축을 푼 폴더 안의 **exercises/minesweeper**를 엽니다. index.html, src, tests, AGENTS.md가 보여야 합니다.

본인 Fork를 Clone했다면 그 복사본의 같은 실습 폴더를 사용해도 됩니다. 공개 온라인 게임 화면을 여는 것과 내 파일을 수정하는 것은 별개입니다.

## 4. 터미널 열기

VS Code의 Terminal → New Terminal을 선택합니다. Mac은 zsh/Bash, Windows는 PowerShell 기준입니다. `pwd`로 현재 폴더를 보고, Mac은 `ls`, Windows는 `dir`로 목록을 확인합니다. minesweeper 폴더여야 합니다. `$`나 `PS` 같은 프롬프트 표시는 입력하지 않습니다.

## 5. Node.js 설치

[Node.js 공식 다운로드](https://nodejs.org/en/download)에서 현재 LTS의 운영체제용 설치 파일을 선택합니다. 설치 후 VS Code를 다시 열고 새 터미널에서 실행합니다.

```text
node --version
npm --version
```

두 버전 번호가 출력되면 완료입니다. Node.js는 CLI와 테스트에 사용하며, 게임 화면은 브라우저에서 직접 실행할 수 있습니다.

## 6. Claude Code 설치와 로그인

Mac 터미널:

```sh
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell:

```powershell
irm https://claude.ai/install.ps1 | iex
```

자신의 OS 명령 하나만 실행합니다. 새 터미널에서 `claude --version`으로 확인하고, minesweeper 폴더에서 `claude`를 실행합니다. 브라우저에서 계정 로그인을 완료한 뒤 터미널로 돌아옵니다. 이 네이티브 설치에는 Node.js가 필요하지 않지만 수업 테스트에 Node.js를 사용합니다.

> AGENTS.md와 CLAUDE.md를 읽고 현재 경로와 네 TODO 함수를 설명해 주세요. 아직 수정하지 마세요.

설치 오류는 새 터미널·OS별 명령·PATH를 확인합니다. [공식 빠른 시작](https://code.claude.com/docs/en/quickstart)에 따라 해결하고 5분 넘게 막히면 짝과 진행합니다.

## 7. 게임 실행

Finder / 파일 탐색기에서 작업 중인 `exercises/minesweeper/index.html`을 브라우저로 엽니다. 칸 클릭·깃발·다시 시작을 확인합니다. 초기에는 지뢰가 없고 한 칸씩만 열리는 미완성 스타터입니다. 코드를 저장하면 같은 화면을 새로고침하고 새 게임을 시작하세요.

## 8. 검사 명령

VS Code에서 새 터미널을 열고 현재 경로가 exercises/minesweeper인지 확인합니다.

```text
npm test
node --test --test-name-pattern="미션 1" tests/missions.test.cjs
npm run test:missions
```

순서대로 기본 검사, 미션 1 검사, 전체 미션 검사입니다. 처음에는 과제 검사가 실패하는 것이 정상입니다. 구현한 미션과 미완성 미션을 구분하세요. 기본 검사 통과만으로 게임 완성을 판단하지 않습니다.

## Skill 사용과 직접 만들기

기존 Skill은 `/minesweeper-workshop`으로 호출합니다. 직접 만든 파일은 minesweeper 기준 `.claude/skills/game-check/SKILL.md`에 저장하고 `/game-check`로 사용합니다. 경로·파일명이 맞는지 확인하고 필요한 경우 새 세션을 엽니다.

Plan은 조사·계획, acceptEdits는 범위 안 편집 자동 승인, auto는 분류기 기반 승인입니다. 실제 모드 지원은 환경에서 확인합니다.

[Skills](https://code.claude.com/docs/en/skills) · [모드](https://code.claude.com/docs/en/permission-modes)

## 완료 확인

- [ ] VS Code에서 실습 폴더가 열렸다.
- [ ] node·npm·선택한 CLI의 버전을 확인했다.
- [ ] AI 로그인 후 프로젝트 설명을 받았다.
- [ ] 브라우저에서 보드와 입력을 확인했다.

5분 이상 막히면 단계와 오류 메시지를 기록하고 짝과 한 컴퓨터로 진행합니다. 수업 뒤 해결할 항목을 남깁니다.

공식 문서 확인: 2026-11-19. 설치 화면과 지원 범위는 사용 중인 버전에 따라 달라질 수 있습니다.

## 마지막 30분

VS Code 새 창에서 별도의 my-app 폴더를 열고 새 터미널에서 `claude`를 실행합니다. 지뢰찾기 전용 지침을 그대로 가져가지 않습니다. 한 화면·핵심 기능 하나를 구현하고 직접 확인합니다.
