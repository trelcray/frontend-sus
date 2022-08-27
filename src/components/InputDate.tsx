export function InputDate(){
    return (
        <div>
            <input className="
                        border
                        border-gray-400
                        rounded-md
                        py-2
                        px-2
                        mb-3
                        focus:outline
                        focus:ring-1
                        text-black
                        focus:border-blue-600
                        focus:ring-blue-600"
                        type="datetime-local"
                        name="date"
                        id="date"
                    />
        </div>
    )
}