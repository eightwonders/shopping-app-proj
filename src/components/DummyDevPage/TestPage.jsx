import { useEffect, useState } from 'react';
import './TestPage.scss';
import Breadcrumbs from '../Breadcrumb/Breadcrumbs';
// interface TestData {
//     id: number;
//     title: string;
//     imageUrl: string;
// }

export const TestPage = () => {
const [data, setData] = useState([]);

useEffect(() => {
    fetch('https://mocki.io/v1/37287d2b-163e-4146-a159-7867ae1e7e9b')
    .then(response => response.json())
    .then(json => setData(json));
},[]);
    return (
      <div className="testPageOutlook">
        <div className="imgOrder">
          {data.map((item) => {
            return <img src={item.imageUrl} alt={item.title} />;
          })}
        </div>
      </div>
    );
}