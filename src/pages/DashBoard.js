import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actLogout } from '../store/user/action';
import { Button } from 'antd';
// nêu chưa login --> day sang page Login


function DashBoard(props) {
    const history = useHistory();
    const token = useSelector(state => state.User.token);
    const dispatch = useDispatch();

    useEffect(() => {
        // Muốn vào Dashboard thì phải Login => check token xem có login hay chưa?
        if(!token) {
            history.push('/login');
        }
    }, [token, history]);

    function handleLogout() {
        dispatch(actLogout());
    }

    return (
        <div>
            <h2>Hello guys, this is DashBoard  {token}</h2>
            <Button 
                type="primary"
                onClick={handleLogout}
            >
                Logout</Button>
        </div>
    );
}

export default DashBoard;