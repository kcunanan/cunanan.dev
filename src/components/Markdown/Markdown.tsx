import React from "react";

import ReactMarkdown from "react-markdown";

import Image from "./Image/Image";

const Markdown = (props: any) => {
  const renderers = {
    image: Image,
  };

  return <ReactMarkdown renderers={renderers} {...props} />;
};

export default Markdown;
