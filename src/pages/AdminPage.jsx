import React, { useState } from "react";
import { Grid, Container } from "@mui/material";

import Header from "../components/UI/header/Header";
import Hero from "../components/UI/hero/Hero";
import Advantages from "../components/UI/advantages/Advantages";
import Buffet from "../components/UI/buffet/Buffet";
import heroImage from "../images/heroImage.svg";
import BuffetImg from "../images/BuffetImg.svg";
import Publics from "../components/UI/publics/Publics";
import Examples from "../components/UI/examples/Examples";
import Steps from "../components/UI/steps/Steps";
import FAQ from "../components/UI/faq/FAQ";
import CallToAction from "../components/UI/callToAction/CallToAction";
import Footer from "../components/UI/footer/Footer";
import LoginForm from "../components/UI/modals/LoginForm";

const AdminPage = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const questions = {
    "Разрешена ли реклама в историях?":
      "Да, разрешена. Главное, чтобы рекламные истории соответствовали правилам Вконтакте, поэтому мы проверяем все креативы вручную.",
    "Могу ли я монетизировать истории при ППВк?":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Влияет ли реклама в историях  на актив сообщества?":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Мои сообщества подойдут?":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Как происходит процесс монетизации сообщества?":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <Container>
      <Grid container rowSpacing={5}>
        <LoginForm
          isLoginFormOpen={isLoginFormOpen}
          setIsLoginFormOpen={setIsLoginFormOpen}
        />
        <Grid item xs={12}>
          <Header setIsLoginFormOpen={setIsLoginFormOpen} />
        </Grid>
        <Grid item xs={12}>
          <Hero
            title={[
              "Сервис для монетизации историй в ",
              <span className="orange">Ваших</span>,
              " сообществах",
            ]}
            content="Получайте дополнительный и пассивный доход с автоматических публикаций нативных историй"
            buttonText="Повысить доход"
            image={heroImage}
          />
        </Grid>
        <Grid item xs={12}>
          <Advantages />
        </Grid>
        <Grid item xs={12}>
          <Buffet
            quote="«Если ты не найдешь способ зарабатывать деньги, пока ты спишь, то ты будешь работать, пока не умрешь»"
            person="© Уоррен Баффет"
            image={BuffetImg}
          />
        </Grid>
        <Grid item xs={12}>
          <Publics
            title={[
              "Уже монетизируем",
              <span className="orange">более 1000</span>,
              "сообществ",
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <Examples />
        </Grid>

        <Grid item xs={12}>
          <Steps
            title="Всего несколько шагов до монетизации"
            steps={["Зарегистрируйтесь", "Подключите сообщества"]}
            buttonText="Начать зарабатывать"
          />
        </Grid>
        <Grid item xs={8} sx={{ m: "0 auto" }}>
          <FAQ questions={questions} />
        </Grid>
        <Grid item xs={7} sx={{ m: "0 auto" }}>
          <CallToAction />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPage;
