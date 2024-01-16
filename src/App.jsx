import Banner from "./components/Banner/Banner"
import CallForPaper from "./components/CallForPaper/CallForPaper"
import Commitee from "./components/Commitee/Commitee"
import ImportantDates from "./components/ImportantDates/ImportantDates"
import Navbar from "./components/Navbar/Navbar"
import Speakers from "./components/Speakers/Speakers"

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
        <section>Registration</section>
        <section>Submission</section>
        <section>Contact</section>
      </main>
    </>
  )
}

export default App
