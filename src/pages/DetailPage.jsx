import Detail from "../components/detail/Detail"
import Sidebar from "../components/Sidebar/Sidebar"

const DetailPage = () => {
  return (
    <>
    <section style={{display: 'flex'}}>
        <Sidebar />
        <Detail />
    </section>
       
    </>
  )
}

export default DetailPage