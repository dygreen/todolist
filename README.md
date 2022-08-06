# Todo list
: React에 익숙해지기 위해 블로그 글을 참고해 만들어본 할 일 관리 앱

> [ 기간: 2022.05.22 ~ 2022.06.02 ]
> 
***

***Architecture***
: 컴포넌트 구성
* App: 메인 페이지
* TodoTemplate: 전체적인 UI
* TodoHead: 접속한 날짜/요일, 할 일 몇개 남았는지 표시
* TodoList: 할 일 목록
* TodoCreate: 새로운 할 일 목록을 추가할 수 있는 부분(dispatch)
* TodoItem: 할 일 완료 체크, 할 일 삭제 기능을 하는 UI 구성
* TodoContext: Reducer를 통해 할 일 추가|완료|삭제 기능 관리 및 Context API 셋팅

***

***Info***
* 할 일 완료 체크박스
* 할 일 삭제 기능
* 남은 할일 표시 + 현재 날짜/요일 표시
* 새로운 할 일 추가 기능

<br>

* styled-components를 활용한 컴포넌트 스타일링
* TodoContext: `useReducer`(todoReducer 함수) + Context API를 활용한 편리한 상태 관리(`useContext` Hook) 
* `memo` 함수를 통해 컴포넌트의 불필요한 재렌더링 방지

***
### _👉 자세한 프로젝트 문제해결 과정 정리 (노션: https://prickle-turn-785.notion.site/To-Do-List-e6124a0e279b4a009d4cab2289100a52)_
