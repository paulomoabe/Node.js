// Importa o modelo Task do arquivo Task.mjs, que representa a estrutura e o comportamento de uma tarefa no aplicativo
import { raw } from 'express';
import Task from '../models/Task.mjs';

// Define a classe TaskController, que será responsável por lidar com as solicitações relacionadas às tarefas no aplicativo
export default class TaskController {
   
    // Método estático createTask, que renderiza uma página para criar uma nova tarefa
    static createTask(req, res) {
        res.render('tasks/create'); // Renderiza a view 'tasks/create' como resposta à requisição
    }
    
  // Método estático assíncrono createTaskSave, que cria e salva uma nova tarefa no banco de dados
    static async createTaskSave(req, res) {
    // Cria um objeto 'task' com base nos dados enviados no corpo da requisição (req.body)
        const task = {
            title: req.body.title,          // Obtém o título da tarefa do corpo da requisição
            description: req.body.description,  // Obtém a descrição da tarefa do corpo da requisição
            done: false,                    // Define o estado 'done' como falso (indicando que a tarefa não está concluída)
        };

        // Aguarda a criação da nova tarefa no banco de dados usando o método Task.create()
        await Task.create(task);

        // Redireciona o usuário para a rota '/tasks' após criar a nova tarefa
        res.redirect('/tasks');
    }

    static async removeTask(req, res){
        
        const id = req.body.id

        await Task.destroy({where: {id: id}})

        res.redirect('/tasks')
    }

    static async updateTask(req, res){

        const id = req.params.id

        const task = await Task.findOne({where: {id: id}, raw: true})

        res.render('tasks/edit', {task})

    }
    static async toggleTaskStatus(req, res){

        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false
        }

        await Task.update(task, {where:{id: id}})

        res.redirect('/tasks')
    }

    // Método estático showTasks, que renderiza uma página mostrando todas as tarefas existentes
    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw: true })

        res.render('tasks/all', {tasks}); // Renderiza a view 'tasks/all' como resposta à requisição
    }
}
