import { test,expect } from "@playwright/test";
test('login and put request', async({request}) =>{
    const loginResponse = await request.post('https://qa.taltektc.com/api/login', {
        headers:{
            'Content-Type': 'application/json',
            'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
                            },
                        data: {
                            id:'TTC0166',
                            password:'123456'
                        }
  
})
    expect(loginResponse.status()).toBe(200);  

    const loginBody = await loginResponse.json();
    expect(loginBody.message).toBe('Successfully signed in');
     console.log(loginBody);

     const accessToken = loginBody.access_token;
     const studentId = loginBody.student_id;

     console.log('Access token:', accessToken);
     console.log('studentId:', studentId);

     const requestBody = {
                firstName:'Nupdate',
        lastName: 'Begumupdateee',
        email: `nipa${Date.now()}@taltektc.com`,
        password:'123456',
        confirmPassword: '123456',
        dob:{
            year: 1999,
            month: 3,
            day:14
        },
        gender:'female',

    };
        const updateResponse = await request.put(`https://qa.taltektc.com/api/student/update/${studentId}`,{
            headers:{
                'Content-Type': 'application/json',
                'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC',
                'Authorization': `Bearer ${accessToken}`
                            },
                    data:requestBody
            })
        const updateBody = await updateResponse.json();
        console.log(updateBody);

        expect(updateResponse.status()).toBe(200);
       // expect(updateBody.data.lastName).toBe(requestBody.lastName);

        });





// import {  test, expect} from "@playwright/test";
// test('put and delete in a single file', async ({request})=>{
//     const loginResponse = await request.post('https://qa.taltektc.com/api/login', {
//         headers:{
//             'Content-Type': 'application/json',
//             'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
//                             },
//                         data: {
//                             id:'TTC0166',
//                             password:'123456'
//                         }
//         })
// expect(loginResponse.status()).toBe(200);
// const loginBody = await loginResponse.json();
// expect(loginBody.message).toBe('Successfully signed in');
// console.log(loginBody);

// const accessToken = loginBody.access_token;
// const studentId = loginBody.student_id;

// console.log('Access token:', accessToken);
// console.log('student Id:',studentId );

// const requestBody = {
//         firstName:'Nipa001',
//         lastName: 'begum001',
//         email: `nipa${Date.now()}@taltektc.com`,
//         password:'123456',
//         confirmPassword: '123456',
//         dob:{
//             year: 1999,
//             month: 3,
//             day:14
//         },
//         gender:'female',
// };
//  const updateResponse = await request.put('https://qa.taltektc.com/api/student/TTC0166',{
//             headers:{
//                 'Content-Type': 'application/json',
//                 'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC',
//                 'Authorization': `Bearer ${accessToken}`
//                             },
//                     data:requestBody
//             })

// const updateBody = await updateResponse.json();
// console.log(updateBody);

//         expect(updateResponse.status()).toBe(200);

//  //expect(updateBody.data.firstName).toBe(requestBody.data.firstName);

//         });
            