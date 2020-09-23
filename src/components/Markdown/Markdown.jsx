import React from 'react';

import ReactMarkdown from 'react-markdown';

import Image from '_/components/Markdown/Image/Image';

const Markdown = (props) => {
  const renderers = {
    image: Image,
  };

  return (
    <ReactMarkdown renderers={renderers} {...props} />
  );
};

export default Markdown;
