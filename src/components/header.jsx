export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}
                {/* <b id="refund">
                <br></br>
                you pay 50% advance payment and we give 30% refund
                  </b> */}
                </p>
                <a id='book_now'
                  href='#features'
                  className='btn book_now btn-custom page-scroll'
                >
                  BOOK US
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
