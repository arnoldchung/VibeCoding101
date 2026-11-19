# GitHub와 버전 관리

## 무엇을 구별해야 하나요

| 용어 | 역할 |
| --- | --- |
| Git | 내 작업의 변경 이력을 관리하는 도구 |
| GitHub | Git 저장소를 원격에 보관하고 협업하는 서비스 |
| 저장소 | 파일과 변경 이력을 묶은 프로젝트 |
| Fork | GitHub에 만든 내 계정의 프로젝트 복사본 |
| Clone | 원격 저장소와 이력을 내 컴퓨터로 가져오기 |
| Commit | 확인한 변경을 메시지와 함께 이력에 기록하기 |
| Push / Pull | 내 커밋을 원격으로 보내기 / 원격 변경을 내 작업에 반영하기 |

파일 저장, 커밋, Push는 별개입니다. 저장만 하면 커밋이 없고, 로컬 커밋만 하면 GitHub에는 아직 반영되지 않습니다.

## 사전 준비

약 15–20분의 준비 시간을 권장합니다. 설치가 어려우면 아래 브라우저 경로로 참여할 수 있습니다.

1. [GitHub](https://github.com)에 로그인하고 계정의 이메일·인증 절차를 마칩니다.
2. [GitHub Desktop](https://desktop.github.com)을 설치하고 브라우저 인증으로 로그인합니다.
3. Mac은 Settings, Windows는 File > Options에서 작성자 이름과 이메일을 확인합니다.
4. [강사 저장소](https://github.com/arnoldchung/VibeCoding101)에서 Fork를 누릅니다. Owner는 본인 계정으로 선택합니다.
5. 본인 Fork의 URL을 Desktop의 File > Clone Repository > URL에 입력합니다.
6. Clone한 폴더에 README.md와 index.html이 있는지 확인합니다.

비밀번호·인증 코드·API 키는 프롬프트나 저장소에 넣지 않습니다. 공개 Fork에는 가상 자료와 수업 코드만 기록합니다.

## 첫 변경 기록

1. 본인 Fork의 main에서 `feature/workshop` 브랜치를 만듭니다.
2. README에 오늘의 목표 한 줄을 적고 저장합니다.
3. Desktop의 Changes에서 Diff를 읽고 필요한 파일만 선택합니다.
4. “수업 목표 기록”처럼 목적을 담은 메시지로 커밋합니다.
5. Publish branch 또는 Push origin을 누르고 본인 GitHub에서 확인합니다.

AI 도구가 편집하는 폴더와 Desktop의 저장소 폴더가 같은지 확인하세요. 클라우드 도구에서만 수정했다면 파일을 내려받아 작업 폴더에 반영해야 할 수 있습니다.

## 복구 연습

README 한 줄을 한 번 더 바꿔 커밋합니다. 미커밋 변경이 없는 상태에서 History의 방금 만든 최신 README 커밋을 선택하고 **Revert Changes in Commit**을 누릅니다. 문장 복구와 새 취소 커밋을 확인하고 Push합니다.

Revert는 선택한 커밋의 변경을 반대로 적용하며 원래 이력은 남습니다. 이후 수정과 충돌하면 강사와 확인합니다. 이번 연습에는 reset이나 force push가 필요 없습니다.

## 브랜치와 PR

브랜치는 기준 버전을 유지하며 실험하는 작업 경로입니다. PR은 변경을 검토하고 합치자는 요청이고, Merge가 실제 통합입니다.

본인 Fork에서 PR을 열 때 **base repository도 본인 Fork, base branch는 main**인지 확인합니다. 강사 원본은 기본 대상으로 선택될 수 있으므로 제출 전에 확인하세요. 강사 원본 제출은 별도로 요청받았을 때만 진행합니다.

## 설치가 어려운 경우

GitHub 웹에서 Fork하고 README를 편집해 Commit changes로 기록합니다. 이 경우 원격에 바로 저장되며 별도 로컬 Push 단계는 없습니다. 실습 코드를 실행하려면 본인 Fork의 Code > Download ZIP으로 내려받아 압축을 풉니다. 이후 웹에서 변경하면 ZIP도 다시 받아야 합니다.

## 공식 참고

- [GitHub Fork 안내](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)
- [커밋과 변경 비교](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)
- [Revert 안내](https://docs.github.com/en/desktop/managing-commits/reverting-a-commit-in-github-desktop)

[수업 개요로 돌아가기](../README.md)
