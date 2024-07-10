import styled from "styled-components";
import "./Main.css";
import { MyButton } from "./uiButton/MyButton";

export function Main({ movie, deleteMovieHandler, openAndCloseModalHandler }) {
  return (
    <StyledMain>
      <h2>АКЫРКЫ ЧЫККАН ТАСМАЛАР</h2>
      <StyledMoviesContainer>
        {movie.map((item) => (
          <StyledMovieBlock className="movie-block" key={item.movieId}>
            <StyledMovieImg src={item.movieImage} alt="Чон кыз" />
            <StyledWrapperInfo>
              <div>
                <StyledMovieTitle>{item.movieTitle}</StyledMovieTitle>
                <StyledMovieStatus>{item.movieStatus}</StyledMovieStatus>
              </div>
              <StyledWrapperBtn className="wrapperBtn">
                <MyButton
                  className="buyBtn"
                  onClick={() => deleteMovieHandler(item.movieId)}
                >
                  Удалить
                </MyButton>
                <MyButton
                  className="buyBtn"
                  onClick={() => openAndCloseModalHandler(item)}
                >
                  Изменить
                </MyButton>
              </StyledWrapperBtn>
            </StyledWrapperInfo>
          </StyledMovieBlock>
        ))}
      </StyledMoviesContainer>
    </StyledMain>
  );
}

export default Main;
const StyledMain = styled.main`
  padding: 30px;
`;
const StyledMoviesContainer = styled.section`
  margin-top: 30px;
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledWrapperInfo = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const StyledMovieBlock = styled.div`
  border: 1px solid white;
  padding: 10px 20px 6px 20px;
  border-radius: 10px;
  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;
const StyledMovieImg = styled.img`
  width: 250px;
`;
const StyledMovieTitle = styled.h4`
  font-size: larger;
`;
const StyledMovieStatus = styled.p`
  color: green;
  font-weight: 500;
`;
const StyledWrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
