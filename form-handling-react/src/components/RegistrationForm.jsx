import { useState } from 'react';

const ControlledForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.name || !formData.email || !formData.password) {
            setErrorMessage('All fields must be filled out.');
          } else {
            setErrorMessage(''); // Clear error message on successful validation
            // Perform submission logic (e.g., send data to the backend)
            console.log('Form submitted successfully:', formData);
          }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                username="username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
             <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;