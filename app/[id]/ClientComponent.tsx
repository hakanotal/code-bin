"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCode, saveCode, generateUniqueId } from "../../utils/codeStorage";
import { Highlight, themes } from "prism-react-renderer";
import React from "react";
import Subbar from "@/components/Subbar";

const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), {
  ssr: false,
});

export default function ClientComponent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [code, setCode] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const unwrappedParams = React.use(params);

  const editHandler = (): void => setIsEditing(true);

  const saveHandler = (): void => {
    const id = generateUniqueId();
    saveCode(id, code);
    router.push(`/${id}`);
  };

  const copyHandler = () => {
    const currentURL = window.location.href; // Get the current URL
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  useEffect(() => {
    const id = unwrappedParams?.id;
    if (!id) {
      router.push("/new");
      return;
    }

    if (!code) {
      const storedCode = getCode(id);
      if (storedCode) {
        setCode(storedCode);
      } else {
        router.push("/new");
      }
    }
  }, [unwrappedParams, code, router]);

  if (isEditing) {
    return (
      <div>
        <Subbar onSave={saveHandler} onCopyLink={copyHandler} />
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

  return (
    <div>
      <Subbar onEdit={editHandler} onCopyLink={copyHandler} />
      <Highlight code={code} language="html" theme={themes.okaidia}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className + "text-lg"}
            style={{fontSize: "18px", lineHeight: "1.6" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span>{i + 1} </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
