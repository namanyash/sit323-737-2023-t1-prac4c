# sit323-737-2023-t1-prac4p

sit323/737-2023-t1-prac4p
Run the command
`npm install`

Server starts on port 5000 at the follwing endpoint
http://localhost:5000/

Accepts following API endpoints

`http://localhost:5000/getToken`
returns a valid JWT token

`http://localhost:5000/api/add`
Requires header (`x-auth-token`) with a valid token
Requires two variables `a` and `b`
returns `a+b`

`http://localhost:5000/api/subtract`
Requires header (`x-auth-token`) with a valid token
Requires two variables `a` and `b`
returns `a-b`

`http://localhost:5000/api/divide`
Requires header (`x-auth-token`) with a valid token
Requires two variables `a` and `b`
returns `a/b`

`http://localhost:5000/api/multiply`
Requires header (`x-auth-token`) with a valid token
Requires two variables `a` and `b`
returns `a*b`
