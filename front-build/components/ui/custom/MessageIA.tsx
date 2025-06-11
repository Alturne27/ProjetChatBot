import React from "react";

interface MessageIAProps extends React.PropsWithChildren {
  message: string;
}

const MessageIA: React.FC<MessageIAProps> = ({ message }) => {
  const copyText = () => {
    navigator.clipboard.writeText(message);
  };

  return (
    <div className="flex flex-row gap-5 justify-start my-3 text-lg w-[90%]">
      <img src="/images/logo-couleur.png" alt="" className="size-10" />
      <div className="flex flex-col gap-3">
        <p>{message}</p>
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
