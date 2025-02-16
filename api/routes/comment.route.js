import express from 'express'
import {createComment, getComment} from '../controllers/comment.controller.js'
// import { verifyToken } from "../u/verifyUser.js"

const router = express.Router()

router.post('/create', createComment)
router.get('/get/getcomments/:postId', getComment)


export default router 