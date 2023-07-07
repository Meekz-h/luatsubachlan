import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

function PracticeAreas() {
  const dispatch = useDispatch();
  const { en } = useSelector((state) => state.language);

  return (
    <>
      <div className="flex m-auto pb-50 text-red mt-20">
        <div className="m-auto">
          <div className="flex m-auto mb-10">
            <div className="flex m-auto">
              <div className="tracking-loose flex flex-wrap mx-auto mt-24">
                <div className="uppercase font-bold text-5xl mb-20 justify-center sm:text-center">
                  {!en ? <>LĨNH VỰC THỰC HÀNH</> : <>Practice Areas</>}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 m-auto font-normal mt-24 gap-6 text-center space-x-10">
            <div className="flex flex-col m-auto font-bold text-3xl mt-0 mb-24">
              {!en ? <>THƯƠNG TÍCH CÁ NHÂN</> : <>PERSONAL INJURY</>}
              <div className="flex flex-col m-auto font-normal text-lg mt-0">
                {!en ? (
                  <>
                    <ul className="">
                      <li>• Tai nạn ô tô</li>
                      <li>• Thương tích do động vật gây ra</li>
                      <li>• Trượt và ngã</li>
                      <li>• Tai nạn dẩn đến tử vong</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="">
                      <li>• Auto Accident</li>
                      <li>• Animal Liability</li>
                      <li>• Slip and Fall</li>
                      <li>• Wrongful Death</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col m-auto font-bold text-3xl mt-0 mb-24">
              {!en ? <>GIA ĐÌNH</> : <>FAMILY LAW</>}
              <div className="flex flex-col m-auto font-normal text-lg">
                {!en ? (
                  <>
                    <ul className="">
                      <li>
                        • Thỏa thuận quyền sở hửu trước hôn nhân và sau hôn nhân
                      </li>
                      <li>• Ly hôn</li>
                      <li>• Quyền nuôi con</li>
                      <li>• Xác định phụ hệ</li>
                      <li>• Quyền Giám hộ</li>
                      <li>• Hủy bỏ quyền làm cha mẹ</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="">
                      <li>• Pre-nuptial and Post-Nuptial Agreements</li>
                      <li>• Dissolution of Marriage</li>
                      <li>• Child Custody</li>
                      <li>• Child Support</li>
                      <li>• Paternity</li>
                      <li>• Guardianship</li>
                      <li>• Termination of Parental Rights</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col m-auto font-bold text-3xl mt-0 mb-24">
              {!en ? <>KINH DOANH</> : <>BUSINESS TRANSACTIONS</>}
              <div className="flex flex-col m-auto font-normal text-lg">
                {!en ? (
                  <>
                    <ul className="">
                      <li>• Vi phạm hợp đồng</li>
                      <li>
                        • Sai lầm kinh doanh (vi phạm nghĩa vụ ủy thác, can
                        thiệp sai trái vào hợp đồng, v.v.)
                      </li>
                      <li>• Sự gian lận trong kinh doanh</li>
                      <li>• Mua bán và sáp nhập cȏng ty</li>
                      <li>• Thỏa thuận không cạnh tranh</li>
                      <li>• Tranh chấp với người cộng tác</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="">
                      <li>• Breach of contract</li>
                      <li>
                        • Business torts (breach of fiduciary duty, tortious
                        interference with contract, etc.)
                      </li>
                      <li>• Fraud</li>
                      <li>• Mergers and acquisitions</li>
                      <li>• Non-competition agreements</li>
                      <li>• Partnership disputes</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col m-auto font-bold text-3xl mt-0 mb-24 break-normal">
              {!en ? (
                <>
                  DỊCH THUẬT/PHIÊN DỊCH <br /> VÀ CÁC DỊCH VỤ KHÁC
                </>
              ) : (
                <>
                  TRANSLATION / INTERPRETATION <br /> AND OTHER SERVICES
                </>
              )}

              <div className="flex flex-col m-auto font-normal text-lg">
                <hr />
                {!en ? (
                  <>
                    <ul className="">
                      <li>
                        • Phiên dịch, chứng nhận, và hợp pháp hóa các tài liệu
                        (sử dụng trong và ngoài Hoa Kỳ)
                      </li>
                      <li>
                        • Ủy thác quyền chăm sóc sức khỏe và những ước nguyện •
                        cuối đời
                      </li>
                      <li>• Chuyển quyền sở hữu bất động sản</li>
                      <li>
                        • Giấy ủy quyền (được sử dụng trong và ngoài Hoa Kỳ)
                      </li>
                      <li>• Cȏng hàm độc than</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="">
                      <li>
                        • Translate, certify, and legalize documents (used in
                        and outside the United States)
                      </li>
                      <li>• Healthcare surrogate and advanced directives</li>
                      <li>• Transfer ownership of real estate</li>
                      <li>
                        • Power of Attorney (used in and outside the United •
                        States)
                      </li>
                      <li>Single Status Certification</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row m-auto mt-5">
            <div className="flex flex-col m-auto font-bold text-3xl mb-24">
              {!en ? <>LÊN KẾ HOẠCH DI SẢN</> : <>ESTATE PLANNING</>}
              <div className="flex flex-col m-auto font-normal text-lg">
                {!en ? (
                  <>
                    <ul className="">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PracticeAreas;
