import App from '../components/App'
import Banners from '../components/Banners'
import Section from '../components/Section'

export default function Home() {
  return (
    <App>
      <Banners />
      <Section title="Giao nhanh Quận 7">
        <div>Section(Giao nhanh Quận 7)</div>
      </Section>
    </App>
  )
}
