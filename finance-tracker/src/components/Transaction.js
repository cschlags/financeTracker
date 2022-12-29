import React from 'react';
import './Transaction.css';

export default class Transaction extends React.Component {
    render() {
        return (
            <div class="component-transaction">
                <div class="transaction-container">
                    <div class="box" id="account">
                        <p>Checking</p>
                    </div>
                    <div class="box" id="date">
                        <p>12/03/2022</p>
                    </div>
                    <div class="box" id="payee">
                        <p>Harris Teeter's</p>
                    </div>
                    <div class="box" id="memo">
                        <p>to be blank</p>
                    </div>
                    <div class="box" id="category">
                        <p>Groceries</p>
                    </div>
                    <div class="box" id="status">
                        <p>cleared</p>
                    </div>
                    <div class="box" id="payment">
                        <p>$57.45</p>
                    </div>
                    <div class="box" id="deposit">
                        <p> to be blank</p>
                    </div>
                </div>
            </div>
        );
    }
}