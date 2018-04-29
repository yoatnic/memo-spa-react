//@flow
import React from "react";
import Header from "../molecules/Header";
import SomeList from "../molecules/SomeList";
import Footer from "../molecules/Footer";

const Fragment = (React: any).Fragment;
const InfinityScroll = (props: any) => {
  return (
    <Fragment>
      <Header />
      <SomeList {...props} />
      <Footer />
    </Fragment>
  );
};

export default InfinityScroll;
