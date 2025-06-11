import React from "react";

interface MessageUserProps extends React.PropsWithChildren {
  message: string;
}

const MessageUser: React.FC<MessageUserProps> = ({ message }) => {
  return (
    <div className=" bg-gray-600/30 text-right w-fit px-6 text-lg py-4 my-3 rounded-3xl mr-0 ml-auto max-w-[80%]">
      {message}
    </div>
  );
};

export default MessageUser;
