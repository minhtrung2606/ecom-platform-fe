import App from '../components/App'
import Banners from '../components/Banners'
import Section from '../components/Section'
import { CollorPalette } from '../libs/Colors'

export default function Home() {
  return (
    <App>
      <Banners />
      <Section title="Sản phẩm mới">
        <div>Section(Sản phẩm mới)</div>
      </Section>
      <Section title="Giao nhanh Quận 7">
        <div>Section(Giao nhanh Quận 7)</div>
      </Section>
      <Section title="Quan tâm nhiều nhất">
        <div>Section(Quan tâm nhiều nhất)</div>
      </Section>
      <Section
        variants={{
          bgColor: CollorPalette.BackgroundColor,
        }}
      >
        Dịch vụ
      </Section>
      <Section title="Khách hàng nói về Queen Flowers" centerTitle>
        <div>Section(Khách hàng nói về Queen Flowers)</div>
      </Section>
    </App>
  )
}
