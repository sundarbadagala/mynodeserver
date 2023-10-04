## API Reference

#### Base URl https://mynodeserver-x5tb.onrender.com/

#### Post user registration

```http
  POST /register
```

| ReqBody         | Type   |
| --------------- | ------ |
| username        | string |
| email           | string |
| password        | string |
| confirmpassword | string |

#### Post user login

```http
  POST /login
```

| ReqBody  | Type   |
| -------- | ------ |
| email    | string |
| password | string |

#### Get user details

```http
  GET /profile
```

#### Update user password

```http
  PUT /profile
```

| ReqBody  | Type   |
| -------- | ------ |
| password | string |

#### Get all users

```http
  GET /users
```

#### Get user by name (query params)

```http
  GET /user?username=${username}
```

#### Get user by name (path params)

```http
  GET /user/${username}
```

#### Get user messages

```http
  GET /message
```

#### Get user messages by email

```http
  GET /message/${email}
```

#### Get all messages

```http
  GET /message/all
```

#### Post user message

```http
  POST /message/post
```

| ReqBody | Type   |
| ------- | ------ |
| text    | string |

#### Delete user message by path param

```http
  DELETE /message/${id}
```

#### Delete user message by query param

```http
  DELETE /message?id=${id}
```
