import axios from "axios";

function save(data) {
  // Simple POST request with a JSON body using fetch
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };
//   fetch("http://localhost:5000/api/surveys", requestOptions);


  axios.post("http://localhost:5000/api/surveys",data)

  console.log(data);
}

export { save };
