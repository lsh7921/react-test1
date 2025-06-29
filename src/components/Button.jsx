import React from "react";
import styled, { css } from "styled-components";

// 색상 테마 정의
const variants = {
  primary: css`
    background-color: #0d6efd;
    &:hover:enabled {
      background-color: #0b5ed7;
    }
  `,
  secondary: css`
    background-color: #6c757d;
    &:hover:enabled {
      background-color: #5c636a;
    }
  `,
  cancel: css`
    background-color: #dc3545;
    &:hover:enabled {
      background-color: #bb2d3b;
    }
  `,
};

// 사이즈 정의
const sizes = {
  LG: css`
    padding: 12px 24px;
    font-size: 1rem;
  `,
  MD: css`
    padding: 10px 20px;
    font-size: 0.875rem;
  `,
  SM: css`
    padding: 8px 16px;
    font-size: 0.75rem;
  `,
};
const icons = {
  plus: '+',
  minus: '-',
  check: '✓',
  close: '×',
};


// 버튼 그룹
export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

// 스피너
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

// 스타일드 버튼
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-width: 2.5em;

  ${(props) => sizes[props.$size || "MD"]}
  ${(props) => variants[props.$variant || "primary"]}

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 3px solid #80bdff;
    outline-offset: 2px;
  }

  ${(props) =>
    props.$loading &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;


// 버튼 컴포넌트
const Button = ({
  children,
  size = "MD",
  variant = "primary",
  iconType,
  disabled = false,
  loading = false,
  type = "button",
  ariaLabel,
  onClick,
}) => {
  const icon = icons[iconType];
  return (
    <StyledButton
      type={type}
      $size={size}
      $variant={variant}
      $loading={loading}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
      onClick={onClick}
    >
      {icon && <span style={{ marginRight: children ? 8 : 0 }}>{icon}</span>}
      {children}
      {loading && <Spinner aria-hidden="true" />}
    </StyledButton>
  );
};

export default Button;
