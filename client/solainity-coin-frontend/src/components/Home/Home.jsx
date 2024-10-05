import { FifthComponent } from "./Sub Components/FifthComponet"
import { FirstComponent } from "./Sub Components/FirstComponet"
import { FourthComponent } from "./Sub Components/FourthComponent"
import { SecondComponent } from "./Sub Components/SecondComponent"
import { SevenComponent } from "./Sub Components/SevenComponent"
import { SixComponent } from "./Sub Components/SixComponent"
import ThirdComponent from "./Sub Components/ThirdComponent"

function Home(){
    return(
        <div className="bg-black">
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthComponent />
            <SixComponent />
            <SevenComponent />
        </div>
    )
}

export default Home