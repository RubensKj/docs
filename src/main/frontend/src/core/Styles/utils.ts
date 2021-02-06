import styled from 'styled-components';

export const Linking = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-weight: 500;
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

  cursor: pointer;

  color: inherit;
  text-decoration: none;
`;

export const Span = styled.span`
  font-weight: 500;
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 12px;

  border: 1px solid var(--border-header-color);
  border-radius: 4px;

  background: #fafafa;

  width: 100%;

  color: rgba(107,114,128,var(--text-opacity));
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;