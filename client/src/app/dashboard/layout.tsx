import { UserMenu } from '@/components/authentication/user-menu'
import { Providers } from '@/lib/providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="min-h-screen">
        <div className="w-full bg-slate-700 h-14 ">
          <div className="flex justify-between items-center h-full px-12">
            <div className="text-white">Bolttech TODO List</div>
            <UserMenu />
          </div>
        </div>
        {children}
      </div>
    </Providers>
  )
}
