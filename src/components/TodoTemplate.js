import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 70%;
  height: 768px;

  position: relative; /* 박스 하단 '추가 버튼'을 위함 */
  background: #fffbe7;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({children}){
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;