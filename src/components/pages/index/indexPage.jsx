import Header from "../../../stories/layouts/header/Header";
import Container from "./../../../stories/layouts/container/Container";
import Main from "./../../../stories/layouts/main/Main";
import PMButton from "./../../../stories/ui/pm-button/PMbutton";
import Footer from "./../../../stories/layouts/footer/Footer";
import Counter from "../../ui/counter";
import { useEffect, useState } from "react";

import getWorkDaysDataArray, { getDataArrayWithHDays, twtwo } from "../../../api/work-days-api";

const IndexPage = ({ store }) => {
  const [momentus, setMomentus] = useState("");
  useEffect(() => {
    console.log(getDataArrayWithHDays(getWorkDaysDataArray(2022), twtwo));
  }, []);

  return (
    <>
      <Header bgColor="gold">
        <Container>This is Header</Container>{" "}
      </Header>
      <Main bgColor="lightblue">
        <Container>
          This is Main
          <PMButton
            bgColor="#333"
            textColor="white"
            paddings="5px 10px"
            onClick={() => {
              store.dispatch({ type: "counter/incremented" });
            }}
          >
            Прибавить 10
          </PMButton>
          <Counter store={store} value={"0"} />
          <PMButton
            onClick={() => {
              store.dispatch({ type: "counter/decremented" });
            }}
            bgColor="#333"
            textColor="white"
            paddings="5px 10px"
          >
            Отнять 10
          </PMButton>
          <p>{momentus}</p>
        </Container>
      </Main>
      <Footer bgColor="dark">
        <Container>This is Footer</Container>
      </Footer>
    </>
  );
};

export default IndexPage;
