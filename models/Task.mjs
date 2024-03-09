import{ DataTypes } from 'sequelize'
import db from '../db/conn.mjs'

const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})
export default Task