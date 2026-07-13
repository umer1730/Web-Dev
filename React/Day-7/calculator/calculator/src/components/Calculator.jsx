function Calculator(){
    if(value == "="){
        try{
            setInput(eval(input).toString())
        }
        catch{
            setInput("Error")
        }
    }
    else if(value === "C"){
        setInput("")
    }
    else{
        setInput(input + value)
    }
}
const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
]

return (
    <div className="calculator">
        <input type="text"
        value = {input}
        readOnly
        />

        
    </div>
)