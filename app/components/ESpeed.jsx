"use client";
import React, { useEffect, useState } from "react";
import { fetchDataFromEnterspeed } from "../utils/enterspeed";

// This is the ESpeed component. It can be used to render either HTML or JSON values through the use of the element below:
// <ESpeed view="" data="" loading="" transform="" />
// View: which handle of the group of content you wish to access.
// Data: Which data inside the JSON that is wished to be grabbed ahold of.
// Loading: True = shows loading text. False = doesn't show loading text.
// Transform: HTML = Render HTML from the HTML inside the JSON content.

const ESpeed = ({ view, data: dataPath, loading, transform }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (view) {
      const fetchContent = async () => {
        try {
          const result = await fetchDataFromEnterspeed(view);
          setData(result);
          console.log(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchContent();
    }
  }, [view]);

  let content = null;

  if (dataPath) {
    const paths = dataPath.split(".");
    content = paths.reduce((acc, curr) => acc && acc[curr], data);
  }

  if (!content && loading) {
    return <div>Loading...</div>;
  }

  if (content) {
    if (transform && transform === "html") {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return <div>{JSON.stringify(content)}</div>;
  }

  return null;
};

export default ESpeed;
