import {  styled} from "@mui/material";

type RoundedButtonProps = {
    label:string,
    href: string
}

const StyledButton = styled('a')({
    borderRadius: '25px',
    backgroundColor: '#fff',
    color: '#000',
    border: '1.2px solid #000',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'semibold',
    cursor: 'pointer',
    textDecoration: 'none'
})

const RoundedButton = ({label, href}:RoundedButtonProps) => {
    return ( <StyledButton href={href}>{label}</StyledButton> );
}
 
export default RoundedButton;