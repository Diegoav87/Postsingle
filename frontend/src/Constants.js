const dev = {
  url: "http://127.0.0.1:8000/",
};

const prod = {
  url: "https://postsingle.herokuapp.com/",
};

console.log(process.env.NODE_ENV);

export const config = process.env.NODE_ENV === "development" ? dev : prod;
