import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <section className="footer_block">
        <h2>О нас</h2>
        <p>О компании</p>
        <p>Контакты</p>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
      </section>
      <section className="footer_block">
        <h2>Помощь</h2>
        <p>F.A.Q.</p>
        <p>Сообщить об ошибке</p>
      </section>
      <section className="footer_block">
        <h2>Социальные сети</h2>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Telegram</p>
      </section>
      <StyledBlock>
        <h2>Скачать приложение</h2>
        <StyledAplications>
          <StyledImg src="https://shorturl.at/ZIHmH" alt="" />
          <StyledImg
            src="https://etnomedia.tv/assets/svgs/appstore.svg"
            alt=""
          />
          <StyledImg
            src="https://etnomedia.tv/assets/svgs/microsoft-store.svg"
            alt=""
          />
        </StyledAplications>
      </StyledBlock>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  background-color: black;
  padding: 30px;
  justify-content: space-around;
`;
const StyledAplications = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledImg = styled.img`
  width: 150px;
`;
