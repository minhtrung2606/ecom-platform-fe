import Card from "./Card"

const Services = () => (
  <div className='row'>
    <div className="col-xl-3 col-lg-6 col-sm-6 mb-3 offset-xl-3">
      <Card title="Miễn phí vận chuyển" icon="truck" fullHeight>
        Khi giao nội thành Thành phố Hồ Chí Minh
      </Card>
    </div>
    <div className="col-xl-3 col-lg-6 col-sm-6 mb-3">
      <Card title="Miễn phí đổi - Bảo hành 03 ngày" icon="arrow-left-right" fullHeight>
        Sẵn sàng hỗ trợ 24/7
      </Card>
    </div>
  </div>
)

export default Services
