"use client";

import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { saveCode, generateUniqueId } from "../../utils/codeStorage";
import Subbar from "@/components/Subbar";

const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), {
  ssr: false,
});

export default function NewCodePage() {
  const [code, setCode] = useState<string>("");
  const router = useRouter();

  const saveHandler = (): void => {
    const id = generateUniqueId();
    saveCode(id, code);
    router.push(`/${id}`);
  };

  return (
    <div>
      <Subbar onSave={saveHandler} />
      <CodeMirror
        theme="dark"
        value={code}
        onChange={(value) => setCode(value)}
        className="text-lg" // Adjust font size
        style={{ fontSize: "18px", lineHeight: "1.6" }}
      />
    </div>
  );
}
