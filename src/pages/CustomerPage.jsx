import { Box, Container, Grid } from "@mui/material";
import Header from "../components/UI/header/Header";
import Hero from "../components/UI/hero/Hero";
import Examples from "../components/UI/examples/Examples";

import hero2 from "../images/hero2.svg";
import Ford from "../images/Ford.svg";
import robot from "../images/customerAdvantages/robot.svg";
import stats from "../images/customerAdvantages/stats.svg";
import wheel from "../images/customerAdvantages/wheel.svg";
import help from "../images/customerAdvantages/help.svg";
import cashBag from "../images/customerAdvantages/cashBag.svg";
import helpDesk from "../images/customerAdvantages/helpDesk.svg";
import phone from "../images/customerAdvantages/phone.svg";
import check from "../images/customerAdvantages/check.svg";
import Advantages from "../components/UI/advantages/Advantages";
import Steps from "../components/UI/steps/Steps";
import FAQ from "../components/UI/faq/FAQ";
import CallToAction from "../components/UI/callToAction/CallToAction";
import Footer from "../components/UI/footer/Footer";
import LoginForm from "../components/UI/modals/LoginForm";
import Quotation from "../components/UI/quotation/Quotation";
import Publics from "../components/UI/publics/Publics";

const CustomerPage = ({ isLoginFormOpen, setIsLoginFormOpen }) => {
  const images = {};
  images[robot] = "Автоматическая публикация историй";
  images[stats] = "Прозрачная и подробная статистика";
  images[wheel] = "Простое управление";
  images[help] = "Помощь с рекламными креативами";
  images[cashBag] = "Хорошие условия по реферальной программе";
  images[helpDesk] = "Отзывчивая тех. поддержка 24/7";
  images[phone] =
    "Оплата по cpm. Сколько набрало просмотров - столько и оплата";
  images[check] = "Сотрудничаем только с активными сообществами";

  const questions = {
    "Мой проект можно продвигать у Вас?":
      "Да, можно. Необходимо соблюдать определенные правила и рекомендации, чтобы не нарушить политику платформы и обеспечить успешное продвижение вашего проекта.",
    "Как происходит процесс публикации рекламной истории?":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Как можно проверить эффективность креатива?":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Где рекламируется проект?":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  return (
    <Box sx={{ background: "#161616", color: "white" }}>
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
                "Сервис для нативной рекламы",
                <span className="orange"> Ваших </span>,
                "проектов в историях Вконтакте",
              ]}
              content="Продвигайте тг-каналы, ботов, приложения, сообщества
и другие проекты в 7 раз эффективнее"
              buttonText="Начать продвижение"
              image={hero2}
            />
          </Grid>

          <Grid item xs={12}>
            <Advantages images={images} />
          </Grid>

          <Grid item xs={12}>
            <Quotation
              quote="« Я не знаю какой результат принесёт мне реклама, но даже если я заработаю доллар — я вложу его в рекламу»"
              person="© Генри Форд"
              image={Ford}
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
              title="Всего несколько шагов до трафика"
              steps={[
                "Зарегистрируйтесь",
                "Загрузите рекламный креатив",
                "Пополните баланс",
              ]}
              buttonText="Стать заказчиком"
            />
          </Grid>

          <Grid item xs={12} md={8} sx={{ m: "0 auto" }}>
            <FAQ questions={questions} background="#161616" color="white" />
          </Grid>

          <Grid item xs={11} md={7} sx={{ m: "0 auto" }}>
            <CallToAction background="#E37E31" />
          </Grid>

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomerPage;
