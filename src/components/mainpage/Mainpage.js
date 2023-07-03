import { leslie } from "../../assets/static";
import { Fragment, useState } from "react";
import {

} from "@material-tailwind/react";

function Mainpage() {
   const [en, setEn] = useState(false);

  return (
    <div className="flex m-auto pb-50 text-red mt-20">
      <div className="m-auto">
        <div className="flex m-auto mb-10">
          <div className="flex m-auto">
            <div className="">
              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                  <p className="uppercase tracking-loose w-full">
                    Luat Su Bach Lan
                  </p>
                  <h1 className="my-4 text-5xl font-bold leading-tight">
                    Attorney Leslie <br />
                    Bachlan Ng
                  </h1>
                  <p className="leading-normal text-2xl mb-8">

                  </p>
                </div>

                <div className="w-full md:w-3/5 text-center">
                  <img
                    className="md:w-4/5 z-50 ml-5 object-cover rounded-full h-96 w-24"
                    src={leslie}
                  />
                </div>
                <div className="uppercase tracking-loose flex flex-wrap mx-auto mt-24">
                  <div className="font-bold text-5xl ">
                    {!en ? <>VỀ TÔI</> : <>About Me</>}
                  </div>
                </div>
                <div className="flex m-auto text-lg pb-24 mt-5">
                  {!en ? (
                    <>
                      Tôi sinh ra và lớn lên ở miền Nam Việt Nam và di cư sang
                      Mỹ vào ngày 30 tháng Tư năm 1993, cùng ngày chiến tranh
                      Việt Nam kết thúc vào năm 1975. Năm tháng sau khi tôi
                      chuyển đến Tucson, Arizona, tôi đại diện cho trường học
                      của mình trong một cuộc thi học sinh giỏi vòng quốc gia ở
                      thủ đô Washington. Chúng tôi không đạt giải thưởng nhưng
                      đã có được một thời gian thật vui.
                      <br /> <br /> Sau khi tôi kết hôn với chồng tôi, Andy, tôi
                      đã mở một tiệm làm móng tay và anh ấy bắt đầu kinh doanh
                      bằng cách mua nhà củ để sửa lại và bán lấy lời. Chồng tôi
                      và tôi rất thoải mái về mặt tài chính nhưng vẩn không hài
                      lòng với cuộc sống của mình. Tôi quyết định quay trở lại
                      trường học và Andy hỗ trợ tȏi hoàn toàn. Andy không chỉ
                      chăm sóc tȏi và hai đứa nhóc mà còn điều hành việc làm ăn
                      của cả hai công ty trong khi tôi đi học tại trường Đại học
                      Arizona.
                      <br /> <br /> Tám năm sau, tôi đã tốt nghiệp cữ nhân hạng
                      xuất sắc ngành khoa học học chính trị, được vào Trường
                      Luật Duyên Hải Florida với phần Học bổng của Thống đốc, và
                      tốt nghiệp trường luật với bằng danh dự.
                      <br /> <br /> Tôi và gia đình đã được đi du lịch nhiều
                      nơi, nhưng không có nơi nào mà chúng tôi yêu thích nhiều
                      như Jacksonville, Florida. Cuộc sống của chúng tôi bây giờ
                      rất thú vị. Trong thời gian rảnh rỗi, tôi chăm sóc vườn
                      hoa của mình và lắng nghe những con chim ca hát, còn Andy
                      thì chăm nom các luống rau hay tỉa tót những cành cây ăn
                      trái trong khi mấy con vịt lạch bạch theo sau giống như
                      anh ta là mẹ của chúng vậy.
                      <br /> <br /> Kể từ khi được nhận vào Hội Đoàn Luật Sư của
                      bang Florida Bar năm 2009, tôi đã xử lý các vụ kiện liên
                      quan đến thương tích cá nhân, tranh chấp dân sự, kiện tụng
                      kinh doanh, vi phạm hợp đồng, li hȏn và tranh giành trong
                      gia đình, hay giúp giải quyết những gút mắc và nhiều vấn
                      đề liên quan tới luật pháp khác.
                    </>
                  ) : (
                    <>
                      I was born and raised in South Vietnam and emigrated to
                      the US on April 30, 1993, the same day the Vietnam War
                      ended in 1975. Five months after my relocation to Tucson,
                      Arizona, I represented my school in a national Academic
                      competition in Washington, D. C. We didn’t win, but we
                      sure did have a good time.
                      <br />
                      <br />
                      After I married my husband, Andy, I opened a nail salon,
                      and he started his house flipping business. My husband and
                      I were doing well financially but were not content. I
                      decided to go back to school with Andy’s full support.
                      Andy cared for me and our two toddlers and ran both
                      businesses while I was attending the University of
                      Arizona. Eight years later, I graduated cum laude with a
                      bachelor’s degree in political science. I then attended
                      Florida Coastal School of Law on Governor’s Scholarship,
                      where I graduated with honors.
                      <br />
                      <br /> My family and I have traveled to many places, but
                      there is no other place that we love as much as
                      Jacksonville, Florida. Our lives are quite interesting
                      now. In our spare time, I care for the flowers in my
                      gardens and listen to the birds sing, and Andy tends his
                      vegetable beds or trims the fruit trees while his ducks
                      waddle behind him as if he was their mother.
                      <br /> <br />
                      Since my admission to the Florida Bar in 2009, I have
                      handled cases involving personal injuries, civil disputes,
                      business litigations, breaches of contracts, dissolutions
                      of marriages, family matters, and many other issues
                      involving the law.
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
