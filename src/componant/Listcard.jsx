// import { Card } from "@mui/material";
import { Card } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect, useSelector } from "react";
import CardMedias from "./cardMedias";
export default function Listcard() {
  
  const [Foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restaurant-project.onrender.com/api/products"
      )
      .then((res) => {
        const fetchedFoods = res.data;
        setFoods(fetchedFoods.data);
         console.log(fetchedFoods.data)

      });
  }, []);

  return (
    <Card container>
      {Foods.map((Food,_id) => (
       <Card key={_id} item>
         <CardMedias Foods={Food} />
       </Card>
      ))}
    </Card>
  );
}
