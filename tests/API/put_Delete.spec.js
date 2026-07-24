import { test,expect } from "@playwright/test";
test('login and put request', async({request}) =>{
    const loginResponse = await request.post('https://qa.taltektc.com/api/login', {
        headers:{
            'Content-Type': 'application/json',
            'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
                            },
                        data: {
                            id:'TTC0165',
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

        
    const userInfo = await request.delete('https://qa.taltektc.com/api/student/TTC0165', {
               headers:{
                'Content-Type': 'application/json',
                'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC',
                'Authorization': `Bearer ${accessToken}`
                            },
                  data: {
                            id:'TTC0163',
                            password:'123456'
                        }
             
                    })
    const deleteUser = await userInfo.json();
    console.log(deleteUser);
    expect (userInfo.status()).toBe(200);
    expect(deleteUser.message).toBe('Student deleted successfully')
    
        
        });
     
     

     

    















     