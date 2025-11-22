import React from 'react'
import './University.css'
import { useTranslation } from 'react-i18next'

function University() {
  const {t} = useTranslation();

  return (
    <div className='universityPage'>
      <h1>{t("kgzUni")}</h1>
      <div className='uni-list'>
        <h2>{t("prestige")}</h2>
        <a href="https://www.kgma.kg/ru"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/x5b1e7z.jpg.pagespeed.ic.Pw6kdrM-qy.webp" alt=""/>
            <p>{t("uni1")}</p>
            <img className='star' src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-four-4-star-rank-sign-vector-illustration-eps10-picture-image_8307895.png" alt="" />
        </div></a>

        <a href="https://www.manas.edu.kg/ru/index.php"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/150xNxZLcKPa.jpg.pagespeed.ic.20Ubi_sSv2.webp" alt=""/>
            <p>{t("uni2")}</p>
            <img className='star' src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-four-4-star-rank-sign-vector-illustration-eps10-picture-image_8307895.png" alt="" />
        </div></a>

        <a href="https://ucentralasia.org/ru/glavnaya"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/fbiedO.jpg" alt=""/>
            <p>{t("uni3")}</p>
            <img className='star' src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small_2x/five-stars-rating-icon-png.png" alt="" />
        </div></a>

        <a href="https://www.knu.kg/ky/ru/"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/x1ehIrT.png.pagespeed.ic.LXyphuROZZ.png" alt=""/>
            <p>{t("uni4")}</p>
            <img className='star' src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-four-4-star-rank-sign-vector-illustration-eps10-picture-image_8307895.png" alt="" />
        </div></a>

        <a href="https://www.auca.kg/ru/main/"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/TLOYPa.png" alt=""/>
            <p>{t("uni5")}</p>
            <img className='star' src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small_2x/five-stars-rating-icon-png.png" alt="" />
        </div></a>

        <a href="https://www.krsu.edu.kg/"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/g6_z9x.png" alt=""/>
            <p>{t("uni6")}</p>
            <img className='star' src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small_2x/five-stars-rating-icon-png.png" alt="" />
        </div></a>

        <a href="https://knau.kg/"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/150xNx_Ys0uw.jpg.pagespeed.ic.vJfPoBSC3e.webp" alt=""/>
            <p>{t("uni7")}</p>
            <img className='star' src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-four-4-star-rank-sign-vector-illustration-eps10-picture-image_8307895.png" alt="" />
        </div></a>

        <a href="https://www.oshsu.kg/ru/page/258"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/150xNxq6q4SU.png.pagespeed.ic.eVOmF8SvBy.png" alt=""/>
            <p>{t("uni8")}</p>
            <img className='star' src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-four-4-star-rank-sign-vector-illustration-eps10-picture-image_8307895.png" alt="" />
        </div></a>

        <a href="https://alatoo.edu.kg/faculties-and-departments/"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/8fGQrX.png" alt=""/>
            <p>{t("uni9")}</p>
            <img className='star' src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small_2x/five-stars-rating-icon-png.png" alt="" />
        </div></a>

        <a href="https://ru.ism.edu.kg/"><div className='uni'>
          <img className='uniLogo' src="https://kg.h-index.com/web/uploads/images/150xNxmBvYJQ.jpg.pagespeed.ic.UjqXDsz2qP.webp" alt=""/>
            <p>{t("uni10")}</p>
            <img className='star' src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small_2x/five-stars-rating-icon-png.png" alt="" /> 
        </div></a>
      </div>
    </div>
  )
}

export default University
