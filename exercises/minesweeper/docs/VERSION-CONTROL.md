# Fork에서 내 결과물까지

## Fork와 Clone

강사: `arnoldchung/VibeCoding101` → Fork → 참가자: `내계정/VibeCoding101` → Clone → 내 컴퓨터 폴더.

Fork는 GitHub에 본인 복사본을 만드는 일, Clone은 그 복사본과 이력을 내 컴퓨터로 가져오는 일입니다. [GitHub Fork 공식 안내](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)

## 첫 변경 기록

1. Desktop의 저장소 소유자가 본인인지 확인합니다.
2. `feature/minesweeper` 브랜치를 만듭니다.
3. README의 실습 기록에 이름 대신 별명이나 이니셜과 오늘의 목표를 적습니다.
4. 파일 저장 → Changes의 Diff 확인 → 메시지 작성 → Commit.
5. Publish branch 또는 Push origin을 누르고 본인 GitHub에서 확인합니다.

파일 저장은 Git 이력이 아닙니다. 로컬 커밋은 자동으로 원격에 올라가지 않습니다.

## 미션마다 한 커밋

미션 1 구현 → 개수와 첫 클릭 확인 → 커밋 → Push. 다음 미션도 같은 순서로 진행합니다. 테스트가 아직 실패하면 어떤 항목이 미완성인지 README에 남깁니다. 완성하지 않은 상태를 성공했다고 쓰지 않습니다.

## PR의 대상 확인

Fork에서 PR을 열면 강사 원본이 기본 대상으로 선택될 수 있습니다. **수업의 일반 PR 연습은 본인 Fork의 main을 base로 선택**하세요.

- base repository: `내계정/VibeCoding101`, base branch: `main`
- head repository: `내계정/VibeCoding101`, compare branch: `feature/minesweeper`

Files changed에서 Diff를 읽고 실제 테스트 결과를 적습니다. 강사 원본으로 제출하는 PR은 별도로 요청받았을 때만 만드세요. 본인 PR을 Merge한 뒤 Desktop에서 main으로 돌아와 Fetch/Pull합니다.

## 안전한 되돌리기 연습

핵심 구현 대신 README 한 줄을 바꿔 커밋·Push합니다. 미커밋 작업이 없는 상태에서 Desktop의 History에서 **바로 그 최신 README 커밋**을 선택하고 `Revert Changes in Commit`을 누릅니다. README가 복구되었는지 확인하고 새 취소 커밋을 Push합니다. 원래 커밋도 이력에 남습니다.

선택한 커밋의 변경을 취소하는 동작이며 과거 전체 상태로 무조건 돌아가는 것은 아닙니다. 충돌이 뜨면 진행을 멈추고 강사와 확인하세요. 이번 실습에는 reset이나 force push가 필요 없습니다.

[커밋과 변경 비교 공식 안내](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop) · [Revert 공식 안내](https://docs.github.com/en/desktop/managing-commits/reverting-a-commit-in-github-desktop)
