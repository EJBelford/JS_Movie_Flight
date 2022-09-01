// console.log('Hi there!');

const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '8187c43',
            s: 'avengers'
        }
    }); 

    console.log(response.data);
}; 

fetchData();
