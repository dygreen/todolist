# todolist
[React] to do list 앱 제작 프로젝트
> 리액트에 익숙해지기 위해 블로그 글을 참고해 만들어본 할 일 관리 앱
> 
> [2022.05.22 ~ 2022.]
> 
***

***Architecture***
: 컴포넌트 트리

***

***Info***
* 할 일 완료 체크박스
* 할 일 삭제 기능
* 남은 할일 표시 + 현재 날짜/요일 표시
* 새로운 할 일 추가 기능

***

* styled-components를 활용한 컴포넌트 스타일링
* TodoContext.js : `useReducer`(todoReducer 함수) + Context API를 활용한 편리한 상태 관리(`useContext` Hook) 
* `memo` 함수를 통해 컴포넌트의 불필요한 재렌더링 방지
