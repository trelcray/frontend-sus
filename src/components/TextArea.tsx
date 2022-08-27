export function TextArea() {
    return (
        <div>
            <textarea className="
                bg-inherit
                border
                border-gray-400
                rounded-md
                py-2
                px-2
                mb-3
                focus:outline
                focus:ring-1
                focus:border-blue-600
                focus:ring-blue-600" name="textArea" id="textArea" cols={30} rows={3}>

            </textarea>
        </div>
    )
}