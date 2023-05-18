import { baseServerURL } from "../templateConstants"; // Make no Changes here


async function stockData(){
    try{
        let data = {
            CamName : document.getElementById("name").value,
            category : document.getElementById("category").value,
            sector : document.getElementById("sector").value,
            price : document.getElementById("price").value,
            quantity : document.getElementById("quantity").value,
            addDate : document.getElementById("addDate").value
        };
        let res = await fetch(`${ baseServerURL }/stocks`,{
            method : "PSOT",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data),
        })
        let ad = await res.json();
        console.log(ad);
    }
    catch (err){
        console.log(err);
    }
}
stockData();