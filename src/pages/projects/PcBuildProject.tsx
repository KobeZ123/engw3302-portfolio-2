import pcpartpickerImage from "./../../../public/pcpartpicker.png";
import neweggImage from "./../../../public/newegg.png";

export default function PcBuildProject() {
    return (
        <div className="w-[960px] max-w-[90vw]">
            <div className="flex flex-row w-full justify-start">
                <button
                    onClick={() => {
                        window.history.back();
                    }}
                    className="hover:text-red-600"
                    >
                    <p className="font-bold">Back</p>
                </button>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-bold my-8">PC Builder Catalog</h2>
                {/* <a href="" className="mb-8">Link to Project</a> */}
                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">Project Description</h4>
                    <p>The PC Builder Catalog is a full-stack web application that simulates a list maker and online retailer for computer parts, similar to platforms like PCPartPicker and Newegg.</p>
                </section>
            </div>
            
        </div>
    )
}