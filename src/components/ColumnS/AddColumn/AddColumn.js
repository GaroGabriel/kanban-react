import React, {useState} from 'react';
import './AddColumn.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AddColumnInput from "./AddcolumnInput/AddcolumnInput";
import AddColumnColors from "./AddColumnColors/AddColumnColors";
import {useDispatch, useSelector} from "react-redux";
import {checkColor, clearAllCheckedColors} from "../../../redux/columnsColorsMenu/columnsColorsMenu__action";
import {addColumn} from "../../../redux/columns/columns__action";

const AddColumn = () => {
    const [showInputs, setShowInputs] = useState(false)
    const [columnName, setColumnName] = useState('');
    const dispatch = useDispatch()
    const checkedColor = useSelector(state => state.columnsColorsMenu.colors.filter(color => color.checked))

    const showAndHideHandler = () => {
        setShowInputs(prev => !prev)
    }
    const columnNameHandler = (e) => {
        setColumnName(e.target.value)
    }
    const columnColorHandler = (id) => {
        dispatch(checkColor(id))
    }
    const submitAddColorForm = (e) => {
        if (e) {
            e.preventDefault()
        }
        if (columnName && checkedColor[0]) {
            dispatch(clearAllCheckedColors())
            dispatch(addColumn(columnName, checkedColor[0].color))
            setShowInputs(false)
            setColumnName('')
        }else{
            console.log('ssss')
        }

    }

    return (
        <div className='addColumn'>
            <div
                style={{background: checkedColor[0] ? checkedColor[0].color : null}}
                className='addColumn__button'
                onClick={() => showAndHideHandler()}
            >
                <span className='addColumn__header'>Add Column</span>
                <FontAwesomeIcon
                    className='addColumn__icon'
                    icon={faPlus}/>
            </div>
            {showInputs &&
            <AddColumnInput
                submitAddColorForm={submitAddColorForm}
                columnNameHandler={columnNameHandler}
                columnName={columnName}
            />}
            {showInputs &&
            <AddColumnColors
                columnColorHandler={columnColorHandler}
            />}


        </div>
    );
};

export default AddColumn;
