let api;
if (process.env.NODE_ENV === "development") {
  api = "http://localhost:3000/"
} else {
  api = "https://blackjack-backend.herokuapp.com/"
}

//   api = "http://localhost:3000/"
// api = "https://blackjack-backend.herokuapp.com/"


export default api
