import Banner from "./components/Banner/Banner"
import CallForPaper from "./components/CallForPaper/CallForPaper"
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
        <section>Commitee</section>
        <section>Important Date</section>
        <section>Registration</section>
        <section>Submission</section>
        <section>Contact</section>
      </main>
    </>
  )
}

export default App
