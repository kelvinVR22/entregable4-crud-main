import { IconUsersPlus } from "@tabler/icons-react"

const Header = ({handleOpenModal}) => {
  return (
    <header className="flex justify-between p-2">
        <h1 className="text-xl font-bold">CREAR USUARIO</h1>
        <button onClick={handleOpenModal} className="bg-blue-500 text-white p-2 px-4 uppercase font-semibold hover:bg-blue-600 transition-colors flex gap-2">Agregar Usuario <IconUsersPlus/></button>
    </header>
  )
}

export default Header