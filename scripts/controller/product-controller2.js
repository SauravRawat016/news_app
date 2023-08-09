import operations from "../services/product-operations2.js";

async function loadarticles(){
    const articles=await operations.loadproducts();
    console.log('articles : ',articles);
    for(let article of articles){
        preparecard(article);
    }
}
loadarticles();

function preparecard(article){
    const outputdiv=document.querySelector('#output2');
    const coldiv=document.createElement('div');
    coldiv.className='col-12';
    const carddiv=document.createElement('div');
    carddiv.className='card row w3-theme-l4';
    carddiv.style='width: 18rem;';
    coldiv.appendChild(carddiv);
    const img=document.createElement('img');
    if(article.image==null)img.src='https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg';
    else img.src=article.image;
    
    carddiv.appendChild(img);
    const cardbody=document.createElement('div');
    cardbody.className='card-body';
    const h=document.createElement('h5');
    h.innerText=article.title;
    const p=document.createElement('p');
    p.innerText=article.discription;
    const p1=document.createElement('p');
    p.innerText=`Author : ${article.author}`;
    const p2=document.createElement('p');
    p2.innerText=`Source : ${article.name}`;
    const button=document.createElement('button');
    button.className="btn btn-primary w3-theme";
    button.innerText="LINK TO ARTICLE";
    
    button.addEventListener('click',function(){open(article.URL)});

cardbody.appendChild(h);
cardbody.appendChild(p);
cardbody.appendChild(p1);
cardbody.appendChild(p2);
cardbody.appendChild(button);
carddiv.appendChild(cardbody);
outputdiv.appendChild(coldiv);

}