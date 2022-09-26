import React from 'react'

const Veiculo = ({veiculo, deleteVeiculo, editVeiculo}) => {
  return (
    <tr key={veiculo.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 ">{veiculo.veiculo}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 ">{veiculo.marca}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 ">{veiculo.ano}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 ">{veiculo.descricao}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 ">{veiculo.vendido}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 ">{veiculo.created}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 ">{veiculo.updated}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <a
          onClick={(e, id) => editVeiculo(e, veiculo.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteVeiculo(e, veiculo.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  )
}

export default Veiculo