/* useReducer를 사용하여 상태관리하는 컴포넌트 */
import React, { useReducer, createContext, useContext, useRef } from 'react'; 

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

function todoReducer(state, action){
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo); /* concat(): 배열 뒤에 붙여 새로운 배열을 만듦 */
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo /* map 반복문을 돌려 추가한 일정의 id와 기존의 id가 같은지/아닌지 구분하고 추가하거나/기존 내용의 true/false만 변경하거나 함 */
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id); /* filter()를 이용해 기존 일정의 id와 추가한 일정의 id가 같지 않은 경우만 배열에 저장(=같은 경우는 삭제됨) */
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 2개의 Context를 만들어 state와 dispatch를 따로 따로 넣어줄 것(->dispatch만 필요한 컴포넌트에서 불필요한 렌더링 방지)
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5); /* = 새로운 항목을 추가할 때 사용할 고유 ID */

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
          </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// useContext를 사용하는 커스텀 Hook을 만들어서 내보내기
// * 커스텀 Hook들은 TodoProvider 컴포넌트 내부에 렌더링 되어 있어야 함(감싸져 있어야 함) => TodoProvider로 감싸져있지 않다면 에러를 발생시키도록 if문 작성(문제점 빨리 발견 가능)
export function useTodoState(){
  const context = useContext(TodoStateContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;

}

export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId(){
  const context = useContext(TodoNextIdContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}