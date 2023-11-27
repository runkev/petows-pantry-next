import Image from "next/image";
import logo from "../assets/logo.png"


function Logo(props: any) {
    const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
        <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
        />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo