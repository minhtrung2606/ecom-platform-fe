import Card from './Card'

const Services = () => (
  <div className='row'>
    <div className="col-xl-3 col-lg-6 col-sm-6 mb-3 mt-3 offset-xl-3">
      <Card
        title="Miễn phí vận chuyển"
        iconName="truck"
        fullHeight
        variant="secondary"
      >
        Khi giao nội thành Thành phố Hồ Chí Minh
      </Card>
    </div>
    <div className="col-xl-3 col-lg-6 col-sm-6 mb-3 mt-3">
      <Card
        title="Miễn phí đổi - Bảo hành 03 ngày"
        iconName="arrow-left-right"
        fullHeight
        variant="secondary"
      >
        Sẵn sàng hỗ trợ 7/7
      </Card>
    </div>
  </div>
)

export default Services
