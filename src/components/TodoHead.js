import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #999;
  h1{
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day{
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left{
    color: #f55353;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead(){
  return (
    <TodoHeadBlock>
      <h1>2022년 5월 22일</h1>
      <div className="day">일요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;