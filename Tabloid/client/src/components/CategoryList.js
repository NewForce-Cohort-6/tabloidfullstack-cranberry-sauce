import React, { useState, useEffect } from 'react'
import { getAllCats, getCatById } from '../Managers/CategoryManager'
import Category from './Category'
import { useNavigate } from 'react-router-dom';


const CategoryList = () => {
 // Declaring a new state variable
  const [category, setCategory] = useState([])

 // assigning useNavigate to the variable navigate
  const navigate = useNavigate();

  // setting state
  const getCategories = () => {
    getAllCats().then((allCats) => setCategory(allCats))
  }

  // calling state 
  useEffect(() => {
    getCategories()
  }, [])

  // deletion handler
  const handleDelete = (id) => {
    getCatById(id).then((event) => {navigate(`/category/delete/${id}`)})
}
  //mapping through and returning a list of category names
  //keys are pulling from the same place and set to the id of each category
  if (category.posts?.categoryId){
    return (
    <>
      <div className="container">
        <div className="row justify-content-center">
            <div className="card-column">
          {/* mapping happens here */}
          {category.map((cat) => (
              <tr>
                <td >
                  <Category key={cat.id} cat={cat} />
                </td>   
                  </tr>
              ))}
              </div>
        </div>
      </div>
    </>
  );
  } else {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
              <div className="card-column">
            {/* mapping happens here */}
            {category.map((cat) => (
                <tr>
                  <td >
                    <Category key={cat.id} cat={cat} />
                  </td>   
                   {/* this is the delete button. It pulls from line 25, handleDelete*/}
                <button style={{appearance: 'none', WebkitAppearance: 'none', width: '250', border: 'none', margin: '3px', padding: '6px', fontWeight: '600', boxShadow: '0 0 15px 4px rgba(0,0,0,0.06)' }} onClick={(e) => {
                      handleDelete(cat.id)
                    }}>Delete</button>
                    </tr>
                ))}
                </div>
          </div>
        </div>
      </>
    );
  }
  
};

//exporting CategoryList to be used elsewhere
export default CategoryList;