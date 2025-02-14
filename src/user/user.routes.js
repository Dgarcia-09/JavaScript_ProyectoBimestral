import { Router } from "express"
import { getUserById, getUsers, deleteUser, updatePassword, updateUser, actualizarFotoPerfil, modifyRole, deleteMyUser } from "./user.controller.js"
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator, actualizarFotoPerfilValidator, modifyRoleValidation } from "../middlewares/user-validators.js"
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router()

router.patch(
    "/modifyRole/:uid", 
    modifyRole, 
    modifyRoleValidation )

router.get(
    "/findUser/:uid", 
    getUserByIdValidator, 
    getUserById)

router.get(
    "/", 
    getUsers)

router.delete(
    "/deleteUser/:uid", 
    deleteUserValidator, 
    deleteUser)

router.patch(
    "/updatePassword/:uid", 
    updatePasswordValidator, 
    updatePassword)

router.put(
    "/updateUser/:uid", 
    updateUserValidator, 
    updateUser)

router.patch(
    "/actualizarFotoPerfil/:uid", 
    uploadProfilePicture.single("profilePicture"),actualizarFotoPerfilValidator, actualizarFotoPerfil)

router.delete("/deleteMyUser/:uid",
    deleteMyUser
)

export default router