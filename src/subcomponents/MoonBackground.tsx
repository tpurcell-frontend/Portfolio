// Animations
import { useFadeInBottom } from '../assets/animations/useScrollFadeIn';
import { useFadeInMoon } from '../assets/animations/useFadeInMoon';

// Styles
import '../assets/styles/components/MoonSunWrapper.scss'


export default function MoonBackground() {
    const { ref: bottomRef, className: bottomClassName } = useFadeInBottom();
    const { ref: moonRef, className: moonClassName } = useFadeInMoon();

    return (
        <div className={`moon-wrapper mt-5 md:mt-20 ${moonClassName}`}  ref={moonRef}>
            <div className="moon"></div>
        </div>
    )
}