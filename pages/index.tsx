import {auth} from '../firebase.client'

export default function Home({}) {
  const a = auth
  console.log(a.currentUser)
  return (
    <div>
      <h1 className="text-yellow-500">Zapdos</h1>
    </div>
  );
}
