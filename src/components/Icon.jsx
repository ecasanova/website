import GitHub from "@mui/icons-material/GitHub"
import LinkedInLogoIcon from "@mui/icons-material/LinkedIn"
import TwitterLogoIcon from "@mui/icons-material/Twitter"
import MailIcon from "@mui/icons-material/MailOutline"
import PhoneIcon from "@mui/icons-material/PhoneOutlined"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Facebook from '@mui/icons-material/Facebook';

import Link from 'next/link';
export function Icon({ type, href="#" }) {
    switch (type) {
        case "github":
            return (<Link href={href} target={ (href === "#") ? "_self" : "_blank" }><GitHub className="text-gray-500 hover:text-black" /></Link>)
        case "linkedin":
            return (<Link href={href} target={ (href === "#") ? "_self" : "_blank" }><LinkedInLogoIcon className="text-gray-500 hover:text-black" /></Link>)
        case "twitter":
            return (<Link href={href} target={ (href === "#") ? "_self" : "_blank" }><TwitterLogoIcon className="text-gray-500" /></Link>)
        case "phone":
            return (<Link href={href} target={ (href === "#") ? "_self" : "_blank" }><PhoneIcon className="text-gray-500" /></Link>)
        case "mail":
            return (<Link href={href} target={ (href === "#") ? "_self" : "_blank" }><MailIcon className="text-gray-500" /></Link>)
        case "location":
            return (<Link href={href} target={ (href === "#") ? "_self" : "_blank" }><LocationOnOutlinedIcon className="text-gray-500" /></Link>)
        case "facebook":
            return (<Link href={href} target={ (href === "#") ? "_self" : "_blank" }><Facebook className="text-gray-500" /></Link>)
        default:
            return <></>;
    }
}