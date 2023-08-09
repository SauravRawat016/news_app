import makenetworkcall from "./api-client2.js";

import product from "../model/product.js";

const operations={
    async loadproducts(){
        const objects=await makenetworkcall();
        console.log('objects : ',objects);
        console.log('articles_array');
        console.log(objects['articles']);
        const articles_array=objects['articles'];
        console.log(articles_array);
        const article_array=articles_array.map(article=>{
            const curr_article=new product(article.title,article.author,article.url,article.description,article.urlToImage,article.source['name']);
            return curr_article;
        })
        console.log(article_array);
        return article_array;
    },
    sortproducts(){

    }

}

export default operations;