import loadingImage from "../assets/images/loading.gif"

const Loading =()=>{
    return(
        <div className="flex justify-center items-center h-screen w-full">
            <img className="" src={loadingImage} alt="loading image" />
        </div>
    )
}

export default Loading;