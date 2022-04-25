import React, { useCallback, useState } from 'react';
import axios from '../node_modules/axios/index';
import { Route } from '../node_modules/react-router-dom/index';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsPage from './pages/NewsPage';

const App = () => {
  // const [data, setData] = useState(null);
  // // const onClick = () => {
  // //   axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
  // //     setData(response.data);
  // //   });
  // // };
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0e111ec69270475381bdd85e81f04229',
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
  //   </div>
  // );

  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );

  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;