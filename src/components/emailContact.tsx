
type Prop ={
  mailto:string
}
function EmailContact({mailto}:Prop) {
  
  return (
    <div className='emailContact'>
      <a className="link" href={`mailto:${mailto}`}>{mailto}</a>
    </div>
  )
}

export default EmailContact