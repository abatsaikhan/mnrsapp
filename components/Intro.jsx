import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>МОНГОЛРОСЦВЕТМЕТ ТӨҮГ</span> ҮНЭТ ЗҮЙЛ, ХЭТИЙН БОДЛОГО
        </h1>
        <p className={style.desc}>
          Эрхэм зорилго - Хөдөлмөрийн аюулгүй байдал, эрүүл ахуйн суурь зарчмыг чанд баримтлан хайлуур жонш, үнэт болон өнгөт метал, хар төмөрлөгийн дэлхийн зах зээлийн нэр хүндтэй оролцогч байж, хэрэглэгчдийнхээ хэрэгцээ, шаардлагад нийцсэн, олон улсад хүлээн зөвшөөрөгдсөн, нийгмийн бөгөөд экологийн хариуцлагатай уул уурхайн байгууллага байна.
          Стратеги - Төмрийн баяжмал, хайлуур жоншны бүтээгдэхүүн хэрэглэгч, худалдан авагч компаниудын өмнө хариуцлагатай байх, Үйлдвэрийн газрын ажиллагсадын хүч бололцоог манай хэрэглэгч нарын сэтгэл ханамжыг хангахад чиглүүлэх, бизнесийн хамтрагч нартаа харилцан итгэлцэл хүндэтгэлтэй байх зарчмыг тогтоох.
          Үнэт зүйл - Өмнөө тавьсан зорилгодоо хүрч, хөрөнгө оруулагч нарын итгэлийг алдахгүй байхын төлөө үйлдвэрийн газар нээлттэй байх зарчмыг баримталж өрсөлдөх чадварынхаа давуу талыг дээд зэргээр ашиглахад үйл ажиллагаагаа чиглүүлнэ.
        </p>
        <button className={style.button}>ИЛҮҮ ИХ</button>
      </div>
      <div className={style.card}>
        <Image
          src="/img/Borundur.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;