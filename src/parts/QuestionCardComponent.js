import { useState } from "react";
import Button from "../elements/Buttons";

const QuestionCardComponent = ({question, answer}) =>{
    const [isMinimize, setMinimize] = useState(true);

  const minimizeButtonHandler = () => {
    setMinimize(!isMinimize);
  };

  return (
    <div className="relative mt-4 mx-2 py-2 px-2 md:py-4 md:px-4 bg-white shadow-md rounded-md">
      <div>
        <p className="text-primary-300 font-medium text-lg">{question}</p>
        <Button
          className={`absolute right-3 top-0 mt-3 md:mt-6`}
          type="button"
          onClick={minimizeButtonHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-5 h-5 ${!isMinimize ? '' : 'hidden'} stroke-primary-400 duration-300 ease-in-out hover:scale-105`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-5 h-5 ${!isMinimize ? 'hidden' : ''} stroke-primary-400 duration-300 ease-in-out hover:scale-105`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Button>
        <div className={`${isMinimize ? 'hidden' : ''} duration-300 ease-in-out delay-200 mt-3`}>
          <p className="text-primary-200 font-light text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default QuestionCardComponent