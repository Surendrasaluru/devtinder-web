import { useEffect, useState } from "react";

const Quotebox = () => {
  const [quote, setQuote] = useState("");
  const [index, setIndex] = useState(0);
  const getquote = async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    const json = await res.json();
    setIndex(index + 1);
    setQuote(json?.quotes[index].quote);
    ///console.log(json?.quotes[index].quote);
  };

  useEffect(() => {
    getquote();
  }, []);
  return (
    <div className="bg-white w-[30%] flex flex-col rounded-badge justify-center py-4 mx-auto my-6 align-middle items-center">
      <h1 className="text-base-300 mb-4 text-2xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl">
        quote box
      </h1>
      <h2 className=" bg-slate-200 my-5 text-black mx-2 p-4 font-medium">
        {quote ? quote : ""}
      </h2>
      <button className="btn-success btn" onClick={getquote}>
        Get Another
      </button>
    </div>
  );
};

export default Quotebox;
