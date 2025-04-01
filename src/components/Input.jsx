import { useState } from "react"

export const Input = ({ onEnterPress }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.length <= 1) return;
        onEnterPress(value);
        setValue('');
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex-fill">
            <input type="text" className="form-control me-2" value={value} onChange={handleChange} />
        </form>
    )
}
