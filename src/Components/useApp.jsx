//! Images 
import Leaf from "../Images/leaf.png"
import Circle from "../Images/circle.png"
import IosModel from "../Images/iosModel.png"
import IosScreen from "../Images/iosScreen.png"
import Vector from "../Images/Vector.png"
import Wave from "../Images/wave.png"
import PlayStore from "../Images/playStore.png"
import AppStore from "../Images/appStore.png"

const useApp = () => {
  return (
    <>
    <div className=" max-w-full max-h-full flex justify-between bg-[rgb(237,235,228)] ">
      <img className="w-[350px] h-[350px] mt-[373px] block" src={Leaf} alt="" />
      <div className="flex justify-between items-center">
      <div className="relative right-[240px]">
        <img className="absolute left-4 block" src={Circle} alt="" />
        <img className="text-white w-[290px]  mt-[100px] ml-[205px] "src={IosModel} alt="" />
        <img className="text-white absolute  bottom-3 left-2 w-[260px] h-[560px] ml-[205px] mt-[94px]" src={IosScreen} alt="" />
      </div>
      <div>
        <p className="text-[#111] w-[594px] h-[65px]  text-5xl font-normal capitalize">download our app now !</p>
        <img className="mb-[50px]" src={Wave} alt="" />
        <p className="w-[620px] text-[#7A7A7A] text-base leading-8 tracking-[0.32px] h-[100px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.</p>
        <div className="flex mt-5 ">
<img className="mr-3" src={PlayStore}  alt="" />
<img src={AppStore} alt="" />
        </div>
      </div>
      <div>
      <img className="w-[180px] mb-[550px] h-[180px]" src={Vector} alt="" />
      </div>
      </div>
      </div>
    </>
  )
}

export default useApp