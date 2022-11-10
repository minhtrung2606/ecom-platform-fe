import styled from 'styled-components'

import { ColorPalette as CP } from "../libs/Colors"
import { SCREEN_SIZE } from '../libs/Media'

import Container from "./Container"
import DottedSeparator from './DottedSeparator'

const AppFooterWrapper = styled.footer`
  height: auto;
  min-height: 30rem;
  background-color: ${CP.BasePrimary900};
  color: ${CP.White};
  padding: 6rem 0;
  position: relative;

  ${SCREEN_SIZE.From.Desktop} {
    min-height: 42rem;
  }
`

// https://www.pngegg.com/ where footer images are available to download
const FooterBottomImgWrapper = styled.div`
  min-height: 30rem;
  background-image: url('${props => props.imgUrl}');
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0rem;
  ${props => props.right ? 'right: -3rem;' : 'left: -3rem;'}
  width: 100%;
  opacity: 0.8;
  background-size: contain;
  background-position-x: ${props => props.right ? 'right' : 'left'};
  background-position-y: bottom;
  z-index: 1;

  ${SCREEN_SIZE.Below.Tablet} {
    opacity: 0.7;
  }

  ${SCREEN_SIZE.Below.MobileL} {
    opacity: 0.6;
  }

  ${SCREEN_SIZE.From.Desktop} {
    height: 40rem;
  }
`

const ContentContainer = styled(Container)`
  position: relative;
  z-index: 2;
  height: 100%;
`

const StyledTitle = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
  color: ${CP.BaseGray100};
`

const StyledP = styled.p`
  text-align: center;
  color: ${CP.BaseGray300};
`

const HighlightedText = styled.span`
  color: ${CP.BaseSecondary400};
  font-size: 1.2rem;
`

const AppFooter = () => (
  <AppFooterWrapper>
    <ContentContainer>
      <div className="row h-100">
        <div className="col-xl-5 col-md-6 mb-md-0 col-12 mb-4">
          <StyledTitle>Lời Nhắn Nhủ</StyledTitle>
          <DottedSeparator color={CP.BaseGray100} />
          <StyledP>
            Với sứ mệnh &ldquo;mang đến niềm vui và sự hài lòng cho khách hàng&rdquo;
            QUEEN FLOWERS rất vinh dự và luôn nỗ lực hết mình
            để hoàn thành sứ mệnh cao cả mà Shop đã đặt ra.
          </StyledP>
          <StyledP>
            Đối với QUEEN FLOWERS, bạn sẽ tha hồ lựa chọn những loại hoa tươi khác nhau
            được nhập trực tiếp mỗi ngày. Chính vì thế, bạn sẽ hoàn toàn yên tâm không lo
            hoa héo, hoa cũ, hoa giao trễ giờ...QUEEN FLOWERS lấy
            &ldquo;Dịch vụ Uy Tín - Tư vấn Nhiệt Tình - Giao hàng Nhanh Chóng&rdquo; để mọi đơn hàng
            dù gần hay xa đều được hoàn thành nhanh chóng nhất.
          </StyledP>
          <StyledP>
            Hiện tại, QUEEN FLOWERS giao hoa đến 63 tỉnh thành. Quý khách có thể liên hệ
            đặt hàng qua Zalo để được tư vấn và đặt hàng.
          </StyledP>
        </div>
        <div className="col-xl-7 col-md-6 col-12">
          <StyledTitle>Về Chúng Tôi</StyledTitle>
          <DottedSeparator color={CP.BaseGray100} />
          <StyledP><strong>Công ty hoa QUEEN FLOWERS</strong></StyledP>
          <StyledP>
            Số giấy phép ĐKKD: xxxxxxxxxx do sở Kế hoạch và Đầu Tư TPHCM cấp
          </StyledP>
          <StyledP>
            CEO QUEEN FLOWERS: Mai Trần
          </StyledP>
          <StyledP>
            <i className="bi bi-dot"></i>
          </StyledP>
          <StyledP>
            227 Hoàng Văn Thụ, Phường 8, Quận Phú Nhuận, Tp. Hồ Chí Minh
          </StyledP>
          <StyledP>
            (+84) 386 450 897
          </StyledP>
        </div>
      </div>
      <div></div>
    </ContentContainer>
    <FooterBottomImgWrapper imgUrl="/left.png"/>
    <FooterBottomImgWrapper imgUrl="/right.png" right />
  </AppFooterWrapper>
)

export default AppFooter
