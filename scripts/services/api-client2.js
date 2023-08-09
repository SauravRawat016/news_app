import URL from '../utils/latest.js';

async function makenetworkcall(){

    try{
        console.log('response');
        const response=await fetch(URL);
        console.log(response);
        const object=await response.json();
        console.log('data');
        console.log(object);
        return object;
    }
    catch(err){
        console.log("Error",err);
        throw err;
    }

}
export default makenetworkcall;