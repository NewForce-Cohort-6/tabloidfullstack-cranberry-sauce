import React from 'react'

// Our category object? I think?
const Category = ({ cat }) => {
  return <>
  <tr>
    <td className="row justify-content-center">
    {cat.name}
    </td>
  </tr>
  </>
}

// Exporting the category object for use elsewhere
export default Category
