import axios, { AxiosResponse, CanceledError } from "axios";
import Button from "./Button";
import { useState } from "react";
import LinkItems from "./LinkItems";
import LoadingSpinner from "./LoadingSpinner";

interface Response {
  ok: boolean;
  result: {
    code: string;
    original_link: string;
    full_short_link: string;
    full_short_link2: string;
    full_short_link3: string;
    share_link: string;
    short_link: string;
    short_link2: string;
    short_link3: string;
  };
}

const LinkShortener = () => {
  const [data, setData] = useState<any>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    const url = inputValue;
    setLoading(true);

    axios
      .get("https://api.shrtco.de/v2/shorten?url=" + url)
      .then(({ data }: AxiosResponse<Response>) => {
        setData([
          data.result.full_short_link,
          data.result.full_short_link2,
          data.result.full_short_link3,
        ]);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
        setLoading(false);
      });
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex mt-16 items-center justify-center mobile:flex-col mobile:bg-shorten-mobile md:bg-shorten-desktop bg-my-dark-violet bg-cover rounded-lg w-11/12">
        <div className="flex items-center justify-center w-11/12 mobile:flex-col md:flex-row bg-cover py-8 md:px-10">
          <input
            type="text"
            placeholder="Enter a link here to shorten..."
            className="border-none active:border-none mobile:w-11/12 md:w-4/5 rounded-lg h-10 mobile:mb-4 md:mb-0 py-3 text-center md:mr-4"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            className="mobile:w-11/12 md:w-auto rounded-lg"
            onClick={handleClick}
          >
            Shorten It!
          </Button>
        </div>
        {isLoading && <LoadingSpinner />}
        <LinkItems links={data} />
      </div>
    </div>
  );
};

export default LinkShortener;
