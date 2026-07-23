// import {  test, expect} from "@playwright/test";
// import { request } from "node:http";
// test('get updated student info', async ({request})=>{
//     const response = await request.get('https://qa.taltektc.com/api/TTC0165',{
//     headers: {
//             'Content-Type': 'application/json',
//             'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
//         }
    
//     })

//     expect (response.status()).toBe(200);
//      //console.log(response);

//     const responseBody = await response.json();
//     console.log(responseBody);
//     expect(responseBody.message).toBe('Students retrieved successfully');
    
//  });


import  {test, expect  } from "@playwright/test";
import { request } from "node:http";

test('get all students', async ({request, page}) => {
    const  response = await request.get('https://qa.taltektc.com/api/students',{
        headers: {
            'Content-Type': 'application/json',
            'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
        }
    
    })

    expect (response.status()).toBe(200);
     //console.log(response);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.message).toBe('Students retrieved successfully');
    
 });
