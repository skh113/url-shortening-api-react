import axios, { AxiosResponse, CanceledError } from "axios";
import Button from "./Button";
import { useState } from "react";

interface Response {
  ok: boolean;
  result: {
    code: string;
    original_link: string;
    share_link: string;
    short_link: string;
    short_link2: string;
    short_link3: string;
  };
}

const LinkShortener = () => {
  const [data, setData] = useState<any>([]);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    const url = inputValue;

    axios
      .get("https://api.shrtco.de/v2/shorten?url=" + url)
      .then(({ data }: AxiosResponse<Response>) => {
        setData([
          data.result.short_link,
          data.result.short_link2,
          data.result.short_link3,
        ]);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
      });
  };

  return (
    <div className="flex mt-16 items-center justify-center">
      <div className="flex items-center justify-center w-11/12 mobile:bg-shorten-mobile md:bg-shorten-desktop mobile:flex-col md:flex-row bg-cover py-8 bg-my-dark-violet rounded-lg md:px-10">
        <input
          type="text"
          placeholder="Enter a link here to shorten..."
          className="border-none active:border-none mobile:w-11/12 md:w-4/5 rounded-lg h-10 mobile:mb-4 md:mb-0 py-3 text-center md:mr-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          className="mobile:w-11/12 md:w-auto rounded-lg"
          onClick={handleClick}
        >
          Shorten It!
        </Button>
        {/* {data.length !== 0 ? <div>{data}</div> : <div>nothing</div>} */}
      </div>
    </div>
  );
};

export default LinkShortener;
