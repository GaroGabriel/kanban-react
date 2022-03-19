import React, {useEffect} from 'react';
import './testing.scss'
import {useDispatch, useSelector} from "react-redux";
import {makeTest} from "../../redux/test/test_action";

const Testing = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(makeTest('test is done'))
    }, [])

    console.log(state)
    return (
        <div>
            <div className='tester'>
                <h1 className="tester__header">
                    testing <span className='tester__header-big'>444</span>
                </h1>
            </div>
        </div>
    );
};

export default Testing;
