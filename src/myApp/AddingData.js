import React from 'react';

const AddingData = React.forwardRef((props, ref) => {
    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        props.setForm(prevForm => ({...prevForm, [name]: value}));
    };

    return <div ref={ref}>
        <div style={{display:'inline-block'}}>
            <label htmlFor="date">Дата(ДД.ММ.ГГ.)</label>
            <input type="text" 
                name='date'
                className='date'
                style={{display:'block'}} 
                value={props.form.date} 
                onChange={handleChange}
            />
        </div>
        
        <div style={{display:'inline-block'}}>
            <label htmlFor="distance">Пройдено км</label>
            <input type="text" 
                name='distance'
                className='distance' 
                style={{display:'block'}} 
                value={props.form.distance} 
                onChange={handleChange}
            />
        </div>

        <button type='submit'>Ok</button>
    </div>
})

export default AddingData;