import { StyledShinyText } from './Header.styles';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyButton: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <StyledShinyText disabled={disabled} speed={speed} className={className}>
      {text}
    </StyledShinyText>
  );
};

export default ShinyButton;
