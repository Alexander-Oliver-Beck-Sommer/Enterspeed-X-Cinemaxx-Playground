"use client";
import React, { useEffect, useState } from "react";
import { fetchDataFromEnterspeed } from "./utils/enterspeed"; // Adjust the path based on your directory structure

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const result = await fetchDataFromEnterspeed("home");
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchContent();
  }, []);


  return <div>{data ? JSON.stringify(data.views.home.allContent.frontpageRte) : "Loading..."}</div>;
};

export default Page;
