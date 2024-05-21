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
            return (<Link href={href} target="_blank"><GitHub /></Link>)
        case "linkedin":
            return (<Link href={href} target="_blank"><LinkedInLogoIcon /></Link>)
        case "twitter":
            return (<Link href={href} target="_blank"><TwitterLogoIcon /></Link>)
        case "phone":
            return (<Link href={href} target="_blank"><PhoneIcon /></Link>)
        case "mail":
            return (<Link href={href} target="_blank"><MailIcon /></Link>)
        case "location":
            return (<Link href={href} target="_blank"><LocationOnOutlinedIcon /></Link>)
        case "facebook":
            return (<Link href={href} target="_blank"><Facebook /></Link>)
        default:
            return <></>;
    }
}