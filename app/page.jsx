import React from "react";
import ESpeed from "./components/ESpeed";

const Page = () => {
  return (
    <section>
      <ESpeed
        view="home"
        data="views.home.allContent.frontpageRte"
        loading={true}
        transform="html"
        id="espeedComponent"
      />
    </section>
  );
};

export default Page;
