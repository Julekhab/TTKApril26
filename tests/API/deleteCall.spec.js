import {  test, expect} from "@playwright/test";

test('delet a user', async ({request})=>{

    const loginResponse = await request.post('https://qa.taltektc.com/api/login', {
        headers:{
            'Content-Type': 'application/json',
            'api_token': 'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
                            },
                        data: {
                            id:'TTC0163',
                            password:'123456'
                        }
        })

       expect(loginResponse.status()).toBe(200);
       console.log(loginResponse);

       const loginBody = await loginResponse.json();
       expect(loginBody.message).toBe('Successfully signed in');
       console.log(loginBody);

       const accessToken = loginBody.access_token;
       const studentId = loginBody.student_id;

    console.log('Access token:', accessToken);
    console.log('studentId:', studentId);

    const userInfo = await request.delete('https://qa.taltektc.com/api/student/TTC0163', {
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
    


    })













//  "id": 163,
//             "student_id": "TTC0163",
//             "first_name": "Nipa",
//             "last_name": "Doe",
//             "email": "nipa1784737417373@taltektc.com",
//             "birthdate": "1999-03-14",
//             "gender": "female",