import { test, expect } from "@playwright/test";
test('nipa new student', async ({request}) =>{
   const requestBody = {
        firstName:'Nipa',
        lastName: 'begum',
        email: `nipa${Date.now()}@taltektc.com`,
        password:'123456',
        confirmPassword: '123456',
        dob:{
            year: 1999,
            month: 3,
            day:14
        },
        gender:'female',
        agree: true 
    
};

    const response = await request.post('https://qa.taltektc.com/api/signup',{
                        headers:{
                                'Content-Type': 'application/json',
                                'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
                            },
                        data: requestBody
                    })
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody.message).toBe('User created successfully');
    expect (responseBody.data.lastname).toBe(requestBody.lastname)

                    
    });

