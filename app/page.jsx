import React from "react";
import ESpeed from "./components/ESpeed";

const Page = () => {
  return (
    <section>
      <ESpeed
        view="home"
        data="views.home.allContent.metaData.name"
        loading={true}
      />
    </section>
  );
};

export default Page;
