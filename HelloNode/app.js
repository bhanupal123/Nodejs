function PlaceAnOrder(orderNo) {
    console.log("customer order:-",orderNo);
    DeliverFood(function(){
        console.log("Food is ready. Please Deliver:",orderNo);
    })
}

//serve food after 5 sec
function  DeliverFood(callback){
    setTimeout(callback,5000);
}


//order food
PlaceAnOrder(1);
PlaceAnOrder(2);
PlaceAnOrder(3);
PlaceAnOrder(4);
PlaceAnOrder(5);
PlaceAnOrder(6);