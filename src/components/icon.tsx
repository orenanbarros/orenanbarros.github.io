
type Props = {
    src:string,
    alt:string,
    title:string,
    className:string
}

function icon({src,alt,title,className}: Props) {
  return (
    <img src={src} alt={alt} title={title} className={className}/>
  )
}

export default icon