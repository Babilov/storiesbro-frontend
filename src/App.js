import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/App.css";
import "./styles/font.css";
import "./styles/form.css";
import "./styles/flex.css";
import cosmetic from "./authorizedUserImages/cosmetic.svg";
import thisUser from "./authorizedUserImages/thisUser.svg";
import pikchi from "./authorizedUserImages/pikchi.svg";
import guides from "./authorizedUserImages/guides.svg";
import storis1 from "./authorizedUserImages/storis1.png";
import storis2 from "./authorizedUserImages/storis2.png";
import storis3 from "./authorizedUserImages/storis3.png";
import { Context } from "./context/Context";
import AdminPage from "./pages/landingPages/AdminPage";
import CustomerPage from "./pages/landingPages/CustomerPage";
import Profile from "./pages/patterns/ProfilePattern";
import ProfileData from "./components/Profile/profileData/ProfileData";
import ProfileCash from "./components/Profile/profileCash/ProfileCash";
import ProfilePassword from "./components/Profile/profilePassword/ProfilePassword";
import ProfileAlerts from "./components/Profile/profileAlerts/ProfileAlerts";
import ProfileHistory from "./components/Profile/profileHistory/ProfileHistory";
import Deposit from "./pages/profilePages/Deposit";
import GetMoney from "./pages/profilePages/GetMoney";
import CashPattern from "./pages/patterns/CashPattern";
import ChangePassword from "./components/Profile/profilePassword/ChangePassword";
import LowComission from "./pages/profilePages/LowComission";
import AuthorizedUserPattern from "./pages/patterns/AuthorizedUserPattern";
import AuthorizedAdminPage from "./pages/authorizedUser/admin/authorizedAdminPage/AuthorizedAdminPage";
import Creatives from "./pages/authorizedUser/admin/creatives/Creatives";
import Statistic from "./components/authorizedAdmin/statistic/Statistic";
import AuthorizedAdminHelp from "./pages/authorizedUser/admin/authorizedAdminHelp/AuthorizedAdminHelp";
import { Grid } from "@mui/material";
import Referal from "./pages/authorizedUser/admin/referal/Referal";
import Support from "./pages/authorizedUser/admin/support/Support";
import PublicSettings from "./components/authorizedAdmin/publicSetting/PublicSettings";
import { PublicsContext } from "./context/PublicsContext";
import { CreativesContext } from "./context/CreativesContext";
import AuthorizedCustomerMain from "./components/authorizedCustomer/authorizedCustomerMain/AuthorizedCustomerMain";
import CreativesCustomer from "./components/authorizedCustomer/CreativesCustomer/CreativesCustomer";
import CreativeDetail from "./components/authorizedCustomer/CreativesCustomer/CreativeDetail";
import StorisStatistic from "./components/authorizedCustomer/authorizedCustomerMain/Statistic/StorisStatistic";
import AddCreative from "./components/authorizedCustomer/addCreative/AddCreative";
import SingleStori from "./components/authorizedCustomer/addCreative/uploadForms/SingleStori";
import DoubleStori from "./components/authorizedCustomer/addCreative/uploadForms/DoubleStori";
import DoubleStoriSecond from "./components/authorizedCustomer/addCreative/uploadForms/DoubleStorySecond";
import Repost from "./components/authorizedCustomer/addCreative/uploadForms/Repost";
import StickerLink from "./components/authorizedCustomer/addCreative/uploadForms/StickerLink";
import DoubleStickerLink from "./components/authorizedCustomer/addCreative/uploadForms/DoubleStickerLink";
import Reserve from "./components/authorizedCustomer/reserve/Reserve";
import ChooseCreative from "./components/authorizedCustomer/chooseCreative/ChooseCreative";
import Result from "./components/authorizedCustomer/result/Result";
import ReservationSuccess from "./components/authorizedCustomer/reserve/ReservationSuccess";
import NoMoney from "./components/authorizedCustomer/reserve/NoMoney";
import Publics from "./components/authorizedCustomer/publics/Publics";
import CustomerHelp from "./components/authorizedCustomer/customerHelp/CustomerHelp";
import HelpSteps from "./components/authorizedAdmin/helpSteps/HelpSteps";

