import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const Scroll = styled.div`
  max-height: 260px;
  overflow-y: auto;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 240px;
  left: calc(50% - 120px);
  top: calc(100% + 10px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;

  &::before {
    position: absolute;
    width: 0px;
    height: 0px;
    line-height: 0;
    top: -20px;
    left: 50%;
    margin-left: -10px;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.6);
    content: '';
  }
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: #7150c1;
    filter: brightness(200%);
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        background: #ff892e;
        top: 0;
        right: 0;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        margin-left: 5px;
      }
    `}
`;
