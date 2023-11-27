import Link from "next/link"

function StudioNavbar(props: any) {
    return (
        <div className="bg-cookie" style={{ backgroundColor: '#DEA668' }}>
                <div className="flex items-center p-2">
                        {/* <Link href="/" target="_blank" rel="noopener noreferrer" className="no-underline text-gray-300 flex items-center space-x-1 hover:bg-pantrybrown rounded p-1">
                                <p className="text-pantrybrown">Return to Website</p>                
                        </Link> */}

                        <Link href="/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p style={{ color: '#67594E' }}>Return to Website</p>                
                        </Link>

                        
                </div>
                <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar;