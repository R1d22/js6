/*const getValue = () => {
    const formEl = document.forms.roof;

    const data = new FormData(formEl);

    const one = Number(data.get('width').trim());
    const two = Number(data.get('height').trim());
    return [one,two];
};

const setResult = (val) => {
    const container = document.querySelector('.container')
    container.innerHTML = val;
};
const multiplyBtn = document.querySelector('.multiply');
const block = document.querySelector('.block');
const table = document.querySelector('.no-display');

//const tbody = document.querySelector('tbody');


multiplyBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    
   // block.classList.add("none")
    //table.classList.remove("no-display");

    const createField = (one,two) => {
        let html = '';
        

        for(let i = 0; i < one; i++) {
            html += '<div class="block">';
            for(let j = 0; j < two; j++) {
                html = '</div>'
            }
        }
    }
    createField(one,two);

    setResult.innerHTML = html;


    /*const vals = getValue();
    const result = vals[0]// * vals[1] ;
    //const block = document.createElement('div');

    //table.classList.add("block");
    /*for (let i=a; i<vals[0]; i++) {
        result = result + i;
    }

    /*if(vals[0] > block) {
        div.clone(block);
        block.classList.remove("none");
        block.classList.add("block");
       
    }  else {return}*/

    /*for(let i = result; result < vals[0]; i++) {
        result = result.clone(block) + i;
    }*/

   

 /*   setResult(result);
});
 












//const block = document.querySelector('.block');
/*const secondContainer = document.querySelector('.second__container')
function a(numberSelected) {
    let numberOne = 0;
    for (let i = 0; i < one; i++){
        if (numberSelected.one[i].selected) {
            numberOne
        }
    }
    return numberOne
}/*


multiplyBtn.addEventListener('click', function(){
    alert
})
/*multiplyBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    const vals = getValue();
    const result = vals[0] * vals[1];
    /*draw = function() {
        typed = $('#width').val()
    
    }*/
    //const divBlock = document.createElement('div');
    //divBlock.classList.add('block')

   //setResult(result);
    /*const html = `
        <div>
             ${divBlock}
        </div>
    `
    secondContainer.insertAdjacentHTML('afterbegin', html);*/
//});


//const submitButton = document.querySelector('.submit');
const container = document.querySelector('.container');
const submitButton = document.querySelector('.submit-button');
const block = document.querySelector('.no-display');

submitButton.addEventListener('click', (ev) => {
    
    const formData = new FormData();
    const column = Number(formData.get('.one'));
    const row = Number(formData.get('.two'));
    
    

    createField(column, row);
});


const createField = (column, row) => {
    let html = '';

    for(let i = 0; i < row; i++){
        html += `<div class="block">`;
        for(let j = 0; j < column; j++){
            html += `<div class="block"></div>`;
        }
        html += `</div>`;
    };
    console.log('html:' +html)
    container.innerHTML = html;
};
