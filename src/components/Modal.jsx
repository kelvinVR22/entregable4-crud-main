import { IconSquareRoundedX } from "@tabler/icons-react"
import { EMAIL_VALIDATIONS, FIRST_NAME_VALIDATIONS, LAST_NAME_VALIDATIONS, PASSWORD_VALIDATIONS } from "../constants/formValidations"

const Modal = ({isShowModal, handleCloseModal, handleSubmit, register, submit, idUserToEdit, errors}) => {

  return (
    <section className={`fixed top-0 bottom-0 left-0 right-0 bg-slate-400 flex justify-center items-center px-3 transition-all duration-300 ${isShowModal ? "visible opacity-100" : "invisible opacity-0"}`}>
        <form onSubmit={handleSubmit(submit)} className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_270px)] relative"  >
        <h2 className="text-center">{idUserToEdit ? "Actualizar Usuario" :"Crear Usuario"}</h2>
        <button onClick={handleCloseModal} type="button" className="text-red-500 absolute top-2 right-2 hover:text-red-600 transition-colors"><IconSquareRoundedX /></button>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="email">Correo</label>
          <input className="outline-none border px-2 py-1 rounded-sm" id='email' name="email" type="text" {...register("email", EMAIL_VALIDATIONS)} />
          {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="password">Contraseña</label>
          <input className="outline-none border px-2 py-1 rounded-sm" id='password' name="password" type="text" {...register("password", PASSWORD_VALIDATIONS)}/>
          {errors.password && (
          <span className="text-xs text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="first_name">Nombres</label>
          <input className="outline-none border px-2 py-1 rounded-sm" id='first_name' name="first_name" type="text" {...register("first_name", FIRST_NAME_VALIDATIONS)} />
          {errors.first_name && (
          <span className="text-xs text-red-500">{errors.first_name.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="last_name">Apellidos</label>
          <input className="outline-none border px-2 py-1 rounded-sm" id='last_name' name="last_name" type="text" {...register("last_name", LAST_NAME_VALIDATIONS)} />
          {errors.last_name && (
          <span className="text-xs text-red-500">{errors.last_name.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="birthday">Cumpleaños</label>
          <input className="outline-none border px-2 py-1 rounded-sm" id='birthday' name="birthday" type="date" {...register("birthday")}/>
        </div>
        <button className="bg-blue-500 text-white p-2 px-4 uppercase font-semibold hover:bg-blue-600 transition-colors" type="submit">{idUserToEdit ? "Guardar Cambios" :"Crear Usuario"}</button>
      </form>
    </section>
  )
}

export default Modal