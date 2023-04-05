import { ReactElement } from "react"

type IconProps = {
  size: 'small' | 'medium' | 'large',
  color: string
};

type Props = {
    icon:ReactElement<IconProps>,
    title:string,
}

function IconTech({icon,title}: Props) {
  return (
    <div className="flex flex-col justify-center">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  )
}

export default IconTech