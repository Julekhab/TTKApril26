let browser = ["Chrome", "Firefox", "Edge","Safari"]

for (const brw of browser ){
    console.log(brw);
    
}

//console.log("Lenght::", browser.length);

// this is for off loop


//for (let index = 1; index < browser.length; index++) {
   // console.log(browser);
    //}
  
    
 console.log("--------------------------");

 browser.push("webkit")
// to add we use .push

 for(const brw of browser){
    console.log(brw);
    
 }

 console.log("--------------");
 
 browser.pop("webkit ");

 for (const brw of browser){
    console.log(brw);
    
 }
    
 
    