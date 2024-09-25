document.getElementById('calculate').addEventListener('click', () => {  
    const allInput = parseFloat(document.getElementById('all').value);  
    const positiveInput = parseFloat(document.getElementById('positive').value);  
    const negativeInput = parseFloat(document.getElementById('negative').value);  

   
    if (isNaN(allInput) || isNaN(positiveInput) || isNaN(negativeInput)) {  
        alert('لطفا از اعداد استفاده کنید'); 
        return;  
    }  

  
    if (positiveInput + negativeInput > allInput) {  
        alert('مجموع اعداد نمیتواند از کل سوالات بیشتر باشد'); 
        return;
    }  

    const average = ((positiveInput + negativeInput) / allInput) * 100;  


    let resultDiv = document.querySelector('.result');  
    if (!resultDiv) {  
        resultDiv = document.createElement('div');  
        resultDiv.className = 'result';  
        document.body.appendChild(resultDiv); 
    }  


    resultDiv.innerHTML = `Average: ${average.toFixed(2)}%`;  
    resultDiv.style.display = 'block'; 
});

