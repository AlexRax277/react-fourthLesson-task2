import React, {useState} from 'react';
import AddingData from './AddingData.js';
import {v4 as uuid} from 'uuid';
import './Style.css';

function MyApp() {
    const [form, setForm] = useState({
        date: '',
        distance: ''
    });

    const [data, setData] = useState(
        [
            {'date': '2023.03.20', 'distance': 4}, 
            {'date': '2023.03.21', 'distance': 6},
            {'date': '2023.03.22', 'distance': 8} 
        ]
    );

    const x = React.createRef();
    
    const handler = (event) => {
        event.preventDefault();
        const datesList = data.map(el => {return el.date})
        if(form.data !== '' && form.distance !== '') {
            if(datesList.length > 0 && datesList.includes(form.date)) {
                const newData = data.map(el => {
                    if(el.date === form.date) {
                        data[data.indexOf(el)].distance = Number(el.distance) + Number(form.distance);
                    }
                    return el;
                })
                setData(newData.sort((x,y) => new Date(x['date']) > new Date(y['date']) ? 1 : -1));
            } else {
                setData(prevData => [...prevData, {'date': form.date, 'distance': form.distance}]
                .sort((x,y) => new Date(x['date']) > new Date(y['date']) ? 1 : -1));
            };
        };
    };
    
    const updateItem = (event) => {
        event.preventDefault();
        setForm({
            'date': event.target.parentNode.querySelector(`.date`).textContent,
            'distance': event.target.parentNode.querySelector(`.distance`).textContent
        });
        const newData = data.filter(el => el.date !== event.target.parentNode.querySelector('.date').textContent);
        setData(newData);
    };

    const deleteItem = (event) => {
        event.preventDefault();
        const newData = data.filter(el => el.date !== event.target.parentNode.querySelector('.date').textContent);
        setData(newData);
    };

    const createTable = () => {
        return data.map(element => {
            return (<li className='table-item' key={ uuid() }>
                <div className='info date'>{element.date}</div>
                <div className='info distance'>{element.distance}</div>
                <button className='btn-pen' onClick={updateItem}></button>
                <button className='btn-cross' onClick={deleteItem}></button>
            </li>);
        });
    };

    return <div>
        <form
            className='form'
            autoComplete='off'
            onSubmit={handler}>
            <AddingData form={form} setForm={setForm} ref={x}/>
        </form>
        <div className='info'>Дата(ДД.ММ.ГГ.)</div>
        <div className='info'>Пройдено км</div>
        <div className='info'>Действия</div>
        <ul className='table'>{createTable()}</ul>
    </div> 
};

export default MyApp;