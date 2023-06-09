# sit323-737-2023-t1-prac4p

sit323/737-2023-t1-prac4p
Run the command to install node modules
`npm install`

Server starts on port 5000 at the follwing endpoint
http://localhost:5000/

Accepts following API endpoints

`http://localhost:5000/getToken`
returns a valid JWT token

`http://localhost:5000/api/add`
Requires header (`Authorization`) with a valid token
Requires two variables `a` and `b`
returns `a+b`

`http://localhost:5000/api/subtract`
Requires header (`Authorization`) with a valid token
Requires two variables `a` and `b`
returns `a-b`

`http://localhost:5000/api/divide`
Requires header (`Authorization`) with a valid token
Requires two variables `a` and `b`
returns `a/b`

`http://localhost:5000/api/multiply`
Requires header (`Authorization`) with a valid token
Requires two variables `a` and `b`
returns `a*b`

To test authentication:
make a get request to the following url

`http://localhost:5000/getToken`
Copy and save the token

Make a post request to
`http://localhost:5000/api/multiply`

Supply two variables 'a' and 'b' as JSON data. You may try to imput string and other invalid input to test validations.
This endpoint requires you to set the `Authorization` header. Without the header you will be denied access.
