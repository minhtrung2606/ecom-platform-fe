import App from '../components/App'
import Banners from '../components/Banners'
import Card from '../components/Card'
import FlexWrapper from '../components/FlexWrapper'
import ProductCardList from '../components/ProductCardList'
import Section from '../components/Section'
import Services from '../components/Services'
import { ColorPalette } from '../libs/Colors'

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
      <Section
        variants={{
          padding: '6rem 0',
          bgColor: ColorPalette.BaseSecondary100,
        }}
      >
        <Services />
      </Section>
      <Section title="Khách hàng nói về Queen Flowers" centerTitle>
        <div>Section(Khách hàng nói về Queen Flowers)</div>
      </Section>
    </App>
  )
}
