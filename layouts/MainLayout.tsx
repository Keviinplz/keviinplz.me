import Header from "components/Header"
import Content from "components/Content"
import Footer from "components/Footer"

type LayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}

export default MainLayout;