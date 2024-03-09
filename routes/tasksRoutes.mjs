// Importa o módulo express, que é um framework web para Node.js
import express from 'express'

// Importa o controller TaskController, que contém a lógica para lidar com as solicitações relacionadas às tarefas
import TaskController from '../controllers/TaskController.mjs'

// Cria um novo roteador usando a função Router() do express
const router = express.Router()

// Define uma rota GET para '/add', que será manipulada pelo método createTask do TaskController
router.get('/add', TaskController.createTask)

// Define uma rota POST para '/add', que será manipulada pelo método createTaskSave do TaskController
router.post('/add', TaskController.createTaskSave)

router.post('/remove', TaskController.removeTask)

router.get('/edit/:id', TaskController.updateTask)

router.post('/updatestatus', TaskController.toggleTaskStatus)

// Define uma rota GET para '/', que será manipulada pelo método showTasks do TaskController
router.get('/', TaskController.showTasks)

// Exporta o roteador para que ele possa ser utilizado em outros módulos
export default router
