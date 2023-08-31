"use client";
import React, { useEffect, useState } from "react";
import { fetchDataFromEnterspeed } from "../utils/enterspeed";

const ESpeed = ({ view, data: dataPath, loading, transform, id }) => {
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
    return <div id={id}>Loading...</div>;
  }

  if (content) {
    if (transform && transform === "html") {
      return <div id={id} dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return <div id={id}>{JSON.stringify(content)}</div>;
  }

  return null;
};

export default ESpeed;
