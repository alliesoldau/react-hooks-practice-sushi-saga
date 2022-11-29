import React, { useState } from 'react';

function MoneyForm({ cash, increaseCash }) {

    const [newCash, setMoreCash] = useState(0)
    
    function handleSubmit(e) {
        e.preventDefault()
        const parsedCash = parseInt(newCash, 10)
        if (parsedCash % 1 === 0) {
        increaseCash(parsedCash)
        }
    }

    return(
        <div className="moneyForm"> 
            <form onSubmit={handleSubmit}>
                <h3>Add more money</h3>
                <input 
                    type="number"
                    name="money"
                    palceholder="$0"
                    value={newCash}
                    onChange={(e) => setMoreCash(e.target.value)}
                />
                <input
                    type="submit"
                    name="submit"
                    value="Add cash to your wallet"
                    className="submit"
                />
            </form>
        </div>
    
    )
}

export default MoneyForm;