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

    console.log(response.data);
}; 

/*----------------*/

const input = document.querySelector('input'); 

const onInput = event => { 
    fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500)); 

