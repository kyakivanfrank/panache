

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
       
      <div className='container'>
      <div className='section-title'>
          <h2>Come let's host your event</h2>
          <p>
          Just a few clicks away. We only requires a <b>50% advance payment </b>  and <b>will give 30% refund if you cancel within time. </b> <br></br> 
We've successfully hosted 13 to 14 successful events.</p>

        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <span>
                    <img alt="" src={d.icon}/>
                  </span>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    {/* <p>{d.text}</p> */}
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
