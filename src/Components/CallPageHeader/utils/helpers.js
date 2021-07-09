import React from 'react';
import moment from 'moment';
export const formatDate = (timestamp) =>{
    return momemt(timestamp).format("h:mm A");
}