import App from '../components/App'
import Banners from '../components/Banners'
import Card from '../components/Card'
import FlexWrapper from '../components/FlexWrapper'
import Section from '../components/Section'
import { CollorPalette } from '../libs/Colors'
import ProductCardList from '../components/ProductCardList';

export default function Home() {
  return (
    <App>
      <Banners />
      <Section title="Sản phẩm mới">
        {/*<div>Section(Sản phẩm mới)</div>*/}
        <ProductCardList count={4} />
      </Section>
      <Section title="Giao nhanh Quận 7">
        {/*<div>Section(Giao nhanh Quận 7)</div>*/}
        <ProductCardList count={6} />
      </Section>
      <Section title="Quan tâm nhiều nhất">
        {/*<div>Section(Quan tâm nhiều nhất)</div>*/}
        <ProductCardList count={7} />
      </Section>
      <Section
        variants={{
          padding: '6rem 0',
          bgColor: CollorPalette.BaseSecondary50,
        }}
      >
        <FlexWrapper className="width-by-children" quantity={4}>
          <Card title="Miễn phí vận chuyển" icon="truck">
            Khi giao nội thành Thành phố Hồ Chí Minh
          </Card>
          <Card title="Miễn phí đổi - Bảo hành 03 ngày" icon="arrow-left-right">
            Sẵn sàng hỗ trợ 24/7
          </Card>
        </FlexWrapper>
      </Section>
      <Section title="Khách hàng nói về Queen Flowers" centerTitle>
        <div>Section(Khách hàng nói về Queen Flowers)</div>
      </Section>
    </App>
  )
}
