//--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
//                        Classification: UNCLASSIFIED
//==============================================================================
//                Copyright, Belford DBA Consulting, LLC, 2022
//                      Unpublished, All Rights Reserved
//==============================================================================
//--*----|----*----|----*----|----*----|----*----|----*----|----*----|----*----/
//
// Section 21: Application desin Patterns
//
//--*----1----*----2----*----3----*----4----*----5----*----6----*----7----*----8
//
// mochajs.org
// npm install -g mocha
// clear && mocha index.test.js
//
// chiajs.org
//
//--*----|----*----|----*----|----*----|----*----|----*----|----*----|----*----/

const createAutoComplete = ({ 
    root, 
    renderOption, 
    onOptionSelect, 
    inputValue, 
    fetchData
}) => {

    // // const root = document.querySelector('.autocomplete'); 
    root.innerHTML = `
        <label><b>Search</b></label>
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `;

/*----------------*/

    // // const input = document.querySelector('input'); 
    // // const dropdown = document.querySelector('.dropdown');
    // // const resultsWrapper = document.querySelector('.results');

    const input = root.querySelector('input'); 
    const dropdown = root.querySelector('.dropdown');
    const resultsWrapper = root.querySelector('.results');

    const onInput = async event => { 
        const items = await fetchData(event.target.value); 

        if (!items.length) {
            dropdown.classList.remove('is-active');
            return;
        }

        resultsWrapper.innerHTML = '';
        dropdown.classList.add('is-active');

    // console.log(items);
        for (let item of items) {
            const option = document.createElement('a'); 
            
            option.classList.add('dropdown-item');
            option.innerHTML = renderOption(item); 
            option.addEventListener('click', () => {
                dropdown.classList.remove('is-active'); 
                input.value = inputValue(item);
                onOptionSelect(item); 
            });

            resultsWrapper.appendChild(option);
        }
    };

    input.addEventListener('input', debounce(onInput, 500)); 

    document.addEventListener('click', event => {
        if (!root.contains(event.target)) {
            dropdown.classList.remove('is-active');
        }
    });
};