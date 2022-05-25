
const URL = "https://random.dog/woof.json";
const contentParent = document.querySelector('main');
const buttonReturn = document.querySelector('button')
/*-------------------------------------------------*/



const returnCard = async (api) => {
    const set =  await fetch(api)
    const data = await set.json()
    console.log(data);
    /*----------------------------------*/
    const contentson = document.createElement('div');
    contentson.classList.add('card');
    const img = document.createElement('img');
    img.classList.add('img_content')
    img.src = data.url;

    contentson.appendChild(img);
    contentParent.appendChild(contentson);
    /*-------------------------------------------------------------*/
}



const getAllcontent = () => {
    returnCard (URL);
}

buttonReturn.addEventListener('click',getAllcontent )
