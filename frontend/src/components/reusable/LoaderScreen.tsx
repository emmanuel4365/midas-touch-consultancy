import { LoaderWrapper } from "../index";
import midasIcon from "../../assets/midas-icon.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);

const LoaderScreen = () => {
    useGSAP(() => {
        const split = new SplitText("#imageText", {
            type: "chars"
        });
        gsap.to(split.chars, {
            y: -15,
            repeat: -1,
            yoyo: true,
            stagger: 0.1,
            ease: 'elastic.inOut'
        });
    });
    return (
        <LoaderWrapper>
            <img src={midasIcon} alt="midas loading icon" id="imageIcon" />
            <h1 id="imageText">
                Midas Touch
            </h1>
        </LoaderWrapper>
    );
};
export default LoaderScreen;