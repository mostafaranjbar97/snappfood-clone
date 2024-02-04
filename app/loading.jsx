import Image from "next/image";

const Loading = () => {
    return (
      <div>
        <div className="text-white flex justify-center items-center p-8 ">
            <Image width={120} height={30} src={"/icons/loading/loading.svg"}/>
        </div>
      </div>
    );
  };
  
  export default Loading;