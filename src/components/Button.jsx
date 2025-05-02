import React from "react";
import styled, { css } from "styled-components";

// 사이즈별 스타일 정의
const sizes = {
  LG: css`
    padding: 12px 24px;
    font-size: 1rem;
  `,
  MD: css`
    padding: 10px 20px;
    font-size: 0.7rem;
  `,
  SM: css`
    padding: 8px 16px;
    font-size: 0.5rem;
  `,
};

// 스타일드 컴포넌트
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: white;
  transition: background-color 0.3s;
  ${(props) => sizes[props.size || "MD"]};

  &:hover:enabled {
    background-color: #0056b3;
  }

  &:focus-visible {
    outline: 3px solid #80bdff;
    outline-offset: 2px;
  }

  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;

// 로딩 스피너 대체 텍스트
const Spinner = styled.span`
  margin-left: 8px;
  width: 1em;
  height: 1em;
  border: 2px solid white;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// 버튼 컴포넌트
const Button = ({
  children,
  size = "MD",
  disabled = false,
  loading = false,
  type = "button",
  ariaLabel,
  onClick,
  iconLeft,
  iconRight,
}) => {
  return (
    <StyledButton
      type={type}
      size={size}
      disabled={disabled || loading}
      loading={loading}
      aria-label={ariaLabel}
      aria-busy={loading}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      {iconLeft && <span style={{ marginRight: 8 }}>{iconLeft}</span>}
      {children}
      {loading && <Spinner aria-hidden="true" />}
      {iconRight && <span style={{ marginLeft: 8 }}>{iconRight}</span>}
    </StyledButton>
  );
};

export default Button;
