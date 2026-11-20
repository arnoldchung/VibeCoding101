> **선택 참고 · 이전 CLI 안내입니다. 현재 수업은 [세 앱 준비 안내](APP-SETUP.md)와 앱별 슬라이드를 사용합니다. CLI 설치는 필수가 아닙니다.**

# 설치부터 첫 실행까지

기본 경로는 **VS Code + Node.js LTS + Codex CLI**입니다. 이 문서는 수업 중 10–35분에 함께 따라 합니다. 코드 편집·프로그램 실행·AI 요청을 서로 구별해 봅니다.

## 1. 준비물

노트북, 충전기, 인터넷, 웹 브라우저, 사용할 AI 계정, 프로그램 설치 권한을 준비합니다. Codex 이용이 가능한 ChatGPT 계정인지 확인하세요. 로그인 방식에 따라 구독 이용 또는 API 사용량 과금이 적용됩니다. 수업은 브라우저 계정 로그인 경로를 사용합니다. GitHub 계정과 Desktop은 마지막 기록 실습을 위한 선택 사항입니다.

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

## 6. Codex CLI 설치와 로그인

```text
npm install -g @openai/codex
codex --version
codex
```

한 줄씩 입력합니다. Sign in with ChatGPT를 선택하고 브라우저에서 로그인한 뒤 터미널로 돌아옵니다. 작업 폴더를 확인한 다음 요청합니다.

> 이 프로젝트를 설명해 주세요. 현재 작업 경로와 네 TODO 함수 이름을 알려 주세요. 아직 파일은 수정하지 마세요.

Windows에서 npm.ps1 실행 오류가 나면 `npm.cmd`, `codex.cmd`로 실행해 봅니다. 명령을 찾지 못하면 새 터미널을 열고 설치 상태를 확인하세요. 권한·기관 제한은 강사와 확인하며 시스템 보안 설정을 임의로 바꾸지 않습니다.

[Codex CLI](https://learn.chatgpt.com/docs/cli) · [로그인](https://learn.chatgpt.com/docs/auth?surface=cli) · [Windows npm 설치](https://learn.chatgpt.com/docs/enterprise/windows-deployment)

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

## 대체 도구

- **Claude Code:** [공식 빠른 시작](https://code.claude.com/docs/en/quickstart)의 Mac·Windows 명령을 따릅니다. 설치 후 `claude --version`, 프로젝트에서 `claude`를 실행하고 로그인합니다.
- **Gemini CLI:** Node.js 설치 후 `npm install -g @google/gemini-cli`, `gemini`를 실행합니다. [로그인 안내](https://geminicli.com/docs/get-started/authentication/)에 따라 Sign in with Google을 선택합니다. [설치](https://geminicli.com/docs/get-started/installation/)와 [Agent Skills](https://geminicli.com/docs/cli/skills/)도 확인합니다. 개인 계정 무료 이용 경로도 있으므로 유료 구독을 일괄 필수로 안내하지 않습니다.

Skill의 경로·호출 방식은 도구마다 다릅니다. 기본 경로를 따라가는 참가자는 다른 CLI를 추가로 설치하지 않습니다.

## 완료 확인

- [ ] VS Code에서 실습 폴더가 열렸다.
- [ ] node·npm·선택한 CLI의 버전을 확인했다.
- [ ] AI 로그인 후 프로젝트 설명을 받았다.
- [ ] 브라우저에서 보드와 입력을 확인했다.

5분 이상 막히면 단계와 오류 메시지를 기록하고 짝과 한 컴퓨터로 진행합니다. 수업 뒤 해결할 항목을 남깁니다.

공식 문서 확인: 2026-11-19. 설치 화면과 지원 범위는 사용 중인 버전에 따라 달라질 수 있습니다.