function App() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  const [publics, setPublics] = useState([
    {
      id: 0,
      image: thisUser,
      title: "Этот пользователь",
      status: "На модерации",
      subscribers: "220.125",
    },
    {
      id: 1,
      image: pikchi,
      title: "Пикчи <33",
      status: "Активен",
      subscribers: "130.120",
    },
    {
      id: 2,
      image: guides,
      title: "Гайды",
      status: "Отклонён",
      subscribers: "120.000",
    },
    {
      id: 3,
      image: cosmetic,
      title: "Косметика",
      status: "Выключен",
      subscribers: "300.050",
    },
  ]);

  const [creatives, setCreatives] = useState([
    {
      id: 0,
      image: storis1,
      date: "03.07.2023",
      title: "Пранк-бот",
      status: "На модерации",
      link: "https://vk.com/write-117711644",
    },
    {
      id: 1,
      image: storis2,
      date: "02.07.2023",
      title: "Тг-канал",
      status: "Активен",
      link: "https://vk.com/write-117711644",
    },
    {
      id: 2,
      image: storis3,
      date: "01.07.2023",
      title: "Приложение",
      status: "Не прошел проверку",
      link: "https://vk.com/write-117711644",
    },
  ]);

  const [arhive, setArhive] = useState([
    {
      id: 3,
      image: storis1,
      date: "03.07.2023",
      title: "Пранк-бот",
      status: "В архиве",
      link: "https://vk.com/write-117711644",
    },

    {
      id: 4,
      image: storis3,
      date: "01.07.2023",
      title: "Приложение",
      status: "В архиве",
      link: "https://vk.com/write-117711644",
    },
  ]);

  return (
    <Context.Provider value={[isCustomer, setIsCustomer]}>
      <Routes>
        <Route
          path="/"
          element={
            isCustomer ? (
              <CustomerPage
                setIsLoginFormOpen={setIsLoginFormOpen}
                isLoginFormOpen={isLoginFormOpen}
                ismainpage={true}
              />
            ) : (
              <AdminPage
                setIsLoginFormOpen={setIsLoginFormOpen}
                isLoginFormOpen={isLoginFormOpen}
                ismainpage={true}
              />
            )
          }
        />

        <Route
          path="/profile"
          element={
            <Profile title="Настройка профиля">
              <ProfileData />
            </Profile>
          }
        />

        <Route
          path="/cash"
          element={
            <Profile title="Настройка профиля">
              <ProfileCash />
            </Profile>
          }
        />

        <Route
          path="/cash/deposit"
          element={
            <CashPattern isDeposit={true} title="Пополние">
              <Deposit />
            </CashPattern>
          }
        />

        <Route
          path="/cash/get-money"
          element={
            <CashPattern title="Вывод">
              <GetMoney />
            </CashPattern>
          }
        />

        <Route path="/cash/low-comission" element={<LowComission />} />

        <Route
          path="/password"
          element={
            <Profile title="Пароль">
              <ProfilePassword />
            </Profile>
          }
        />

        <Route
          path="/password/change-password"
          element={
            <Profile title="Новый пароль">
              <ChangePassword />
            </Profile>
          }
        />

        <Route
          path="/alerts"
          element={
            <Profile title="Настройка уведомлений">
              <ProfileAlerts />
            </Profile>
          }
        />

        <Route
          path="/history"
          element={
            <Profile title="История уведомлений">
              <ProfileHistory />
            </Profile>
          }
        />

        <Route
          path="/admin"
          element={
            <AuthorizedUserPattern ismainpage={true}>
              <AuthorizedAdminPage />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/publics"
          element={
            <PublicsContext.Provider value={[publics, setPublics]}>
              <AuthorizedUserPattern>
                <Grid item xs={12} lg={10}>
                  <Creatives />
                </Grid>
              </AuthorizedUserPattern>
            </PublicsContext.Provider>
          }
        />

        <Route
          path="/statistic"
          element={
            <PublicsContext.Provider value={[publics, setPublics]}>
              <AuthorizedUserPattern>
                <Grid item xs={12} lg={10}>
                  <Statistic />
                </Grid>
              </AuthorizedUserPattern>
            </PublicsContext.Provider>
          }
        />

        <Route path="/admin-help" element={<AuthorizedAdminHelp />} />

        <Route
          path="/referal"
          element={
            <AuthorizedUserPattern>
              <Referal />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/support"
          element={
            <AuthorizedUserPattern>
              <Support />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/publics/setting/:id"
          element={
            <PublicsContext.Provider value={[publics, setPublics]}>
              <PublicSettings />
            </PublicsContext.Provider>
          }
        />

        <Route
          path="/customer"
          element={
            <AuthorizedUserPattern isCustomer={true}>
              <AuthorizedAdminPage />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives"
          element={
            <AuthorizedUserPattern isCustomer={true}>
              <CreativesContext.Provider
                value={[creatives, setCreatives, arhive, setArhive]}
              >
                <CreativesCustomer />
              </CreativesContext.Provider>
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/:id"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <CreativesContext.Provider value={[creatives, setCreatives]}>
                <CreativeDetail />
              </CreativesContext.Provider>
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/statistic/:id"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <CreativesContext.Provider
                value={[creatives, setCreatives, arhive, setArhive]}
              >
                <StorisStatistic />
              </CreativesContext.Provider>
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/add-creative"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <AddCreative />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/add-creative/single"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <SingleStori />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/add-creative/double/1"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <DoubleStori />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/add-creative/double/2"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <DoubleStoriSecond />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/add-creative/repost"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <Repost />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/add-creative/sticker-link"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <StickerLink />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives/add-creative/double-sticker-link"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <DoubleStickerLink />
            </AuthorizedUserPattern>
          }
        />

        <Route path="/reservations" element={<Reserve />} />

        <Route
          path="/reservation/choose-creative"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <CreativesContext.Provider value={[creatives, setCreatives]}>
                <ChooseCreative />
              </CreativesContext.Provider>
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/reservation/result"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <Result />
            </AuthorizedUserPattern>
          }
        />
        <Route
          path="/reservation/success"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={true}>
              <ReservationSuccess />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/reservation/last-step"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={false}>
              <NoMoney />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/customer-publics"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={true}>
              <PublicsContext.Provider value={[publics, setPublics]}>
                <Publics />
              </PublicsContext.Provider>
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/customer-referal"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={true}>
              <Referal />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/customer-help"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={true}>
              <AuthorizedAdminPage />
            </AuthorizedUserPattern>
          }
        />
        <Route
          path="/customer-support"
          element={
            <AuthorizedUserPattern isCustomer={true} menu={true}>
              <Support />
            </AuthorizedUserPattern>
          }
        />
      </Routes>
    </Context.Provider>
  );
}

export default App;
