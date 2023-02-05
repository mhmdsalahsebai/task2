import React, {useState} from 'react'

import styles from './[slug].module.css'
import info from '../../data/data'

import moment from 'moment'

export async function getServerSideProps({params}) {
    const {slug} = params
    
    const request = await fetch(`https://api.cura.healthcare/DoctorProfileAnonymous?Username=${slug}`)
    const result = await request.json()

    return {
        props: {
            result,
        }
    }
}

const Doctor = ({result}) => {
    const [moreRating, setMoreRating] = useState(10)

    const doctor = result.Result
    console.log(doctor)
    let sections = doctor.Sections.map(obj => (
        {Type: obj.Type, Title: obj.ViewTitle, data: obj.Items}
    ))

    const allRating = sections.find(section => section.Type === 'Recommendations').data;
    const rating = allRating.slice(0, moreRating)

    sections  = sections.filter(section => section.Type !== 'Recommendations')
    .filter(section => section.data.length !== 0)

    const handleMoreRating = (e) => {
        if(moreRating < allRating.length) {
            setMoreRating(prev => prev + 10)
        }
    }

    return (
        <div className="container">
            <div className="row">

                <header className="col-lg-4 text-center">
                    <div className="doctor__image mb-4">
                        <img className='rounded-circle' src={`https://s3-eu-west-1.amazonaws.com/curaapps/${doctor.ProfilePic}`}alt={`${doctor.FirstName} ${doctor.LastName}`} width={200} height={200} />
                    </div>
                    <h1 className='doctor__name mb-3 h2'>{doctor.FirstName_ar} {doctor.LastName_ar}</h1>
                    <h2 className='doctor__title mb-4 h4'>{doctor.SpecialtyTitle_ar}</h2>
                    <div className={styles.rating}>
                        <div className={styles.rating__stars}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div className='rating__count'>{doctor.Rating} تقييم</div>
                    </div>

                    <hr />
                    <ul className={styles.doctor__details}>
                        <li className='mb-4'>
                            <h4 className='mb-3'>العمل</h4>
                            <h6>{doctor.AboutMe}</h6>
                        </li>
                        <li className='mb-4'>
                            <h4 className='mb-3'>البلد</h4>
                            <h6>{doctor.CountryName_ar}, {doctor.CityCityName_ar}</h6>
                        </li>
                        <li className='mb-4'>
                            <h5 className='mb-3'>اللغات</h5>
                            <h6>العربية والأنجليزية</h6>
                        </li>
                        <li className='mb-4'>
                            <a className='btn btn-primary d-block btn-lg' href='/'>أستشر الان</a>
                        </li>
                    </ul>
                </header>

                <div className="col-lg-8 pe-5">
                    <section className='information'>
                        <h3 className='mb-3'>المعلومات</h3>
                        <div className='card-container'>
                            {sections.map(section => (
                                <div className="card mb-4 shadow border-0" key={section.Type}>
                                    <div className="card-body">
                                        <h4 className="card-title mb-3">{info[section.Type]}</h4>
                                        <ul>
                                            {section.data.map(data => (
                                                <li className="card-text">
                                                    <h6>
                                                    {data.Title}
                                                    </h6>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className='reviews pb-5 mt-5'>
                        <h3 className='mb-3'>التقييم</h3>
                        <div className='card-container'>

                            {rating.map(rate => (
                                <div className="card mb-3" key={rate.Id}>
                                    <div className='card-header d-flex'>
                                        <img className='rounded-full' src='https://cura.healthcare/Content/img/profileempty.png' alt='مستخدم كيورا' />
                                        <div className='me-3'>
                                            <h5 className="card-title">مستخدم كيورا</h5>
                                            <p>{moment(rate.RecommendationDate).fromNow()}</p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            {rate.RecommendationText}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <button 
                            className='btn btn-primary d-block w-100 btn-lg mt-5' 
                            onClick={handleMoreRating}>عرض المزيد</button>
                    </section>
                    
                </div>
            </div>
        </div>
    )
}

export default Doctor