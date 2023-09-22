'use client'

import { Project } from './project'
import { CreateProject } from './create-project'
import { useAuthorizedQuery } from '@/lib/useAuthorizedQuery'
import { useDispatch, useSelector } from 'react-redux'
import { selectCount } from '@/lib/redux/slices/counterSlice/selectors'
import { counterSlice } from '@/lib/redux'

interface Task {
  id: number
  name: string
  statusId: number
}

interface Project {
  id: number
  name: string
  tasks: Task[]
}

export function ProjectsList() {
  const { data, isLoading } = useAuthorizedQuery('projects')

  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <main className="flex gap-6 flex-wrap items-center p-16">
      <div className="">
        <button
          className=""
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </button>
        <span className="">{count}</span>
        <button
          className=""
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </button>
      </div>
      {Array.isArray(data) && data.length !== 0
        ? data.map((project) => (
            <Project
              id={project.id}
              name={project.name}
              tasks={project.tasks}
              key={project.id}
            />
          ))
        : null}
      <CreateProject />
    </main>
  )
}
