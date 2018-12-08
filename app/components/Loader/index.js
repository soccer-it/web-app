import Logo from 'components/Logo'

import './Loader.styl'

const Loader = () => (
  <section className='loader'>
    <div className='wrapper'>
      <Logo logo='soccerIt' type='jpg' alt='soccerIt' title='logo soccerIt' />
      <h1 className='title'>Soccer <span>It</span></h1>
      <p className='description'>Um novo jeito de torcer</p>
    </div>    

  </section>
)

export default Loader