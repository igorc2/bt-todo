'use client'

import { ProjectsProvider } from '@/components/projects/projects-context'
import { ProjectsList } from '@/components/projects/projects-list'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Home() {
  const queryClient = new QueryClient()
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-slate-100">
      <ProjectsProvider>
        <QueryClientProvider client={queryClient}>
          <ProjectsList />
        </QueryClientProvider>
      </ProjectsProvider>
    </main>
  )
}
