import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>Biocoop HomePage</h1>
      <Link className="navbar-brand" to="/inscription">
        <button>Créer un compte ?</button>
      </Link>
    </div>
  )
}

export default HomePage
