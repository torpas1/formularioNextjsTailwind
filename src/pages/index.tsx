import { MemberPage } from './MemberPage'
export default function Home() {
  return (
    <main className='flex justify-center items-center w-screen h-screen'>
      <MemberPage
        brand={'Comfandi'}
        logoUrl='https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg'
      />
    </main>
  )
}