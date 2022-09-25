const displayloader = document.querySelectorAll('.displayloader');
window.onclick = (()=>{
    displayLoader();
});

function closure(){
    i = 0;
    return()=>{
        
        let isChanged = false;
        displayloader.forEach((data,idx)=>{
            if(!data.classList.contains('show') && !isChanged && idx==i){
                data.classList.add('show');
                isChanged = true;
            }else{
                data.classList.remove('show');
            }
        });
        i = i==4 ? 0 : i+=1;
    }
}

const displayLoader = closure();