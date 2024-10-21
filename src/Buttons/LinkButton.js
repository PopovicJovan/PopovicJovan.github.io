import Button from '@mui/material/Button';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons';
const LinkButton = ({url, icon}) => {
    const handleClick = (url) => window.open(url, '_blank');
    const iconStyle = {
        width: '43px',
        height: '43px',
    };

    return (
        <Button variant="contained" className="w-full flex items-center"
                onClick={() => handleClick(url)}>
            <SocialIcon url={`www.${icon}.com`} className="mr-2" style={iconStyle}/>
            <span className="flex-1 text-center mr-8">{icon}</span>
        </Button>
    )
}

export default LinkButton;