import styled from "styled-components";

export const Head = styled.header`
  height: 80px;
  padding: 10px;
  a {
    padding: 6px 12px;
    transition: 0.2s;
    border-radius: 3px;
  }
  a:hover {
    background: rgba(20, 23, 28, 0.05);
  }
`;

export const RedDot = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ec5252;
  position: absolute;
  top: -6px;
  right: -10px;
  color: white;
  font-size: 10px;
  font-weight: bold;
`;
