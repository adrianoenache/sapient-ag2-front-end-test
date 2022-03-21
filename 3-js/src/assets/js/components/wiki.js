// Wiki
import { getApiData } from "../common/getApiData";

const wiki = () => {

  const dataFrom = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein';
  let myData = getApiData(dataFrom);

  console.log('>>> myData ', myData);

};

export { wiki };
