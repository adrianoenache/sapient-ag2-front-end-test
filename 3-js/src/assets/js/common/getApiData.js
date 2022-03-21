// Get API data
const getApiData = (dataFrom) => {

  fetch(dataFrom)
    .then((response) => response.json())
    .then(function (myData) {

      console.log('>>> myData.query:', myData.query);
      return myData.query;

    })
    .catch((error) => {

      console.warn('Fail to get API data: ', error);

    });

}

export { getApiData };
