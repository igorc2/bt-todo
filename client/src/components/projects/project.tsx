import axios from 'axios'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderControl,
  CardTitle,
} from '../ui/card'
import { BiTrash } from 'react-icons/bi'
import { Task } from '../tasks/task'
import { useProjects } from './projects-context'
import { CreateTask } from '../tasks/create-task'
import { EditProject } from './edit-project'

interface Tasks {
  id: number
  name: string
  finishDate?: Date
  description?: string
  statusId: number
}

interface ProjectProps {
  id: number
  name: string
  tasks: Tasks[]
}

export const EStatusCode = {
  TODO: 1,
  DONE: 2,
}

export function Project({ id, name, tasks }: ProjectProps) {
  const { setProjects, projects } = useProjects()

  const handleDeleteProject = () => {
    const accessToken = localStorage.getItem('accessToken')
    axios
      .delete(`http://localhost:3700/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => {
        setProjects(
          projects.filter((project) => {
            return project.id !== id
          })
        )
      })
  }

  const todoTasks = tasks
    ? tasks.filter((task) => task.statusId === EStatusCode.TODO)
    : []
  const doneTasks = tasks
    ? tasks.filter((task) => task.statusId === EStatusCode.DONE)
    : []

  return (
    <Card>
      <CardHeader className="border-b border-slate-200">
        <CardTitle>{name}</CardTitle>
        <CardHeaderControl className="ml-3">
          <EditProject projectId={id} projectName={name} />
          <div className="cursor-pointer">
            <BiTrash onClick={handleDeleteProject} />
          </div>
        </CardHeaderControl>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-l text-gray-900 mb-2">To do</div>
        {todoTasks && todoTasks.length ? (
          todoTasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              name={task.name}
              finishDate={task?.finishDate}
              projectId={id}
              statusId={task.statusId}
            />
          ))
        ) : (
          <div className="text-gray-500 text-sm mb-4">
            Nothing to do? Try to add some tasks :)
          </div>
        )}
        <div className="text-l text-gray-900 mb-2">Done</div>
        {doneTasks && doneTasks.length ? (
          doneTasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              name={task.name}
              finishDate={task?.finishDate}
              projectId={id}
              statusId={task.statusId}
            />
          ))
        ) : (
          <div className="text-gray-500 text-sm">Nothing done yet :(</div>
        )}
      </CardContent>
      <CardFooter className="border-t border-slate-200 pt-6">
        <CreateTask projectId={id} />
      </CardFooter>
    </Card>
  )
}
