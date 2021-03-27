import React from "react";
import css from "./style.module.css";
const BodyText = () => {
  return (
    <div className={css.Container} id="bodytext">
      <div className={css.textBody}>
        Монгол улсын шинжлэх ухааны академийн Палеонтологийн хүрээлэнгийн
        бүртгэлийн санд 956 төрлийн үлэг гүрвэл, 811 төрлийн шувуу, 455 төрлийн
        хөхтөн амьтан, 631 төрлийн яст мэлхий, 744 төрлийн загас, 956 төрлийн
        ургамал, 845 төрлийн шавж, 569 төрлийн өндөг бүхий нийт 254654 олдвор
        байна.
      </div>
    </div>
  );
};
export default BodyText;
