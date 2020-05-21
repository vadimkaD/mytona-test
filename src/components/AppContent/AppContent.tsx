import React, { FunctionComponent } from "react";
import { ContentWrap, FullHeightLayout } from "./AppContent.styled";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import News from "../News/News";
import Header from "../Header/Header";
import NewsItem from "../NewsItem/NewsItem";

const AppContent: FunctionComponent<{}> = props => {
  return (
    <FullHeightLayout>
      <Header />
      <ContentWrap>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/news/:link">
            <NewsItem />
          </Route>
        </Switch>
      </ContentWrap>
    </FullHeightLayout>
  );
};

export default AppContent;
