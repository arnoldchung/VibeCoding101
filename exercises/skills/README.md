# 나만의 SKILL.md 실습 · 95–110분

공통 프로젝트인 지뢰찾기에서 반복할 검사 절차를 **game-check** Skill로 만듭니다. 예제는 자동 설치되지 않습니다.

## 따라 하기 (15분)

1. **0–3분:** [game-check 예제](game-check/SKILL.md)의 이름·description·절차를 읽고 직접 작성합니다.
2. **3–6분:** 앱에서 열어 둔 실제 minesweeper 작업 폴더 안의 경로로 저장합니다.
   - ChatGPT · Codex 앱: `.agents/skills/game-check/SKILL.md` → 앱의 Skill 선택 또는 이름을 지정한 요청
   - Claude Code 앱: `.claude/skills/game-check/SKILL.md` → `/game-check`
   - Antigravity 앱: `.agents/skills/game-check/SKILL.md` → `/game-check` 또는 이름을 지정한 요청. [공식 Skills 안내](https://antigravity.google/docs/skills)를 참고합니다.
3. **6–10분:** 두 요청으로 사용합니다. A: “미션 1을 점검하고 예상값·실제값·미실행 검사를 구분해 주세요.” B: “게임 검사해 줘.” B에서는 범위를 먼저 확인하는지 봅니다.
4. **10–15분:** “첫 클릭을 모서리·중앙으로 바꾸는 수동 검사 절차도 제시한다.”를 추가하고 같은 요청으로 재검사합니다.

Skill은 코드를 임의로 수정하지 않고 검사·보고합니다. 브라우저 검사 도구가 없으면 참가자가 수동으로 확인합니다. 미구현 미션의 실패와 실제 오류를 구분합니다.

## 기록지

| 항목 | 내 기록 |
| --- | --- |
| 내가 정한 description과 추가 지침 | |
| 요청 A의 예상 / 실제 결과 | |
| 요청 B의 예상 / 실제 결과 | |
| 수정한 한 줄 | |
| 같은 요청의 재검사 결과 | |
| 직접 확인한 것 / 미실행 항목 | |

완료 기준: 파일 1개, 호출 결과 2건, 지침 수정 1건, 재검사 기록입니다. 본문을 일반 프롬프트에 붙여 넣었다면 Skill 설치·호출 성공과 구별해 기록합니다.

## 마지막 30분의 내 앱

[idea-to-spec 예제](idea-to-spec/SKILL.md)는 새 앱의 요구사항을 정리할 때 참고하는 선택 자료입니다. 새 my-app 폴더에서 시작하고, 지뢰찾기 전용 지침을 그대로 복사하지 않습니다. 필요할 때 내 용도에 맞는 Skill로 고칩니다.

[150분 수업 안내](../../docs/SESSION.md)
