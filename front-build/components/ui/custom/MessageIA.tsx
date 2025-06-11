import React from "react";
import {
  codeBlockLookBack,
  findCompleteCodeBlock,
  findPartialCodeBlock,
} from "@llm-ui/code";
import { markdownLookBack } from "@llm-ui/markdown";
import { throttleBasic, useLLMOutput, useStreamExample } from "@llm-ui/react";
import { MarkdownComponent } from "@/components/ui/custom/MarkdownComponent";
import { CodeComponent } from "@/components/ui/custom/CodeComponent";

interface MessageIAProps extends React.PropsWithChildren {
  message: string;
}

const MessageIA: React.FC<MessageIAProps> = ({ message }) => {
  const copyText = () => {
    navigator.clipboard.writeText(message);
  };

  const { isStreamFinished, output } = useStreamExample(message);

  const { blockMatches } = useLLMOutput({
    llmOutput: message,
    fallbackBlock: {
      component: MarkdownComponent, // from Step 1
      lookBack: markdownLookBack(),
    },
    isStreamFinished,
  });

  return (
    <div className="flex flex-row gap-5 justify-start my-3 text-lg w-[90%]">
      <img src="/images/logo-couleur.png" alt="" className="size-10" />
      <div className="flex flex-col gap-3">
        {blockMatches.map((blockMatch, index) => {
          const Component = blockMatch.block.component;
          return <Component key={index} blockMatch={blockMatch} />;
        })}
        <img
          src="/images/copy.png"
          alt=""
          className="size-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-200"
          onClick={() => copyText()}
        />
      </div>
    </div>
  );
};

export default MessageIA;
