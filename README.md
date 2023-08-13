
# RemBlog

A dynamic platform for sharing thoughts, insights, and information through blog posts. Connect with a community of writers and readers while exploring diverse topics and engaging in meaningful discussions.


## Authors

- [@isiakaabd](https://www.github.com/isiakaabd)


## Tech Stack

**Client:** Vite, Typescript, Material UI

**Server:**  MongoDB, NodeJs, Express


## API Reference

#### Get all posts

```http
  GET /api/posts/?author=Remlad
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `author` | `string` | **Not Required**. Your UserName |

#### Get item

```http
  GET /api/post/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APP_BASE_URL`



## Appendix

Any additional information goes here


## 🚀 About Me
I'm a full stack developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/isiakaabd/Remblog-FE
```

Go to the project directory

```bash
  cd remblog
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

