import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios";

const Home = () => {

  const [prod, setProd] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setProd(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
      <div className="container text-center">
      <div className="row"></div>
      {prod.map((prod_val) => {
        return (

          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px" />
              <div class="card-body">
                <h5 class="card-title">{prod_val.name}</h5>
                <p class="card-text">{prod_val.phone}</p>
                <a href="#" class="btn btn-primary">{prod_val.website}</a>
              </div>
            </div>
          </div>
        )

      })}
    </div>
  )
}

export default Home
