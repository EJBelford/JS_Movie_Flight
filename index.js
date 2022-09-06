//--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
//                        Classification: UNCLASSIFIED
//==============================================================================
//                Copyright, Belford DBA Consulting, LLC, 2022
//                      Unpublished, All Rights Reserved
//==============================================================================
//--*----|----*----|----*----|----*----|----*----|----*----|----*----|----*----/
//
//--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
//
//
//--*----|----*----|----*----|----*----|----*----|----*----|----*----|----*----/

// console.log('Hi there!');

const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '8187c43',
            s: searchTerm
 //           i: 'tt0848228'
        }
    }); 

//    console.log(response.data); 

    if (response.data.Error) {
        return [];
    };

    return response.data.Search; 
}; 

/*----------------*/

const input = document.querySelector('input'); 

const onInput = async event => { 
    const movies = await fetchData(event.target.value); 

    // console.log(movies);
    for (let movie of movies) {
        const div = document.createElement('div'); 

        div.innerHTML = `
            <img src="${movie.Poster}" /> 
            <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);
    }
};

input.addEventListener('input', debounce(onInput, 500)); 

