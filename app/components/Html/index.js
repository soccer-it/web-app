const createMarkup = (data) => ({
  __html: data
})

const Html = ({ children }) => (
  <div className='content' dangerouslySetInnerHTML={createMarkup(children)} />
)

export default Html