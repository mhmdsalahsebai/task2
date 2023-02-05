import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import { useEffect } from 'react'
import {Router, useRouter} from 'next/router'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    typeof document !== undefined
    ? require('bootstrap/dist/js/bootstrap')
    : null
  }, [router.events])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
        <svg width="38" height="28" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg">
                    <g id="Artboard-2" fill="none" fill-rule="evenodd">
                        <g id="Group" transform="translate(.75 .5)">
                            <polygon id="Fill-6" fill="#D0DADF" points="21.5992059 3.7304095 23.9710142 12.8795549 18.4156968 7.32421542"></polygon>
                            <path d="M21.5539581,3.76610238 C20.5850482,4.85212773 20.1627547,6.26078101 20.2870988,7.62803419 C20.3673816,8.51080195 20.6755383,9.37631147 21.2115746,10.126585 L23.9053203,12.8795549 C27.0249359,16.0331634 27.0249359,21.1462923 23.9053203,24.2999007 L34.1943673,13.8553298 C37.3083412,10.6966143 37.3083412,5.57541918 34.1943673,2.41675144 C31.0804882,-0.741916302 26.0318245,-0.741916302 22.9179454,2.41675144 L21.5539581,3.76610238 Z" id="Fill-8" fill="#6CD4FF"></path>
                            <path d="M2.33971875,13.8551771 C-0.77989677,10.7015686 -0.77989677,5.58848742 2.33971875,2.43483124 C5.45938169,-0.718824937 10.5172426,-0.718824937 13.6369055,2.43483124 L23.9710379,12.8795931 C27.0906534,16.0331538 27.0906534,21.1462828 23.9710379,24.2998912 C20.851375,27.4535474 15.7934666,27.4535474 12.6738985,24.2998912 L2.33971875,13.8551771 Z" id="Mask" fill="#F05F5F"></path>
                            <path d="M12.6704804,12.8802136 L15.0659325,10.5306505 C16.6560579,8.74763246 16.7253544,6.09234292 15.3562469,4.17845154 L23.9710331,12.8795931 C27.0633888,16.0056141 27.0904116,21.0570292 24.0521489,24.216747 L23.886741,24.3838945 C20.7609624,27.4533087 15.7655383,27.4252917 12.6738938,24.2998912 C9.55655386,21.1600765 9.55655386,16.0388813 12.6704804,12.8802136 Z" id="Fill-3" fill="#C53F3F"></path>
                        </g>
                    </g>
                </svg>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex me-auto" role="search">
            <button className="btn btn-light border" type="submit">تسجيل دخول</button>
            <button className="btn btn-primary me-2" type="submit">تسجيل حساب</button>
            <button className="btn btn-light me-2" type="submit">العربية</button>
          </form>
        </div>
      </div>
    </nav>
      <Component {...pageProps} />
    </>
  )
}
