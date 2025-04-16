"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

import Introduction from "./docs/Introduction";
import Download from "./docs/Download";
import Contents from "./docs/Contents";
import Overview from "./docs/Overview";
import Color from "./docs/Color";
import Button from "./docs/Button";

const componentsMap = {
  introduction: <Introduction />,
  download: <Download />,
  contents: <Contents />,
  overview: <Overview />,
  color: <Color />,
  button: <Button />,
};

const sectionKeys = Object.keys(componentsMap);

export default function DocsContent() {
  const [selected, setSelected] = useState("introduction");

  return (
    <div className="lg:grid grid-cols-4 gap-8 max-w-screen-xl mx-auto px-6 py-12">
      <div className="col-span-1">
        <Sidebar
          sections={sectionKeys}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      <div className="col-span-3">
        {componentsMap[selected]}
      </div>
    </div>
  );
}
