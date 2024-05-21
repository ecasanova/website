import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import { TwitterLogoIcon } from "@radix-ui/react-icons"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { MailIcon } from "@radix-ui/react-icons"
import { PhoneIcon } from "@radix-ui/react-icons"

export function Icon({ type }) {
    switch (type) {
        case "github":
            return <GitHubLogoIcon />;
        case "linkedin":
            return <LinkedInLogoIcon />;
        case "twitter":
            return <TwitterLogoIcon />;
        case "external":
            return <ExternalLinkIcon />;
        case "mail":
            return <MailIcon />;
        case "phone":
            return <PhoneIcon />;
        default:
            return <></>;
    }
}