import App from '../components/App'
import Banners from '../components/Banners'
import BlankSection from '../components/BlankSection'
import ProductCardList from '../components/ProductCardList'
import Section from '../components/Section'
import Services from '../components/Services'

export default function Home() {
  return (
    <App>
      <Banners />
      <Section title="Sản phẩm mới">
        <ProductCardList products={[1, 2, 3, 4]}/>
      </Section>
      <Section title="Giao nhanh Quận 7">
        <ProductCardList products={[1, 2, 3]}/>
      </Section>
      <Section title="Quan tâm nhiều nhất">
        <ProductCardList products={[1, 2, 3, 4, 5]}/>
      </Section>
      <BlankSection variant='standardLight' size="xl">
        <Services />
      </BlankSection>
      <Section title="Khách hàng nói về Queen Flowers" centerTitle>
        <div>Section(Khách hàng nói về Queen Flowers)</div>
      </Section>
    </App>
  )
}
