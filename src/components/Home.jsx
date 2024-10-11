import { useEffect, useState } from "react";
import { highlightSearchTerm } from "highlight-search-term";
import { articles } from "../constants";

export default function Home() {
  const [search, setSearch] = useState("");
  useEffect(() => {
    highlightSearchTerm({ search, selector: ".content" });
  }, [search]);
  return (
    <>
    <div className="searchWrapper">
        <h1>
            Search Box
        </h1>
        <input
            className="searchBox"
            type="text"
            placeholder="Search term to be highlighted"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </div>
        <div className="content">
            {articles.map((d,index)=>(
                <p className="text" >{d.description}</p>
            ))}
        </div>
        </>
  );
}