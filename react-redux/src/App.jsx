import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./components/Header"
import DisplayCounter from "./components/DisplayCounter"
import PrivacyMess from "./components/PrivacyMess"
import Controls from "./components/Controls"
import Container from "./components/Container"
import { useSelector } from "react-redux"

function App() {
  const privacy = useSelector(store=>store.privacy);

  return (
    <center>
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy?<PrivacyMess/>:<DisplayCounter/>}
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Controls></Controls>
            </div>
          </div>
        </div>
      </Container>
    </center>
  );
}

export default App
