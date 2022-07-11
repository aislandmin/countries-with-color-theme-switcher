import { useState } from "react";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { nanoid } from "nanoid";

export const Home = (props) => {
  const [filter, setFilter] = useState(props.countries);

  const handleFilters = (search, region) => {
    let data = [...props.countries];
    if (region) {
      data = data.filter((item) => item.region.includes(region));
    }
    if (search) {
      data = data.filter((item) =>
        item.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilter(data);
  };

  return (
    <>
      <Controls handleFilters={handleFilters} />
      <List>
        {filter.map((item) => {
          const countryInfo = {
            img: item.flags.svg,
            name: item.name.common,
            info: [
              {
                title: "Population",
                description: item.population.toLocaleString(),
              },
              {
                title: "Region",
                description: item.region,
              },
              {
                title: "Capital",
                description: item.capital,
              },
            ],
          };
          return <Card key={nanoid()} {...countryInfo} />;
        })}
      </List>
    </>
  );
};
