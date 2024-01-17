import Banner from "./components/Banner/Banner"
import CallForPaper from "./components/CallForPaper/CallForPaper"
import Commitee from "./components/Commitee/Commitee"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import ImportantDates from "./components/ImportantDates/ImportantDates"
import Navbar from "./components/Navbar/Navbar"
import Registration from "./components/Registration/Registration"
import Speakers from "./components/Speakers/Speakers"
import Submission from "./components/Submission/Submission"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <CallForPaper />
        <Speakers />
        <Commitee />
        <ImportantDates />
        <Registration />
        <Submission />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
