import Link from "next/link"
import { IoReturnUpBackSharp } from "react-icons/io5";

function StudioNavbar(props: any) {
    return (
        <div className="bg-cookie" style={{ backgroundColor: '#DEA668' }}>
                {/* <div className="flex items-center p-2"> */}
                <div style={{
                    display: 'flex', 
                    alignItems: 'center',
                    marginLeft: '0.5rem', 
                    padding: 5,
                    gap: '0.5rem'}}
                >
                        {/* <Link href="/" target="_blank" rel="noopener noreferrer" className="no-underline text-gray-300 flex items-center space-x-1 hover:bg-pantrybrown rounded p-1">
                                <p className="text-pantrybrown">Return to Website</p>                
                        </Link> */}

                        <Link href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <IoReturnUpBackSharp size={20} />
                            <strong style={{ color: '#67594E', marginLeft: '0.5rem' }}>
                                Return to Website
                            </strong>                
                        </Link>

                        
                </div>
                <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar;