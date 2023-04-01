import {v4 as uuid} from 'uuid';

function TableView(props) {
    
    const deleteItem = (event) => {
        event.preventDefault();
        event.target.parentNode.remove();
    }
    
    
    const createTable = () => {
        
        return props.data.map(element => {
            return (<li className='table-item' key={ uuid() }>
                <div className='info'>{element.date}</div>
                <div className='info'>{element.distance}</div>
                <button className='btn-pen'></button>
                <button className='btn-cross' onClick={deleteItem}></button>
            </li>);
        });
    }
    

    return <ul className='table'>
        {createTable()}
    </ul>
}

export default TableView;