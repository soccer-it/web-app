import Loader from 'components/Loader'
import BoxContent from 'components/BoxContent'
import SmallBox from 'components/SmallBox'

const Home = () => {
  return (
    <div className='container'>
      <BoxContent />
      <SmallBox 
        layout='column' 
        imageName='mario' 
        imageType='png' 
        title='Victor Fellype' 
        description='toptopshowba na ultima semana' 
      />
      <SmallBox  
        imageName='news' 
        imageType='png' 
        title='Time topshowba top top' 
        description='o time é toptopshowba deeemaix, toptoptoptotp showba top o time é toptopshowba deeemaix, toptoptoptotp showba top o time é toptopshowba deeemaix, toptoptoptotp showba top ' 
      />
    </div>
  )
}

export default Home;