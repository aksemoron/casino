let api;
console.log(process.env)
if (process.env.API === "development") {
  api = "http://localhost:3000/"
} else {
  api = "https://blackjack-backend.herokuapp.com/"
}

//   api = "http://localhost:3000/"
// api = "https://blackjack-backend.herokuapp.com/"


export default api
