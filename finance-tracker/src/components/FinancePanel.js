import React from 'react';
import Transaction from './Transaction';
import './FinancialPanel.css';


export default class FinancePanel extends React.Component {
    render() {
        return (
            <div className="component-financial">
                <Transaction/>
            </div>
        );
    }
}