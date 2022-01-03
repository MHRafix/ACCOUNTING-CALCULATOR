//==============================
// CAlculation Code Strats From Here
//==============================

//Solution Of Problem No 01
//===============

function seerToMon(seer){
         
         let seerInMon = 40; 
         let resultKotMon = seer / seerInMon;//calculate koto seer/kg tey koto mon hoy
        if (resultKotMon) {
            return resultKotMon; // return the calculate result
        }else{
            let erorrReturn = "<h1 style='color:red;'>Something Wrong To Convert Seer To Mon!</h1>";//Erorr Message Store Here
            return erorrReturn;//Erorr Message Return Here
        }
        
}

let seerUserInput = seerToMon(354656);//user input pass into the peramiter/argument

 //document.write(seerUserInput, "<br>"); //My Testing 

//Solution Of Problem No 02
//===============

function totalSales(shirts, pants, shoes){

    let perShirtPrice = 100;//Per Shirt Price Store In Variable 
    let perPantPrice  = 200;//Per Pant Price Store In Variable
    let perShoePrice  = 500;//Per Shoe Price Store In Variable
        if (shirts && pants && shoes) {


    let totalShirtSales = shirts * perShirtPrice; // Multiplication Shirts And Shirts Price For Taking The Total Shirts Sales Amount.
    
    let totalPantSales = pants * perPantPrice; // Multiplication Pants And Pants Price For Taking The Total Pants Sales Amount. 

    let totalShoeSales = shoes * perShoePrice; // Multiplication Shoes And Shoes Price For Taking The Total Shoes Sales Amount.  

    let totalProductsSales = totalShirtSales + totalPantSales + totalShoeSales;//Addition of total shirts, pants and shoes total sales price
    return totalProductsSales; //return the final sales price of shop
   }else{
    let erorrReturn = "<h1 style='color:red;'>Something Wrong To Calculate Total Sales Amount!</h1>";//Erorr Message Store Here
    return erorrReturn;//Erorr Message Return Here
   }
}

let salesProductInput = totalSales(823, 123, 532);//Take Input From User And Pass Into The Arguments

//document.write(salesProductInput, '<br>');//Testing The result


//======================
//Solution Of Problem 03
//======================

function deliveryCost(products){
    let productNumbers = products;//Products From User Input
    let firstProductsUpTo = 100;//First Products Up To
    let secondProductsUpTo = 200 - firstProductsUpTo;//Second Products Up To
    let firstDeliveryCharge = 100;//Delivery Charge For First 100 Products
    let secDeliveryCharge = 80;//Delivery Charge For 101 To 199 Products
    let thirdDeliveryCharge = 50;//Delivery Charge For 201 To Last All Products 


    if (productNumbers <= 100) {
        let firstProductsDeliveryCost = products * firstDeliveryCharge;//Take The Total Delivery Cost By Using Multiplication Between Products And DeliveryCharge 
        return firstProductsDeliveryCost;//Total Delivery Cost Return Here
        
    }else if(productNumbers <= 200){
        let First100ProductsDeliveryCost = firstDeliveryCharge * firstProductsUpTo;//First 100 Products Delivery Cost
        let secondProductsUpTo = productNumbers - firstProductsUpTo;// Second Products Count
        let SecondProductsDeliveryCost = secondProductsUpTo * secDeliveryCharge;//Calculate The Second Products Delivery Cost
        let SecondProductsDeliveryCostTotal = First100ProductsDeliveryCost + SecondProductsDeliveryCost;//Total Second Products Delivery Cost

        return SecondProductsDeliveryCostTotal;// Second 100 Products Delivery Cost Return Here 


    }else if(productNumbers >= 201){
        let First100ProductsDeliveryCost = firstDeliveryCharge * firstProductsUpTo;//First 100 Products Delivery Cost
        let Second100ProductsDeliveryCost = secDeliveryCharge * secondProductsUpTo;//Second 100 Products Delivery Cost
        let thirdProductsUpTo = productNumbers - 200;//Third Products Numbers
        let thirdProductsDeliveryCost = thirdProductsUpTo * thirdDeliveryCharge;//Third Products Delivery Charge
        let thirdProductsDeliveryCostTotal = First100ProductsDeliveryCost + Second100ProductsDeliveryCost + thirdProductsDeliveryCost;//Third All Products Total Delivery Cost
        return thirdProductsDeliveryCostTotal;//Third Products Delivery Charge Return Here
    }else{
        let erorrReturn = "<h1 style='color:red;'>Something Wrong To Calculate Delivery Cost Exactly!</h1>";//Erorr Message Store Here

        return erorrReturn;//Erorr Message Return Here
    }
}  

let productsNumbers = deliveryCost(199);//Take Input From User And Pass Into The Arguments

document.write(productsNumbers, '<br><br></br>');//My Testing

//======================
//Solution Of Problem 04
//======================

 
function perfectFriend(friendNames){

let i = 0;
while(i < friendNames.length + 1){
    let element = friendNames[i];
    let elementLength = element.length;
    if (elementLength == 5) {
         //document.write(element,'<br>');//My Testing 
        return element; 
        break;
    }
i++;
}
}
  let friendNames = perfectFriend(['Fokhor', 'Bokkor', 'Babu', 'Rafiz', 'Rafiza', 'Edu', 'Gedu']);
//==============================
// Assignment Code Ends To Here
//==============================