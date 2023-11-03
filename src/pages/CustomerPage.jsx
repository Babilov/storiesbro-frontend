import React from "react";
import { Grid, Container } from "@mui/material";

import Header from "../components/UI/header/Header";
import Hero from "../components/UI/hero/Hero";
import Advantages from "../components/UI/advantages/Advantages";
import Quotation from "../components/landing/quotation/Quotation";
import heroImage from "../images/heroImage.svg";
import BuffetImg from "../images/BuffetImg.svg";
import Publics from "../components/landing/publics/Publics";
import Examples from "../components/UI/examples/Examples";
import Steps from "../components/UI/steps/Steps";
import FAQ from "../components/landing/faq/FAQ";
import CallToAction from "../components/UI/callToAction/CallToAction";
import Footer from "../components/landing/footer/Footer";
import LoginForm from "../components/UI/modals/LoginForm";

import bot from "../images/adminAdvantages/bot.svg";
import cashBag from "../images/adminAdvantages/cashBag.svg";
import helpDesk from "../images/adminAdvantages/helpDesk.svg";
import hours from "../images/adminAdvantages/hours.svg";
import smartphone from "../images/adminAdvantages/smartphone.svg";
import speeding from "../images/adminAdvantages/speeding.svg";
import stats from "../images/adminAdvantages/stats.svg";
import steeringWheel from "../images/adminAdvantages/steeringWheel.svg";

const images = {};
images[smartphone] =
  "Все креативы проверяются вручную на соответствие правилам Вконтакте";
images[stats] = "Прозрачная статистика и доходы";
images[steeringWheel] = "Простое управление";
images[speeding] = "Гибкая и оперативная система выплат";
images[cashBag] = "Хорошие условия по реферальной программе";
images[helpDesk] = "Отзывчивая тех. поддержка 24/7";
images[bot] = "Автоматическая публикация историй";
images[hours] = "Постоянная монетизация сообществ";

const AdminPage = ({ isLoginFormOpen, setIsLoginFormOpen }) => {
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
      <Grid container rowSpacing={2}>
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
          <Advantages images={images} />
        </Grid>

        <Grid item xs={12}>
          <Quotation
            quote="«Если ты не найдешь способ зарабатывать деньги, пока ты спишь, то ты будешь работать, пока не умрешь»"
            person="© Уоррен Баффет"
            image={BuffetImg}
          />
        </Grid>

        <Grid item xs={12}>
          <Publics />
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

        <Grid item xs={12} md={8} sx={{ m: "0 auto" }}>
          <FAQ questions={questions} />
        </Grid>

        <Grid item xs={11} md={9} sx={{ m: "0 auto" }}>
          <CallToAction background="#FBECE0" />
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPage;
