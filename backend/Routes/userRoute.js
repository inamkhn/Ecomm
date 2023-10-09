import express from 'express'
import {createUser,login,logout} from '../Controller/userController.js'

const router = express.Router()


router.route('/create').post(createUser)
router.route('/login').post(login)
router.route('/logout').get(logout)



export default router