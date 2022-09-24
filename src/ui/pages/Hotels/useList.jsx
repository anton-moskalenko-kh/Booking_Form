import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { push } from 'redux-first-history';
import selectors from '../../../engine/core/hotels/selectors';
import { links } from '../../../engine/config/links';

export const useList = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectors.item);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(push(links.main));
        }
    }, [dispatch, items]);

    return {
        items,
    };
};