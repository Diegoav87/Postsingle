const dev = {
  url: "http://127.0.0.1:8000/",
};

const prod = {
  url: "https://postsingle.herokuapp.com/",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
