const q$ = document.getElementById('q');
const queryWrapper$ = document.querySelector('.query-wrapper');

function onFormSubmit(){
    if(!q$.value){
        this.renderErrorMessage();
        return false;
    }
    this.clearErrorMessage();
    return true;
}

function onQueryKeyup(){
    if(!q$.value){
        renderErrorMessage();
        return;
    }
    clearErrorMessage();
}

function renderErrorMessage(){

    let error$ = queryWrapper$.querySelector('.error');
    if(!error$){
        error$ = document.createElement('div');
        error$.classList.add('error');
        queryWrapper$.append(error$);
    }
    error$.innerText = 'Query cannot be empty';
}

function clearErrorMessage(){
    let error$ = queryWrapper$.querySelector('.error');
    if(!error$){
        return;
    }
    // error$.innerText = ''; // option 1: you can clear the text, but the element wil be available
    error$.remove(); // option 2: error element will be taken out of html
}