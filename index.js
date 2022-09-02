// console.log('Hi there!');

const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '8187c43',
            s: searchTerm
 //           i: 'tt0848228'
        }
    }); 

    console.log(response.data);
}; 

const input = document.querySelector('input'); 

const debounce = (func, delay = 1000) => {
    let timeoutId; 
    return (...args) => {
        timeoutId = setTimeout(() => {
            func.apply(null, args);
            }, delay);
    };
};

const onInput = event => { 
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500)); 

