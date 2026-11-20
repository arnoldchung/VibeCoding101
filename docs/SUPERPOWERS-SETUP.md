# 앱에서 Superpowers 설치하기

40쪽의 따라 하기 안내입니다. 설치 후 기존 지뢰찾기 프롬프트는 **41쪽**에서 사용합니다. 이미 설치한 경우 중복 설치 대신 활성화와 사용 가능 여부를 확인하세요. 설치 중 권한·약관·조직 정책이 나오면 내용을 읽고 본인이 선택합니다.

## ChatGPT · Codex 앱

1. Codex 작업 화면의 왼쪽 **Plugins**를 엽니다.
2. 검색창에 **Superpowers**를 입력하거나 **Coding** 분류를 엽니다.
3. 원저자 **obra/superpowers**의 상세 설명을 확인합니다.
4. **＋ / Install**을 누르고 앱 안내를 따릅니다.
5. 설치·활성화 상태를 확인하고 실습 프로젝트에서 새 대화를 시작합니다.

[원저자 Codex 안내](https://github.com/obra/superpowers#codex-app) · [공식 Plugins 안내](https://learn.chatgpt.com/docs/plugins)

## Claude · Code 앱

1. **Code** 탭의 **Local** 세션에서 실습 폴더를 엽니다.
2. 입력창 옆 **＋** → **Add plugins**를 선택합니다. 메뉴가 Plugins라면 **Browse plugins**, 없으면 **Manage plugins**를 확인합니다.
3. Superpowers를 검색하고 공식 마켓의 저장소가 **obra/superpowers**인 항목을 설치합니다.
4. 설치·활성화 상태를 확인한 뒤 새 로컬 대화를 엽니다.

앱 버전에 따라 사이드바의 Customize / Plugins에서도 관리할 수 있습니다. 일반 Chat의 Skill ZIP 업로드와 혼동하지 않습니다.

[공식 Code 앱 안내](https://code.claude.com/docs/en/desktop#install-plugins) · [원저자 Claude 안내](https://github.com/obra/superpowers#claude-code)

## Google Antigravity 앱

1. 왼쪽 **Customizations** → **Marketplace**를 엽니다.
2. Superpowers를 찾아 저장소가 **obra/superpowers**인지 확인합니다. 목록에 있으면 **＋ / Add**로 설치합니다.
3. **Installed**에서 활성화 상태를 확인합니다.

마켓에 없는 경우를 대비해, 공식 문서가 지원하는 프로젝트 플러그인 폴더로 수동 설치할 수 있습니다. 원저자 README는 Antigravity CLI의 GitHub 설치 명령을 제시하지만, 이번 앱 중심 수업에서는 참가자가 터미널에 입력하는 방식을 필수로 두지 않습니다.

### 강사와 함께 확인할 수동 설치 대안

1. [원저자 저장소](https://github.com/obra/superpowers)에서 **Code → Download ZIP**을 선택하고 압축을 풉니다.
2. **복사하기 전에 숨김 항목을 표시합니다.** Mac Finder: **Command + Shift + .** / Windows 탐색기: **보기 → 표시 → 숨긴 항목**. `.antigravity-plugin`이 보이는지 확인합니다.
3. 실습 프로젝트의 **minesweeper** 폴더 안에 `.agents`, 그 안에 `plugins`, 그 안에 `superpowers` 폴더를 만듭니다. 익숙하지 않으면 앱에 폴더만 생성하도록 요청해도 됩니다.
4. 압축을 푼 **저장소 내용 전체**를 superpowers 폴더로 복사합니다. 최종 구조는 아래와 같아야 하며, ZIP 폴더가 한 겹 더 들어가지 않게 합니다.

```text
minesweeper/
  .agents/
    plugins/
      superpowers/
        .antigravity-plugin/
        skills/
        README.md
        ...
```

숨김 항목인 `.antigravity-plugin`도 반드시 함께 복사합니다. 폴더 안의 파일 이름과 내용을 원본과 비교합니다.

5. 프로젝트를 다시 열고 새 대화에서 플러그인의 설치·활성화 상태를 확인합니다. 실패하면 경로·메타데이터·지원 버전을 강사와 확인합니다. 파일을 복사한 것만으로 정상 로드됐다고 기록하지 않습니다.

[Antigravity 공식 플러그인 안내](https://antigravity.google/docs/plugins) · [원저자 Antigravity 안내](https://github.com/obra/superpowers#antigravity)

## 공통 설치 확인 요청

> 설치된 Superpowers의 brainstorming을 불러와 주세요. 지뢰찾기 개선 조건만 질문하고 아직 코드는 수정하지 마세요. 실제 사용한 Skill 이름과 읽은 지침을 알려 주세요.

설치 목록과 활성화 상태, 실제 지침 로딩을 함께 확인합니다. 이름만 답하거나 같은 내용의 일반 프롬프트를 실행한 것을 설치 확인으로 대신하지 않습니다. 메뉴·목록이 보이지 않으면 앱 업데이트와 계정·조직 정책을 확인하고, 수업에서는 강사 시연 또는 짝 활동으로 이어갑니다.

공식 문서 확인: 2026-11-19. 마켓 목록과 메뉴는 버전·계정에 따라 달라질 수 있습니다.
