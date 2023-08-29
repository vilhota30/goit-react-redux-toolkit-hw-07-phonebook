import {Vortex} from "react-loader-spinner";
import { LoaderStyled } from "./Loader.styled";

const Loader = () => {
    return (
        <LoaderStyled>
            <Vortex
               visible={true}
               height="100"
               width="100"
               ariaLabel="vortex-loading"
               wrapperStyle={{}}
               wrapperClass="vortex-wrapper"
               colors={['blueviolet', 'white', 'deeppink', 'darksalmon', 'moccasin']}
            />
        </LoaderStyled>
    );
};

export default Loader;