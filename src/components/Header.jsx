import styled from "styled-components";
import "./Header.css";
import { MyButton } from "./uiButton/MyButton";

function Header({ openAndCloseModalHandler }) {
  return (
    <StyledHeader>
      <StyledImg className="logo" src="https://shorturl.at/TjVav" alt="logo" />
      <StyledNav className="nav">
        <StyledA href="#">Фильмы</StyledA>
        <StyledA href="#">Сериалы</StyledA>
        <StyledA href="#">Мультфильмы</StyledA>
        <StyledA href="#">Windows</StyledA>
        <StyledA href="#">Календарь</StyledA>
      </StyledNav>
      <div>
        <MyButton className="watch_movie">Смотреть 30 дней за 1с</MyButton>
      </div>
      <div>
        <MyButton className="logoBtn" onClick={openAndCloseModalHandler}>
          Добавить
        </MyButton>
      </div>
    </StyledHeader>
  );
}

export default Header;
const StyledImg = styled.img`
  width: 130px;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;
const StyledA = styled.a`
  color: white;
  font-weight: 900;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;
