import { FaBars } from "react-icons/fa";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #f6f1e8;
  font-size: 1.45rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.35rem;

  a {
    color: #d9d3c8;
    font-size: 0.98rem;
  }

  a:hover {
    color: #fffaf3;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
