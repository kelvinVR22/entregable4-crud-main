import { IconUser } from "@tabler/icons-react"
import { IconPencilCode, IconTrash } from "@tabler/icons-react"
import ConfirmationModal from "./ConfirmationModal"
import { useState } from "react"

const UserCard = ({user, deleteUser, handleClickEdit}) => {
  const [showModal, setShowModal] = useState(false)

  const handleDeleteClick = () => {
      setShowModal(true);
  }

  const confirmDelete = () => {
      deleteUser(user.id);
      setShowModal(false);
  }

  const cancelDelete = () => {
      setShowModal(false);
  }

  return (
    <article className="border-2 p-2 rounded-md grid gap-2">
        <h5 className="flex gap-2 items-center text-lg font-bold"><IconUser /> {user.first_name} {user.last_name}</h5>
        <hr />
      <ul className="grid gap-2 text-gray-800">
         <li><span className="font-semibold grid gap-2 text-red-800">Correo: </span>{user.email}</li>
         <li><span className="font-semibold grid gap-2 text-red-800">Cumpleaños: </span>{user.birthday}</li>
         <hr />
        </ul>
        <div className="flex gap-2 justify-end">
            <button onClick={() => handleClickEdit(user)} className="bg-yellow-400  hover:bg-yellow-500 transition-colors text-white p-3 rounded-md" > 
                <IconPencilCode  />
                </button>
            <button onClick={handleDeleteClick} className="bg-red-500 hover:bg-red-600 transition-colors text-white p-3 rounded-md" >
                <IconTrash />
            </button>
        </div>

        {showModal && (
                <ConfirmationModal
                    message="¿Estás seguro de que quieres eliminar a este usuario?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
    </article>
  )
}

export default UserCard