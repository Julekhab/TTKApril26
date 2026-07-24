import {  test, expect} from "@playwright/test";
import { request } from "node:http";
test('get updated student info', async ({request})=>{
    const response = await request.get('https://qa.taltektc.com/api/student/TTC0166',{
    headers: {
            'Content-Type': 'application/json',
            'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
        }
    
    })

    expect (response.status()).toBe(200);
     //console.log(response);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.message).toBe('Successfully loaded student information');
    
 });

