import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

import { useEffect } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    typeof document !== undefined
    ? require('bootstrap/dist/js/bootstrap')
    : null
  }, [router.events])

  return (
    <>

      <Head>
        <meta name="description" content="Cura healthcare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
        <svg width="38" height="28" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg">
                    <g id="Artboard-2" fill="none" fillRule="evenodd">
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
            <button className="btn btn-light me-2" type="submit">
              <svg className='ms-2' width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <path d="M-3-3h25v25H-3z"></path>
                        <g fill="#000" fillRule="nonzero">
                            <path d="M9.5 18.402A8.902 8.902 0 1 1 9.5.598a8.902 8.902 0 0 1 0 17.804zm0-1.137a7.765 7.765 0 1 0 0-15.53 7.765 7.765 0 0 0 0 15.53z"></path>
                            <path d="M9.5 18.402c-2.137 0-3.585-4-3.585-8.902C5.915 4.598 7.363.598 9.5.598s3.585 4 3.585 8.902c0 4.902-1.448 8.902-3.585 8.902zm0-1.137c1.195 0 2.448-3.463 2.448-7.765S10.695 1.735 9.5 1.735 7.052 5.198 7.052 9.5s1.253 7.765 2.448 7.765z"></path>
                            <path d="M1.7 7.402a.568.568 0 0 1 0-1.137h15.567a.568.568 0 0 1 0 1.137H1.7zM1.7 12.735a.568.568 0 1 1 0-1.137h15.567a.568.568 0 0 1 0 1.137H1.7z"></path>
                        </g>
                    </g>
                </svg>
              العربية
            </button>
          </form>
        </div>
      </div>
    </nav>
      <Component {...pageProps} />

      <footer className='py-3 border-top border-bottom'>
        <div className='container d-flex'>
          <p>حقوق التأليف والنشر كيورا 2023 | جميع الحقوق محفوظة</p>
          <ul className='social-media'>
            <li className='facebook'>
              <a href="https://www.facebook.com/appcura/" target="_blank">
                <svg width="10" height="17" viewBox="0 0 10 17" xmlns="http://www.w3.org/2000/svg"><title>facebook-logo (1)</title><path d="M8.773.004L6.59 0C4.137 0 2.552 1.627 2.552 4.146v1.911H.357a.343.343 0 0 0-.344.344v2.77c0 .19.154.343.344.343h2.195v6.989c0 .19.154.343.343.343H5.76c.19 0 .344-.154.344-.343V9.514h2.566c.19 0 .344-.153.344-.343V6.4a.344.344 0 0 0-.343-.344H6.103v-1.62c0-.779.185-1.174 1.2-1.174h1.47c.19 0 .343-.155.343-.344V.347a.344.344 0 0 0-.343-.343z" fillRule="nonzero" fill="#333" opacity=".765"></path></svg>
                </a>
            </li>
            <li className='twitter'>
              <a href="https://twitter.com/AppCura/" target="_blank">
                <svg width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg"><title>twitter-logo-silhouette</title><path d="M17.134 2.2a6.948 6.948 0 0 1-2.005.553A3.518 3.518 0 0 0 16.664.814a7.02 7.02 0 0 1-2.219.851A3.474 3.474 0 0 0 11.897.558a3.499 3.499 0 0 0-3.491 3.505c0 .275.03.543.09.8a9.898 9.898 0 0 1-7.195-3.664A3.491 3.491 0 0 0 .829 2.96c0 1.217.616 2.29 1.552 2.918A3.48 3.48 0 0 1 .8 5.44v.044A3.506 3.506 0 0 0 3.6 8.92c-.292.08-.6.123-.92.123-.225 0-.443-.022-.657-.065a3.495 3.495 0 0 0 3.26 2.435 6.985 6.985 0 0 1-4.335 1.499c-.282 0-.56-.017-.833-.048a9.838 9.838 0 0 0 5.351 1.577c6.423 0 9.933-5.342 9.933-9.976l-.011-.454a6.988 6.988 0 0 0 1.746-1.811z" fillRule="nonzero" fill="#333" opacity=".765"></path></svg>
              </a>
            </li>

            <li className='linkedin'>
            <a href="https://www.linkedin.com/company/cura-%D9%83%D9%8A%D9%88%D8%B1%D8%A7" target="_blank"><svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><title>linkedin-logo</title><path d="M16.326 10.246v5.965h-3.475v-5.566c0-1.398-.502-2.352-1.76-2.352-.96 0-1.531.643-1.783 1.265-.092.223-.115.532-.115.843v5.81H5.717s.047-9.426 0-10.403h3.476v1.475l-.023.033h.023v-.033c.461-.708 1.286-1.72 3.132-1.72 2.287 0 4.001 1.488 4.001 4.683zM2.081.794C.891.794.114 1.57.114 2.59c0 .998.755 1.798 1.92 1.798h.024c1.212 0 1.966-.8 1.966-1.798C4.001 1.57 3.27.794 2.081.794zM.321 16.21h3.474V5.808H.321v10.403z" fillRule="nonzero" fill="#333" opacity=".765"></path></svg></a>
            </li>

            <li className='instagram'>
              <a href="https://www.instagram.com/appcura/" target="_blank">
                <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg"><title>Artboard 5</title><g fill="none" fillRule="evenodd"><path d="M12.309 0H4.69A4.697 4.697 0 0 0 0 4.691v7.618A4.696 4.696 0 0 0 4.691 17h7.618A4.697 4.697 0 0 0 17 12.309V4.69A4.697 4.697 0 0 0 12.309 0zM8.5 4.12A4.385 4.385 0 0 0 4.12 8.5a4.385 4.385 0 0 0 4.38 4.38 4.386 4.386 0 0 0 4.38-4.38A4.386 4.386 0 0 0 8.5 4.12zm0 7.252A2.875 2.875 0 0 1 5.628 8.5 2.876 2.876 0 0 1 8.5 5.628 2.876 2.876 0 0 1 11.372 8.5 2.875 2.875 0 0 1 8.5 11.372zm4.564-8.531c.292 0 .577.117.782.323.207.206.324.491.324.783 0 .29-.117.576-.324.782-.206.205-.49.324-.782.324-.29 0-.576-.119-.78-.324a1.115 1.115 0 0 1-.326-.782 1.11 1.11 0 0 1 1.106-1.106z" fill="#606060"></path></g></svg>
              </a>
            </li>
            <li className='youtube'>
              <a href="https://www.youtube.com/channel/UCxsQ9GpMGXtB1haTYN6BQ5A" target="_blank"><svg width="21" height="16" viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg"><title>youtube</title><path d="M20.186 1.856C19.432.97 18.04.606 15.382.606h-9.65c-2.72 0-4.135.386-4.886 1.331-.733.922-.733 2.28-.733 4.159v3.581c0 3.64.87 5.49 5.618 5.49h9.65c2.306 0 3.583-.32 4.41-1.104C20.638 13.26 21 11.948 21 9.677V6.096c0-1.982-.057-3.348-.814-4.24zm-6.663 6.525L9.14 10.649a.678.678 0 0 1-.662-.02.666.666 0 0 1-.324-.571V5.536c0-.234.122-.45.324-.57a.68.68 0 0 1 .66-.023l4.382 2.254a.667.667 0 0 1 .002 1.184z" fillRule="nonzero" fill="#333" opacity=".765"></path></svg>
              </a>
            </li>

            <li className='snapchat'>
            <a href="https://www.snapchat.com/add/appcura" target="_blank"><svg width="18" height="17" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg"><title>snapchat</title><path d="M17.544 12.71c-2.262-.378-3.292-2.692-3.402-2.955l-.013-.029c-.114-.233-.142-.422-.083-.562.12-.284.622-.445.945-.548.09-.03.175-.057.243-.084.651-.26.978-.593.971-.99-.006-.314-.25-.603-.61-.732a1.093 1.093 0 0 0-.418-.081c-.1 0-.247.014-.389.08-.276.131-.52.201-.706.21a.67.67 0 0 1-.19-.033l.018-.305.003-.053c.077-1.234.173-2.77-.234-3.691C12.478.212 9.93 0 9.175 0l-.35.003c-.752 0-3.297.212-4.497 2.936-.407.922-.311 2.458-.234 3.692l.022.355a.69.69 0 0 1-.227.034c-.216 0-.475-.071-.769-.21-.425-.202-1.202.068-1.307.626-.057.302.063.737.96 1.096.07.028.157.056.265.09.3.097.804.259.923.542.059.14.03.33-.093.586-.045.104-1.11 2.558-3.463 2.95a.487.487 0 0 0-.404.509c.004.07.02.139.049.209.198.468.95.793 2.368 1.02.031.082.067.249.088.346.03.138.061.28.104.429.043.15.171.4.541.4.126 0 .27-.028.428-.059.227-.045.537-.106.922-.106.213 0 .435.02.66.057.423.071.795.337 1.227.645.635.455 1.212.802 2.367.802.03 0 .06 0 .09-.003.043.002.086.003.13.003 1.011 0 1.901-.27 2.646-.802.412-.295.8-.574 1.225-.645.225-.038.447-.057.66-.057.37 0 .663.048.926.1.177.035.316.052.444.052a.515.515 0 0 0 .521-.394c.042-.146.074-.285.104-.427.016-.075.055-.255.088-.342 1.397-.225 2.11-.537 2.308-1.004a.623.623 0 0 0 .052-.214.488.488 0 0 0-.405-.51z" fill="#606060" fillRule="nonzero"></path></svg></a>
            </li>

          </ul>
        </div>

      </footer>
    </>
  )
}

/*
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>*/