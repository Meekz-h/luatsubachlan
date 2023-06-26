import { leslie } from "../../assets/static";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  div,

} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Mainpage() {
      const [open, setOpen] = useState(0);

      const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
      };
      const [en, setEn] = useState(false)
    return (
      <div className="flex h-screen m-auto pb-50 text-red">
        <div className="m-auto">
          <div className="flex m-auto mt-5 mb-10">
            <div className="flex m-auto">
              <Card className="flex-row w-full h-96 max-w-[74rem]">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="w-2/5 shrink-0 m-0 rounded-r-none"
                >
                  <img
                    src={leslie}
                    alt="leslie"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody className="overflow-y-auto">
                  <div className="mb-2 text-5xl font-bold text-red">
                    Luật Sư Bach Lan
                    <button
                      onClick={() => {
                        setEn(!en);
                      }}
                      className="translation hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-sm ml-36 mt-1 align-top"
                    >
                      {!en ? <>EN</> : <>VN</>}
                    </button>
                  </div>
                  <div
                    color="white"
                    className="font-normal mb-8 overflow-y-auto text-red self-auto"
                  >
                    {!en ? (
                      <>
                        Tôi sinh ra và lớn lên ở miền Nam Việt Nam và di cư sang
                        Mỹ vào ngày 30 tháng Tư năm 1993, cùng ngày chiến tranh
                        Việt Nam kết thúc vào năm 1975. Năm tháng sau khi tôi
                        chuyển đến Tucson, Arizona, tôi đại diện cho trường của
                        mình trong một cuộc thi học sinh giỏi vòng quốc gia ở
                        Washington, DC. Chúng tôi đã không thắng nhưng chắc chắn
                        đã có một khoảng thời gian thật vui. Sau khi tôi kết hôn
                        với chồng tôi, Andy, tôi đã mở một tiệm làm móng tay và
                        anh ấy bắt đầu kinh doanh mua nhà củ sửa lại để bán lấy
                        lời. Chồng tôi và tôi rất thoải mái về mặt tài chính
                        nhưng vẩn không hài lòng với cuộc sống. Tôi quyết định
                        quay trở lại trường học và Andy hỗ trợ tȏi hoàn toàn.
                        Andy không chỉ chăm sóc hai đứa trẻ nhỏ và tôi mà còn
                        điều hành cả hai công việc kinh doanh khi tôi học tại
                        trường Đại học Arizona. Tôi đã tốt nghiệp xuất sắc với
                        bằng cử nhân khoa học chính trị, được học Trường Luật
                        Duyên Hải Florida trên phần Học bổng của Thống đốc, và
                        tốt nghiệp trường luật với bằng danh dự. Kể từ khi được
                        nhận vào Hội Đoàn Luật Sư của bang Florida Bar vào năm
                        2009, tôi đã xử lý các vụ kiện liên quan đến thương tích
                        cá nhân, tranh chấp dân sự, kiện tụng kinh doanh, vi
                        phạm hợp đồng, và các vấn đề gia đình. Gia đình tôi và
                        tôi đã đi du lịch nhiều nơi, nhưng không có nơi nào mà
                        chúng tôi yêu thích nhiều như Jacksonville, Florida.
                        Trong thời gian rảnh rỗi, tôi chăm sóc vườn hoa của mình
                        và thu hoạch trái cây và rau quả từ vườn của Andy, hay
                        là nhặt những quả trứng tươi từ chuồng gà của anh ấy.
                      </>
                    ) : (
                      <>
                        I was born and raised in South Vietnam and immigrated to
                        the US on April 30, 1993, the same date the Vietnam War
                        ended in 1975. Five months after my relocation to
                        Tucson, Arizona, I represented my school in a national
                        Academic competition in Washington, D. C. We didn’t win
                        but sure did have a good time. After I married my
                        husband, Andy, I opened a nail salon, and he started his
                        house flipping business. My husband and I were doing
                        really well financially but were not content. I decided
                        to go back to school and also had Andy’s full support.
                        Andy not just cared for the two toddlers and me but also
                        ran both business while I was attending the University
                        of Arizona. I managed to graduate cum laude with a
                        bachelor’s degree in political science, attended Florida
                        Coastal School of Law on Governor’s Scholarship, and
                        graduated law school with honor. Since my admission to
                        the Florida Bar in 2009, I have handled cases involving
                        personal injury, civil disputes, business litigations,
                        breach of contract, and family matters. My family and I
                        have traveled to many places, but there is no other
                        places that we love as much as Jacksonville, Florida. In
                        my free time, I take care of my flower garden and
                        harvest the fruits and vegetables from Andy’s garden or
                        collect fresh eggs from his chicken coop.
                      </>
                    )}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="mb-10 text-red">
            <div className="m-auto grid gap-4 grid-cols-3 px-2">
              <div>
                <Card className="w-96 service-card drop-shadow-lg text-red">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      Kế hoạch di sản
                      <br />
                      &nbsp;
                    </div>
                    <div className="mb-0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">
                        (Estate Planning)
                      </div>
                    </div>
                    <Accordion open={open === 1}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(1)}
                      >
                        Learn more
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Việc lập kế hoạch di sản là cách sắp đặt trước tình hình
                        tài chính trước khi bản thân rơi vào trường hợp mất khả
                        năng tự quyết định hoặc tử vong. Kế hoạch này bao gồm
                        việc phân chia tài sản cá nhân và bất động sản, chọn
                        người thừa kế, và giải quyết các phần thuế hay các khoản
                        nợ, cùng với các sự chuẩn bị khác như quyền giám hộ trẻ
                        vị thành niên hay chăm sóc cha mẹ già. Hầu hết các kế
                        hoạch di sản được thiết lập với sự giúp đỡ của một luật
                        sư có kinh nghiệm để phần di sản sau này được chia như ý
                        muốn của thân chủ một cách rỏ ràng. Kế hoạch di sản
                        thường bao gồm trong liệt kê tài sản và nợ, xem xét tài
                        khoản và viết di chúc. Việc lập kế hoạch di sản có thể
                        hạn chế thuế di sản và giúp phần di sản được phân chia
                        đến người thừa kế nhanh chóng và ít tốn kém phí luật sư.
                        Kế hoạch di sản cũng giúp thành lập người giám hộ
                        (Guardian) cho người phụ thuộc và trẻ vị thành niên, hay
                        sắp đặt nơi an nghĩ cuối cùng và tổ chức tang lễ cho bản
                        thân. Ngoài ra, việc lập giấy ủy quyền lâu dài (POA) để
                        dùng trong trường hợp mất khả năng tự quyết định hay
                        trong lúc khẩn cấp mà mình tạm thời vắng mặt. Để biết
                        thêm thông tin chi tiết, vui lòng liên hệ luật sư
                        Bachlan để được tư vấn miễn phí.
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="w-96 service-card drop-shadow-lg text-red">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      Chuyển nhượng bằng khoán
                      <br />
                      &nbsp;
                    </div>
                    <div className="mb-2=0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">
                        (Deed of Conveyance)
                      </div>
                    </div>
                    <Accordion open={open === 2}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(2)}
                      >
                        <div>Learn more</div>
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Trong bất động sản, chuyển nhượng bằng khoán - chẳng hạn
                        như nhà hoặc căn hộ chung cư - từ người chủ này sang
                        người khác được gọi là chuyển nhượng. Sự chuyển nhượng
                        bằng khoán giao quyền tài sản hợp pháp từ người này sang
                        người khác. Đó là một văn bản pháp lý quan trọng trong
                        quá trình thay đổi quyền sở hữu nhà. Thȏng thường nhà
                        đổi chủ thì khȏng có gì lạ, nhưng đȏi khi, những bằng
                        khoán nhà được chuyển nhượng để mang lại nhiều lợi ích
                        cho người chuyển hoặc người nhận. Tuy nhiên, việc thay
                        đổi quyền sở hữu cũng có thể mang lại rất nhiều rắt rối
                        và mất đi nhiều quyền bảo vệ của luật pháp (homestead).
                        Bởi vậy việc Chuyển nhượng bằng khoán cần sự giúp đỡ và
                        cố vấn của một luật sư có kinh nghiệm.
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="w-96 service-card drop-shadow-lg text-red">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      Giấy Ủy Quyền
                      <br />
                      &nbsp;
                    </div>
                    <div className="mb-0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">
                        (Power of Attorney)
                      </div>
                    </div>
                    <Accordion open={open === 3}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(3)}
                      >
                        Learn more
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Giấy Ủy Quyền (POA) này là một ủy quyền hợp pháp cho
                        phép một người được chỉ định những quyền hành động cho
                        người ủy thác. Như vậy, POA trao cho một người khác ,
                        được gọi là luật-sư-trên-thực-tế (Attorney-in-fact)
                        quyền hành động thay mặt cho b ản th ân m ình trong nh
                        ững trường hợp mất khả năng tự quyết định hay trong lúc
                        khẩn cấp mà mình tạm thời vắng mặt. Người
                        luật-sư-trên-thực-tế này có thể được trao thẩm quyền
                        rộng rãi (Durable POA) hoặc hạn chế (Limited POA) để đưa
                        ra quyết định về tài sản, tài chính, đầu tư hoặc chăm
                        sóc y tế của người ủy quyền.
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="w-96 service-card drop-shadow-lg text-red">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      Hợp đồng mua bán doanh nghiệp
                    </div>
                    <div className="mb-0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">
                        (Purchase and Sell Business Agreements)
                      </div>
                    </div>
                    <Accordion open={open === 4}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(4)}
                      >
                        Learn more
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Luật sư hợp đồng kinh doanh thường sẽ xem xét, đàm phán
                        hoặc soạn thảo các thỏa thuận pháp lý theo luật pháp và
                        nhu cầu của khách hàng. Hợp đồng mua bán doanh nghiệp
                        thường bao gồm một lượng lớn ngôn ngữ chính thức và kỹ
                        thuật để bao gồm tất cả các điều kiện để cho một hộp
                        đồng mua bán doanh nghiệp có giá trị pháp lý. Mặc dù
                        người mua và người bán của một doanh nghiệp sẽ biết
                        những gì hai bên đồng ý, nhưng họ có thể không biết cách
                        ghi rỏ những thỏa thuận hay điều kiện cho phù hợp với
                        tất cả các luật lệ cần phải được tuân thủ trên tờ hợp
                        đồng. Một luật sư chuyên về hợp đồng kinh doanh sẽ có
                        thể xác định ngôn ngữ pháp lý nào phải được đưa vào tờ
                        hợp đồng để bảo vệ lợi ích của khách hàng của họ và đồng
                        thời tuân thủ quy chế và luật lệ của tiểu bang. Dù mua
                        một doanh nghiệp hoặc xây dựng một cơ sở làm ăn mới, gọi
                        Luật sư Bachlan để hiểu thêm về những chi tiết trong hợp
                        đồng thuê mặt bằng cho doanh nghiệp với chủ phố, soạn
                        thảo thỏa thuận hoạt động (operating agreement) hoặc hợp
                        đồng hợp tác với các thành viên trong cơ sở doanh nghiệp
                        (partnership agreement).
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="w-96 service-card drop-shadow-lg text-red">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      Ly hȏn và quyền nuȏi dưỡng con trẻ
                    </div>
                    <div className="mb-0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">
                        (Divorce and Child Custody)
                      </div>
                    </div>
                    <Accordion open={open === 5}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(5)}
                      >
                        Learn more
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Khi cuộc hôn nhân của bạn kết thúc và không còn cách nào
                        khác, ly hôn trong hòa bình là điều tốt nhất bạn có thể
                        làm cho bản thân và con cái. Đưa ra một quyết định lớn
                        trong khi tức giận, kết quả có thể không tốt cho nh ững
                        người liên quan. Cách tốt nhất là tham khảo ý kiến luật
                        sư và có kế hoạch trước khi nộp đơn ly hôn, đặc biệt là
                        khi liên quan đến trẻ em. Luật Florida quy định quyền
                        của cha mẹ và cha như nhau mà khȏng thiên vị bên nào.
                        Tiêu chuẩn cho quyền nuôi con là “lợi ích tốt nhất của
                        đứa trẻ,” cho nên, thái độ và hành động của người cha
                        hay mẹ đối với đứa trẻ và đối phương sẽ có ảnh hưởng rất
                        lớn đến quyền nuôi dưỡng con trẻ. Một người luật sư hiểu
                        biết về luật gia đình có thể hướng dẫn thân của của mình
                        làm những gì để chứng minh được họ làm mọi việc là vì
                        lợi ích tốt nhất cho con trẻ.
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="w-96 service-card drop-shadow-lg text-red">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      Phó thác quyền chăm sóc sức khỏe
                    </div>
                    <div className="mb-0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">
                        (Healthcare Surrogate and Advanced Directives)
                      </div>
                    </div>
                    <Accordion open={open === 6}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(6)}
                      >
                        Learn more
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Ý nguyện cuối đời (Advanced Directives) hay còn gọi là
                        di chúc sống (Living Will) là một tài liệu pháp lý trong
                        đó bản thân một người, trong lúc còn minh mẫn, chỉ định
                        những hành động cần được thực hiện cho sức khỏe của họ
                        nếu họ không còn có thể tự đưa ra quyết định vì bệnh tật
                        hoặc mất năng lực để quyết định. Việc chỉ định hoặc ủy
                        quyền cho một người khác đưa ra quyết định chăm sóc sức
                        khỏe trong trường hợp bản thân thiếu năng lực pháp lý
                        rất quan trọng. Nếu có sự sắp đặt trước, thì gia đình
                        bệnh nhân hoặc tòa án có thể được đưa ra quyết định y tế
                        vì lợi ích tốt nhất của bệnh nhân, dựa trên mong muốn mà
                        bệnh nhân đã nêu ra trước đây. Trái lại, nếu mọi sự
                        khȏng được chuẩn bị, người nhà của bệnh nhân trong lúc
                        bối rối phải đưa ra một quyết định to lớn, nhưng có thể
                        sẽ luȏn bị cắn rức khȏng biết quyết định của mình đúng
                        hay sai.
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="w-96 service-card drop-shadow-lg text-red">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      Tai nạn ô tô hoặc thương tích cá nhân
                    </div>
                    <div className="mb-0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">
                        (Auto accident – Personal Injury)
                      </div>
                    </div>
                    <Accordion open={open === 7}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(7)}
                      >
                        Learn more
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Luật sư đại diện cho thân chủ trong một tai nạn ô tô
                        hoặc thương tích cá nhân yêu cầu bồi thường thương tích
                        cá nhân mà thân chủ họ bị thiệt hại về tài chính do sự
                        bất cẩn (negligence) của một người khác. Sự bồi thường
                        bao gồm tiền bệnh viện, bác sĩ, tiền lương bị mất trong
                        thời gian nghĩ làm dưỡng bệnh, sự đau đớn và khốn khổ do
                        thương tích gây ra, tiền trả bác sĩ trong tương lai, và
                        còn nhiều sự bồi thường khác. Mọi cơ thể là duy nhất và
                        mọi tai nạn đều khác với tất cả các tai nạn khác. Do đó,
                        mỗi trường hợp đều có ưu và nhược điểm riêng. Luật Sư
                        Bachlan sẽ yêu cầu bồi thường thiệt hại dựa trên tai nạn
                        của, thương tích, và hoàn cảnh riêng của từng thân chủ.
                        Xin liên lạc luật sư Bachlan để biết thêm thông tin về
                        quá trình này.
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div>
              <div className="m-auto text-center mb-0 col-start-2">
                Office is located in Jacksonville, Florida.
              </div>
              <div>
                <Card className="w-96 service-card drop-shadow-lg text-red ">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      Thȏng dịch, công chứng, và hợp pháp hóa tài liệu
                    </div>
                    <div className="mb-0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">
                        (Translate, certified, and legalization documents)
                      </div>
                    </div>
                    <Accordion open={open === 8}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(8)}
                      >
                        Learn more
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Thị thực mọi văn bản và giấy khai sinh xác nhận sự chính
                        xác để có giá trị sử dụng ở Mỹ. Thủ tục hợp pháp hóa và
                        chứng nhận của lãnh sự quán phù hợp theo yêu cầu của mỗi
                        quốc gia. Giấy ủy quyền có tác dụng ở Viet Nam.
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div>
              {/* <div>
                <Card className="w-96 service-card drop-shadow-lg text-red">
                  <CardBody>
                    <div className="mb-0 py-0 font-bold text-2xl text-red">
                      BLANK SERVICE
                      <br />
                      &nbsp;
                    </div>
                    <div className="mb-0 font-bold text-2xl">
                      <div className="mb-0 font-bold text-sm">(Blank)</div>
                    </div>
                    <Accordion open={open === 9}>
                      <AccordionHeader
                        className="text-sm py-0 accordion-font text-red"
                        onClick={() => handleOpen(9)}
                      >
                        Learn more
                      </AccordionHeader>
                      <AccordionBody className="accordion-font text-red">
                        Blank
                      </AccordionBody>
                    </Accordion>
                  </CardBody>
                </Card>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Mainpage;
