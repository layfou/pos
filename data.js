// API read 
const fetchFunction = async () => {
  try {
    const response = await fetch(READ_API_URL);
    const data = await response.json();
    
    if (!response.ok) {
      console.log(data.description);
      return
    }
    
    // DATA EXECUTION
    fetchedData = data.data;
    availableKeyword = fetchedData.map(data => data.product);
    // console.log(fetchedData)
    console.log('successfully fetch data from google sheet');
    
    // END DATA EXECUTION
  } 
  catch { console.error(error) }
};

