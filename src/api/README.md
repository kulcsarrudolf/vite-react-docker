# useApi Hook

A custom React hook built on top of Axios to simplify API requests in your components.

## Features

- Supports HTTP methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- Tracks loading, error, and response data states
- Easy integration with your API layer

## Installation

Make sure you have `axios` installed in your project:

```bash
npm install axios
```

## Usage

### Basic Setup

```tsx
import React, { useEffect } from "react";
import { useApi } from "./useApi";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserComponent = () => {
  const { data, error, loading, request } = useApi<User[]>();

  useEffect(() => {
    request("GET", "/users");
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserComponent;
```

### Making POST Requests

```tsx
const createUser = async () => {
  await request("POST", "/users", {
    data: {
      name: "John Doe",
      email: "john@example.com",
    },
  });
};
```

## API

### `useApi<T>()`

Returns an object:

- `data`: The response data from the request (or `null`).
- `error`: Any error that occurred during the request.
- `loading`: Boolean indicating if the request is in progress.
- `request(method, url, options)`: Function to perform the API request.

### Parameters

- `method`: One of `"GET"`, `"POST"`, `"PUT"`, `"PATCH"`, `"DELETE"`
- `url`: API endpoint (string)
- `options`: AxiosRequestConfig (optional)

## License

MIT
