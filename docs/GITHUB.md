# 개발하면서 저장하고 되돌리기

GitHub 준비는 **개발 전, 세 앱 버전의 11–13쪽**에서 진행합니다. 이후 각 미션을 확인할 때마다 커밋합니다. 110–120분에는 기록 확인과 복구 연습을 합니다.

## 수업 전 준비

[GitHub](https://github.com/) 계정을 만들고 로그인합니다. [GitHub Desktop](https://desktop.github.com/)을 설치해 같은 계정으로 로그인합니다. Desktop의 Settings(Mac) / File → Options(Windows)에서 커밋 작성자 이름과 이메일을 확인합니다. 수업에서는 계정 연결과 작업 폴더를 함께 확인합니다.

## 내 복사본과 작업 폴더

1. [수업 저장소](https://github.com/arnoldchung/VibeCoding101)에서 **Fork → Owner: 내 계정 → Create fork**를 선택합니다.
2. 내 Fork의 Code 메뉴에서 HTTPS 주소를 복사합니다. 주소의 소유자가 내 계정인지 확인합니다.
3. Desktop에서 **File → Clone Repository → URL**에 주소를 붙여 넣습니다. **Local Path**는 찾기 쉬운 위치로 정하고 Clone합니다.
4. **Repository → Show in Finder / Explorer**로 그 폴더를 엽니다. 이 저장소의 `main`에서 수업을 진행합니다.
5. AI 앱에서는 그 안의 **exercises/minesweeper**를 엽니다. 브라우저에서도 같은 위치의 `index.html`을 엽니다.

Fork는 GitHub에 만든 내 복사본, Clone은 파일과 이력을 내 컴퓨터로 내려받는 작업입니다. Desktop은 저장소 전체, AI 앱은 그 안의 실습 폴더를 엽니다. 강사 원본에 Push하지 않습니다.

## 기능 하나마다 저장 지점 만들기

**파일 저장 → 브라우저 검사 → 변경 비교 → Commit → Push**를 반복합니다.

1. AI 앱에서 파일이 저장됐는지 확인하고, 브라우저를 새로고침해 새 게임을 시작합니다. 예상한 동작과 실제 결과를 비교합니다.
2. Desktop의 **Changes**에서 수정 파일과 변경 비교(Diff)를 확인합니다. 이번 작업에 해당하는 파일만 선택합니다.
3. Summary에 변경 내용을 쓰고 **Commit to main**을 누릅니다. 예: `첫 클릭을 보호하는 지뢰 배치`.
4. **Push origin**으로 내 Fork에 올립니다. History에서 커밋이 생겼는지 확인합니다.
5. 다음 기능을 요청하기 전에 이 과정을 반복합니다. 미완성 작업을 보관할 때는 `미션 2 구현 중`처럼 상태를 메시지에 적습니다.

파일 저장은 작업 파일에 반영하는 것, Commit은 내 컴퓨터의 이력에 기록하는 것, Push는 커밋을 GitHub로 보내는 것입니다. AI가 파일을 수정했다고 해서 자동으로 커밋·Push되는 것은 아닙니다. 받은 코드의 기존 이력은 첫 기준점으로 남아 있습니다.

## 최신 내 커밋 하나를 되돌리기

1. 진행 중인 AI 작업을 멈추고 Desktop의 **Changes**를 확인합니다. 미커밋 변경이 있으면 내용을 확인해 `복구 전 임시 저장`으로 먼저 커밋합니다.
2. **History**에서 취소할 **가장 최근에 내가 만든 커밋**을 우클릭합니다.
3. **Revert Changes in Commit**을 선택합니다.
4. 취소 커밋이 새로 생기고 파일이 돌아왔는지 확인합니다. 브라우저를 새로고침하고 다시 실행한 뒤 **Push origin**을 누릅니다.

Revert는 선택한 커밋의 변경을 반대로 적용하며 원래 커밋과 이력은 남깁니다. 임의의 옛 시점으로 한 번에 이동하는 기능은 아닙니다. 여러 커밋을 취소하려면 최신 것부터 차례로 적용합니다. 충돌이 나타나면 강사와 확인합니다. 수업에서는 Reset·강제 Push·이력 삭제를 사용하지 않습니다.

## 110–120분 복구 연습

게임 코드 대신 README 문장 한 줄로 연습합니다. 먼저 다른 변경을 커밋해 Changes를 비웁니다.

1. AI에게 “실습 폴더의 README.md 맨 아래에 ‘복구 연습용 문장입니다.’를 한 줄 추가하고 다른 파일은 수정하지 마세요.”라고 요청합니다.
2. Desktop에서 README.md만 바뀌었는지 확인하고 `복구 연습`으로 커밋합니다.
3. History에서 **방금 만든 연습 커밋**을 Revert합니다.
4. 추가 문장이 사라지고 취소 커밋이 생겼는지 확인한 뒤 Push합니다.

## 마지막 30분에도 같은 저장소 사용하기

Clone한 저장소 안에 `my-app` 폴더를 만들고 AI 앱에서 이 폴더를 새 프로젝트로 엽니다. 지뢰찾기 파일은 건드리지 않습니다. 새 앱의 핵심 기능을 확인한 뒤 Desktop에서 해당 파일을 Commit·Push합니다.

## 설치가 어려운 경우

짝과 함께 Clone 경로로 참여할 수 있습니다. ZIP 다운로드는 파일 실행용 대안이며, **ZIP 폴더 자체에는 Git 이력이 없으므로 Commit·Revert할 수 없습니다.** ZIP 수정본을 나중에 내 Clone으로 옮길 때는 같은 상대 경로에 복사하고 AI 앱과 브라우저도 Clone 위치로 다시 엽니다.

GitHub 웹에서 직접 파일을 편집하거나 업로드해 Commit changes를 누르면 원격에 바로 기록됩니다. 내 컴퓨터의 파일은 자동 갱신되지 않습니다. 이 방법을 로컬 저장·복구와 혼동하지 않습니다.

## 수업 후 선택 학습

브랜치는 기준 버전을 유지하면서 실험하는 별도 작업 경로입니다. PR은 변경을 검토하고 합치자는 요청이고 Merge는 실제 통합입니다. 본인 Fork에서 PR을 만들 때 base repository와 base branch가 내 Fork의 main인지 확인합니다. 강사 원본으로 제출하는 활동은 별도 안내가 있을 때 진행합니다.

## 공식 참고

- [Fork·Clone](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
- [커밋과 변경 비교](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)
- [Revert](https://docs.github.com/en/desktop/managing-commits/reverting-a-commit-in-github-desktop)

[수업 개요](../README.md) · [앱별 준비](APP-SETUP.md)
