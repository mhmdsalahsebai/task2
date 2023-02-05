import Link from 'next/link'
import React from 'react'

export async function getServerSideProps() {
    const request = await fetch(`https://cura.healthcare/Doctorbrowser/Doctor/GetDoctors`)
    const doctorsData = await request.json()

    return {
        props: {
            doctorsData,
        }
    }
    
}

const index = ({doctorsData}) => {
    const doctors = doctorsData.Doctors

    console.log(doctors)
  return (
    <div>
        <div className='container'>
            <h2 className='mb-4'>قائمة بجميع الأطباء في كيورا</h2>
            <div className='row'>
                {doctors.map(doctor => (
                    <div className="col-4 px-4 mb-5" key={doctor.Id}>
                        <div className='crad border p-4'>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{doctor.FirstName} {doctor.LastName}</h5>
                            <p className="card-text">{doctor.AboutMe}</p>
                            <Link href={`/doctors/${doctor.UserName}`} className="btn btn-primary">Doctor Profile</Link>
                            </div>
                        </div>
                </div>
                )
                )}
            </div>
        </div>
    </div>
  )
}


export default index