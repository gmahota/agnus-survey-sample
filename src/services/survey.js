import axios from "axios";

function save(data) {
    console.log(data)
  const survey ={
      date:new Date(),
      title:"Inquérito de Avaliação de Satisfação do Cliente",
      description:"Inquérito de Avaliação de Satisfação do Cliente",
      province:"Maputo",
      branch:"Balção do Jat",
      items: Object.keys(data).map(key => {
          return {
            type:key,
            value:data[key]
          }          
      })

  }
  axios.post("https://agnussurvey.herokuapp.com/api/surveys",survey)  
}

export { save };
