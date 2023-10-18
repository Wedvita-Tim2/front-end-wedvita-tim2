import { useState } from "react";
import Button from "../elements/Buttons";

const QuestionCardComponent = ({question, answer}) =>{
    const [isMinimize, setMinimize] = useState(true);

  const minimizeButtonHandler = () => {
    setMinimize(!isMinimize);
  };

  return (
    <div className="relative mt-2 mx-2 py-2 px-2">
      <div className="bg-white shadow-md rounded-top-md p-1.5 md:p-4 border-t-gray-100">
        <p className="text-primary-300 font-medium text-lg">{question}</p>
        <Button
          className={`absolute right-3 top-2 mt-3 md:mt-6`}
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
      
      </div>
        <div className={`${isMinimize ? 'hidden' : ''} p-1.5 duration-300 ease-in-out delay-200 md:p-4 bg-white shadow-md rounded-b-md`}>
          <p className="text-primary-200 font-light text-base">{answer}</p>
        </div>
    </div>
  );
}

export default QuestionCardComponent